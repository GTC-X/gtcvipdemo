"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
export default function SheetTable({
  id,
  gid,
  sheet,
  tq,
  minHeight = 450,
  maxHeight = 600,
}) {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("demo.register");

  // Fetch normalized { columns, rows } from your API route
  useEffect(() => {
    const qs = new URLSearchParams({
      id,
      ...(gid ? { gid } : {}),
      ...(sheet ? { sheet } : {}),
      ...(tq ? { tq } : {}),
    });
    setLoading(true);
    fetch(`/api/sheets/google-public?${qs.toString()}`, { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => {
        if (d.error) throw new Error(d.error);
        setColumns(d.columns || []);
        setRows(d.rows || []);
      })
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, [id, gid, sheet, tq]);

  // Helpers
  const hasValue = (v) =>
    v !== null && v !== undefined && String(v).trim() !== "";
  const norm = (v) => (v == null ? "" : String(v).trim());

  // ORIGINAL column index map -> keep cell access stable after filtering
  const colIndexMap = useMemo(() => {
    const map = new Map();
    columns.forEach((c, i) => map.set(c || `col_${i + 1}`, i));
    return map;
  }, [columns]);

  // Keep only columns that have any non-empty cell
  const columnsWithData = useMemo(() => {
    return columns.filter((col, idx) =>
      rows.some((r) => hasValue(r[col] ?? r[`col_${idx + 1}`]))
    );
  }, [columns, rows]);

  // Take the first 5 such columns
  const selectedCols = useMemo(
    () => columnsWithData.slice(0, 5),
    [columnsWithData]
  );

  // Header detectors (case-insensitive)
  const isNameHeader = (h = "") =>
    /\b(full\s*)?name\b|\bfirst\s*name\b|\blast\s*name\b|\bsurname\b|\bfamily\s*name\b/i.test(
      h.trim()
    );

  const isEmailHeader = (h = "") =>
    /\b(e[-\s]?mail|email\s*address)\b/i.test(h) ||
    h.trim().toLowerCase() === "email";

  // Simple email-looking fallback (for odd headers)
  const looksLikeEmail = (val = "") => /\S+@\S+\.\S+/.test(String(val));

  // Masking helpers
  const maskName = (val) => {
    const s = String(val || "").trim();
    if (!s) return "";
    const keep = s.slice(0, 2); // keep first two as-is
    return `${keep}xxx`;
  };

  const maskEmail = (val) => {
    const s = String(val || "").trim();
    const at = s.indexOf("@");
    if (at === -1) return maskName(s).toLowerCase(); // not an email
    const local = s.slice(0, at);
    const domain = s.slice(at + 1);
    const localMasked = `${local.slice(0, 2).toLowerCase()}xxx`;
    const lastDot = domain.lastIndexOf(".");
    const tld = lastDot > -1 ? domain.slice(lastDot + 1) : "com";
    return `${localMasked}@xxxx.${tld}`;
  };

  // LAST ROW FIRST + de-dup on the selected columns
  const processedRows = useMemo(() => {
    const seen = new Set();
    const out = [];
    const source = [...rows].reverse(); // last row first

    for (const r of source) {
      // project to selected columns using ORIGINAL indices
      const proj = selectedCols.map((c) => {
        const idx = colIndexMap.get(c) ?? 0;
        return norm(r[c] ?? r[`col_${idx + 1}`]);
      });

      // skip completely empty projected rows
      if (proj.every((x) => x === "")) continue;

      // de-dup key
      const key = proj.join("§|§");
      if (seen.has(key)) continue;
      seen.add(key);

      // back to object keyed by selected column labels
      const obj = {};
      selectedCols.forEach((c, i) => (obj[c || `Column ${i + 1}`] = proj[i]));
      out.push(obj);
    }
    return out; // newest → oldest
  }, [rows, selectedCols, colIndexMap]);

  if (loading) return <div className="p-4 text-sm text-gray-500">Loading…</div>;
  if (err) return <div className="p-4 text-sm text-red-600">Error: {err}</div>;
  if (!processedRows.length) return <div className="p-4">No data.</div>;

  return (
    <div className="w-full">
      {/* White card with internal scroll */}
      <div
        className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
        style={{ minHeight, maxHeight, display: "flex", flexDirection: "column" }}
      >
        <div className="overflow-auto">
          <table className="min-w-full text-sm text-gray-800 table-fixed">
            {/* Sticky header */}
           <thead className="bg-gradient-to-r from-[#293794] to-[#000021] sticky top-0 z-10">
  <tr className="text-left">
    <th className="px-4 py-4 text-[11px] md:text-base font-semibold uppercase tracking-wide text-white text-center border-b border-gray-200">
      {t("table.account")}
    </th>
    <th className="px-4 py-4 text-[11px] md:text-base font-semibold uppercase tracking-wide text-white text-center border-b border-gray-200">
           {t("table.firstName")}
    </th>
    <th className="px-4 py-4 text-[11px] md:text-base font-semibold uppercase tracking-wide text-white text-center border-b border-gray-200">
          {t("table.lastName")}
    </th>
    <th className="px-4 py-4 text-[11px] md:text-base font-semibold uppercase tracking-wide text-white text-center border-b border-gray-200">
           {t("table.email")}
    </th>
    <th className="px-4 py-4 text-[11px] md:text-base font-semibold uppercase tracking-wide text-white text-center border-b border-gray-200">
           {t("table.balance")}
    </th>
  </tr>
</thead>

           <tbody>
  {processedRows.map((r, idx) => (
    <tr
      key={idx}
      className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50/40 transition-colors"
    >
      <td className="px-4 py-3 border-b border-gray-100 align-middle">
        {r["User ID"]}
      </td>
      <td className="px-4 py-3 border-b border-gray-100 align-middle">
        {maskName(r["First Name"])}
      </td>
      <td className="px-4 py-3 border-b border-gray-100 align-middle">
        {maskName(r["Last Name"])}
      </td>
      <td className="px-4 py-3 border-b border-gray-100 align-middle">
        {maskEmail(r["Email"])}
      </td>
      <td className="px-4 py-3 border-b border-gray-100 align-middle text-right">
        {r["Amount"]}
      </td>
    </tr>
  ))}
</tbody>
          </table>
        </div>

        {/* Optional footer */}
        {/* <div className="border-t border-gray-200 px-4 py-2 text-xs text-gray-500">
          Showing {processedRows.length} unique rows
        </div> */}
      </div>
    </div>
  );
}
