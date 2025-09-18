// components/CompetitionTable.jsx
"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function CompetitionTable({
  titleKey = "competitionTitle", // translation key
  date = "11/8/2025",
  rows = SAMPLE_ROWS,
  className = "",
}) {
  const t = useTranslations("previous.banner"); // looks up from /locales/[lang]/previous.json

  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              {/* Top banner row (title + date) */}
              <tr className="bg-indigo-50">
                <th colSpan={3} className="px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-slate-900">
                      {t(titleKey)}
                    </span>
                    <span className="text-sm font-medium text-slate-600">
                      {t("date")} {date}
                    </span>
                  </div>
                </th>
              </tr>
              {/* Column headers */}
              <tr className="border-t border-slate-200 bg-slate-50/70">
                <th className="px-5 py-3 w-[90px] text-slate-600 text-sm font-semibold">
                  #
                </th>
                <th className="px-5 py-3 text-slate-600 text-sm font-semibold">
                  {t("username")}
                </th>
                <th className="px-5 py-3 text-right text-slate-600 text-sm font-semibold">
                  {t("total")}
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="border-t border-slate-100 hover:bg-slate-50/60 transition"
                >
                  <td className="px-5 py-3 font-semibold text-slate-900">
                    {r.rank}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="grid place-items-center rounded-full border border-indigo-300 h-9 w-9">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
                            fill="#6366F1"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-900 font-medium">{r.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-right font-bold text-slate-900">
                    {r.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const SAMPLE_ROWS = [
  { rank: 1, name: "taofeek", handle: "@niyiolaniyi18", balance: "$1,666,566.15" },
  { rank: 2, name: "Levine", handle: "@levineonyango62", balance: "$1,599,761.85" },
  { rank: 3, name: "Gbafan", handle: "@egbafan", balance: "$681,896.70" },
];
