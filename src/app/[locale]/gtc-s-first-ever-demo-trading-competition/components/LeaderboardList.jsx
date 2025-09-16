// components/LeaderboardList.jsx
"use client";
import React from "react";

const COLORS = {
  navy: "#1E2B50",
  navy2: "#21315A",
  stroke: "rgba(255,255,255,0.14)",
  line: "rgba(255,255,255,0.08)",
  gold: "#C49A6C",
  white: "rgba(255,255,255,0.94)",
  sub: "rgba(255,255,255,0.65)",
};

export default function LeaderboardList({
  items = SAMPLE_ITEMS,            // pass your real array here
  className = "",
  withOuterPanel = false,          // set true if you want an outer rounded panel like in your shot
}) {
  return (
    <section
      className={`w-full ${className}`}
      style={{ background: withOuterPanel ? `linear-gradient(180deg, ${COLORS.navy2} 0%, ${COLORS.navy} 100%)` : "transparent" }}
    >
      <div className={`mx-auto bg-gray-100 p-6 rounded-lg ${withOuterPanel ? "max-w-6xl p-3 md:p-6 rounded-[28px]" : "max-w-6xl"} `}
           style={withOuterPanel ? { border: `1px solid ${COLORS.stroke}` } : undefined}>
        <ul className="flex flex-col gap-4">
          {items.map((row) => (
            <Row key={row.rank} row={row} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({ row }) {
  return (
    <li
      className="relative rounded-2xl px-4 py-3 md:px-6 md:py-4
                 flex items-center justify-between gap-4
                 shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                 transition hover:-translate-y-0.5"
      style={{
        background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navy2} 100%)`,
        border: `1px solid ${COLORS.stroke}`,
      }}
    >
      {/* LEFT: rank + avatar + name/handle */}
      <div className="flex items-center gap-4 min-w-0">
        <div className="shrink-0 text-lg font-bold" style={{ color: COLORS.white }}>
          <span className="opacity-90">#</span>
          <span className="ml-0.5">{row.rank}</span>
        </div>

        <div
          className="grid place-items-center rounded-full shrink-0"
          style={{ width: 42, height: 42, border: `2px solid ${COLORS.gold}` }}
        >
          {/* user icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
              fill={COLORS.gold}
            />
          </svg>
        </div>

        <div className="min-w-0 text-left">
          <div className="truncate text-base md:text-lg font-semibold" style={{ color: COLORS.white }}>
            {row.name}
          </div>
          <div className="truncate text-sm md:text-[15px] font-medium" style={{ color: COLORS.gold }}>
            {row.handle}
          </div>
        </div>
      </div>

      {/* RIGHT: account + percent */}
      <div className="text-right">
        <div className="text-xs md:text-sm" style={{ color: COLORS.sub }}>
          {row.balance}
        </div>
        <div className="leading-tight text-[17px] md:text-[20px] font-extrabold" style={{ color: COLORS.white }}>
          {row.percent}
        </div>
      </div>

      {/* subtle inner line for that “double-border” feel */}
      <div
        className="pointer-events-none absolute inset-x-3 bottom-0 h-[1px] rounded-full"
        style={{ backgroundColor: COLORS.line }}
      />
    </li>
  );
}

/** sample data matching your screenshot */
const SAMPLE_ITEMS = [
  { rank: 1, name: "taofeek",
    handle: "@niyiolaniyi18",
    balance: "$1,666,566.15" },
  { rank: 2,  name: "Levine",
    handle: "@levineonyango62",
    balance: "$1,599,761.85" },
  { rank: 3, name: "Gbafan",
    handle: "@egbafan",
    balance: "$681,896.70", }
];
