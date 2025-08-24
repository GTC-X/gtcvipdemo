import { NextResponse } from "next/server";

export async function GET() {
  const now = Date.now(); // server clock
  return NextResponse.json(
    { ms: now, iso: new Date(now).toISOString() },
    { headers: { "Cache-Control": "no-store" } }
  );
}
