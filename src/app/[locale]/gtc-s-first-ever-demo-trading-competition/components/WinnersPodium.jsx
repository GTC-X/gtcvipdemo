// components/WinnersPodium.jsx
"use client";
import React from "react";

const COLORS = {
  navy: "#23355A",
  navyDark: "#1C2A4A",
  stroke: "rgba(255,255,255,0.08)",
  gold: "#C49A6C",
  goldLight: "#E1CFBB",
  silver: "#C9CED6",
  bronze: "#C07A3E",
  text: "rgba(255,255,255,0.92)",
  sub: "rgba(255,255,255,0.7)",
  line: "rgba(255,255,255,0.18)",
  icon: "rgba(255,255,255,0.85)",
};

export default function WinnersPodium({
  winners = [
    {
      rank: 1,
      prize: "Wins $1,500 in a GTC Live Trading Account",
     name: "taofeek",
    handle: "@niyiolaniyi18",
    balance: "$1,666,566.15",
      account: "#21229339",
      percent: "16,218%",
    },
    {
      rank: 2,
      prize: "Wins $3,000 in a GTC Live Trading Account",
       name: "Levine",
    handle: "@levineonyango62",
    balance: "$1,599,761.85",
      account: "#21232053",
      percent: "18,070%",
    },
    
    {
      rank: 3,
      prize: "Wins $500 in a GTC Live Trading Account",
       name: "Gbafan",
    handle: "@egbafan",
    balance: "$681,896.70",
      account: "#21229693",
      percent: "10,415%",
    },
  ],
}) {
  // sort just in case
  const sorted = [...winners].sort((a, b) => a.rank - b.rank);

  return (
    <section
      className="w-full py-10"
     
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((w) => (
            <WinnerCard key={w.rank} w={w} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WinnerCard({ w }) {
  const palette =
    w.rank === 1
      ? { medal: COLORS.gold, accent: COLORS.goldLight, title: "1st Place" }
      : w.rank === 2
      ? { medal: COLORS.silver, accent: "#E6E9EE", title: "2nd Place" }
      : { medal: COLORS.bronze, accent: "#E6C4AC", title: "3rd Place" };

  return (
    <div
      className="relative rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
      style={{
        background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyDark} 100%)`,
        border: `1px solid ${COLORS.stroke}`,
      }}
    >
      {/* medal badge */}
      <div className="">
        <Medal color={palette.medal} />
      </div>

      {/* header */}
      <div className="mt-8 text-center">
        <h3
          className="text-2xl md:text-[28px] font-extrabold tracking-wide"
          style={{
            color: palette.accent,
            textShadow: "0 2px 0 rgba(0,0,0,0.15)",
          }}
        >
          {palette.title}
        </h3>
        <p className="mt-2 text-center text-base md:text-lg leading-relaxed" style={{ color: COLORS.text }}>
          {w.prize}
        </p>
      </div>

      {/* divider */}
      <div className="my-6 h-px w-full" style={{ backgroundColor: COLORS.line }} />

      {/* profile */}
      <div className="flex flex-col items-center">
        <div
          className="mb-3 grid place-items-center rounded-full"
          style={{
            width: 56,
            height: 56,
            border: `2px solid ${palette.accent}`,
            background: "transparent",
          }}
        >
          {/* user icon */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
              fill={COLORS.icon}
            />
          </svg>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold" style={{ color: COLORS.text }}>
            {w.name}
          </div>
          <div className="text-sm" style={{ color: COLORS.sub }}>
            {w.handle}
          </div>
          <div className="text-sm mt-0.5" style={{ color: COLORS.sub }}>
            {w.balance}
          </div>

         
        </div>
      </div>

      {/* soft glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          boxShadow: `inset 0 0 0 1px ${COLORS.stroke}, 0 20px 60px rgba(0,0,0,0.25)`,
        }}
      />
    </div>
  );
}

function Medal({ color = COLORS.gold }) {
  return (
    <div className="relative">
      {/* ribbon */}
      <div className="mx-auto flex items-center justify-center gap-1">
        <span className="block h-3 w-2 rounded-sm bg-[#EE2E31]" />
        <span className="block h-3 w-2 rounded-sm bg-white" />
        <span className="block h-3 w-2 rounded-sm bg-[#1841A2]" />
      </div>
      {/* coin */}
      <div
        className="mx-auto -mt-1 grid place-items-center rounded-full"
        style={{
          width: 40,
          height: 40,
          background: `radial-gradient(60% 60% at 50% 40%, ${lighten(color, 0.25)} 0%, ${color} 70%, ${shade(
            color,
            0.35
          )} 100%)`,
          boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
          border: "1px solid rgba(255,255,255,0.35)",
        }}
      >
        <span className="text-white font-bold text-lg">🏅</span>
      </div>
    </div>
  );
}

/* tiny color helpers */
function shade(hex, amt = 0.2) {
  const { r, g, b } = hexToRgb(hex);
  return `rgb(${Math.round(r * (1 - amt))}, ${Math.round(g * (1 - amt))}, ${Math.round(b * (1 - amt))})`;
}
function lighten(hex, amt = 0.2) {
  const { r, g, b } = hexToRgb(hex);
  return `rgb(${Math.round(r + (255 - r) * amt)}, ${Math.round(g + (255 - g) * amt)}, ${Math.round(
    b + (255 - b) * amt
  )})`;
}
function hexToRgb(hex) {
  const c = hex.replace("#", "");
  const bigint = parseInt(c.length === 3 ? c.split("").map((x) => x + x).join("") : c, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}
