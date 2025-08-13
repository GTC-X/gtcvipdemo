import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Parse GViz JSONP → JSON
function parseGviz(jsonp) {
  const start = jsonp.indexOf("{");
  const end = jsonp.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("Unexpected GViz payload");
  return JSON.parse(jsonp.slice(start, end + 1));
}

// Normalize to { columns, rows[] }
function normalize(table) {
  const cols = (table.cols || []).map((c) => (c?.label || c?.id || "").trim());
  const rows =
    (table.rows || []).map((r) => {
      const obj = {};
      cols.forEach((col, i) => {
        const cell = r.c?.[i];
        obj[col || `col_${i + 1}`] = cell?.f ?? cell?.v ?? null;
      });
      return obj;
    }) ?? [];
  return { columns: cols, rows };
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");     // spreadsheet id
  const gid = searchParams.get("gid");   // sheet/tab id
  const sheet = searchParams.get("sheet");// OR sheet name
  const tq = searchParams.get("tq") || "";// optional query
  if (!id) return NextResponse.json({ error: "Missing ?id" }, { status: 400 });

  const base = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq`;
  const qp = new URLSearchParams({ tqx: "out:json", tq });
  if (gid) qp.set("gid", gid);
  if (sheet) qp.set("sheet", sheet);

  const res = await fetch(`${base}?${qp.toString()}`, { cache: "no-store" });
  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "GViz fetch failed", status: res.status, details: text },
      { status: 500 }
    );
  }

  const jsonp = await res.text();
  const parsed = parseGviz(jsonp);
  if (parsed?.status !== "ok") {
    return NextResponse.json(
      { error: "GViz returned non-ok", details: parsed?.errors },
      { status: 500 }
    );
  }

  const { columns, rows } = normalize(parsed.table);
  return NextResponse.json({ columns, rows }, { status: 200 });
}
