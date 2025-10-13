"use client";
import { useEffect, useRef, useState } from "react";
import SliderModal from "../5k-demo-trading-competition/components/SliderModal";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { useTranslations } from "next-intl";
import HeroSection from "../components/common/HeroSection";
import CountdownSection from "../components/CountdownSection";
import WhyJoinSection from "../5k-demo-trading-competition/components/WhyJoinSection";
import HowWorkSection from "../5k-demo-trading-competition/components/HowWorkSection";
import EarningsMarginImpact from "../5k-demo-trading-competition/components/marginInfoPanel";
import FinalCtaSection from "../5k-demo-trading-competition/components/FinalCtaSection";
import Meta from "@/app/components/common/MetaData";

const DUBAI_TZ = "Asia/Dubai";

// 👉 set your cutoff here (Dubai time)
const CUTOFF_H = 23; // 21 == 9 PM
const CUTOFF_M = 0;
const CUTOFF_S = 0;

/** Monotonic "now" based on server time; falls back to client time if fetch fails. */
function makeNowGetter(serverStartMs, perfStart) {
  return () => {
    if (serverStartMs != null && perfStart != null) {
      const elapsed = performance.now() - perfStart;
      return serverStartMs + elapsed;
    }
    return Date.now();
  };
}

/** Seconds since 00:00 in Dubai for a given absolute ms. */
function getDubaiSecondsOfDay(nowMs) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: DUBAI_TZ,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(new Date(nowMs));

  const h = parseInt(parts.find(p => p.type === "hour")?.value ?? "0", 10);
  const m = parseInt(parts.find(p => p.type === "minute")?.value ?? "0", 10);
  const s = parseInt(parts.find(p => p.type === "second")?.value ?? "0", 10);
  return h * 3600 + m * 60 + s;
}

/** Absolute ms (UTC) for today's Dubai cutoff (HH:MM:SS). */
function getTodayDubaiCutoffMs(nowMs, h = 23, m = 59, s = 59) {
  const secondsOfDay = getDubaiSecondsOfDay(nowMs);
  const startOfDubaiDayMs = nowMs - secondsOfDay * 1000;
  const cutoffSeconds = h * 3600 + m * 60 + s;
  return startOfDubaiDayMs + cutoffSeconds * 1000;
}

const UaePartnerPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("demo");

  // This controls what you show/hide after the cutoff
  const [isAfterMidnight, setIsAfterMidnight] = useState(false);

  // Server-time anchoring
  const serverStartRef = useRef(null);
  const perfStartRef = useRef(null);
  const now = useRef(() => Date.now());

  // Interval ref (Strict Mode safe)
  const intervalRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const evaluate = () => {
      const current = now.current();

      // 🔁 Recompute cutoff each tick so edits (23→21) take effect immediately
      const cutoffMs = getTodayDubaiCutoffMs(current, CUTOFF_H, CUTOFF_M, CUTOFF_S);
      const after = current >= cutoffMs;

      setIsAfterMidnight(prev => (prev === after ? prev : after));

      // Debug
      console.debug(
        "[cutoff check]",
        new Date(current).toLocaleString("en-GB", { timeZone: DUBAI_TZ }),
        { after, cutoff: new Date(cutoffMs).toLocaleString("en-GB", { timeZone: DUBAI_TZ }) }
      );
    };

    const startInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(evaluate, 30_000);
    };

    const onVisibility = () => {
      if (!document.hidden) evaluate(); // re-check on focus
    };

    const init = async () => {
      try {
        const res = await fetch("/api/server-time", { cache: "no-store" });
        if (res.ok) {
          const { ms } = await res.json();
          serverStartRef.current = typeof ms === "number" ? ms : Date.now();
          perfStartRef.current = performance.now();
          now.current = makeNowGetter(serverStartRef.current, perfStartRef.current);
        } else {
          now.current = () => Date.now();
        }
      } catch {
        now.current = () => Date.now();
      }

      if (!mounted) return;

      evaluate();           // initial
      startInterval();      // every 30s
      document.addEventListener("visibilitychange", onVisibility);
    };

    init();

    return () => {
      mounted = false;
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  

  return (
    <>
      <Meta title={t("meta.title")} description={t("meta.description")} />
      <MainHeader setIsOpen={setIsOpen} />

      <HeroSection setIsOpen={setIsOpen} isAfterMidnight={true} />
     
      <WhyJoinSection setIsOpen={setIsOpen} isAfterMidnight={true} />
      <HowWorkSection setIsOpen={setIsOpen} isAfterMidnight={true} />
      <EarningsMarginImpact isAfterMidnight={true} />
      <FinalCtaSection setIsOpen={setIsOpen} isAfterMidnight={true} />

      <MainFooter />
      <SliderModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default UaePartnerPage;
