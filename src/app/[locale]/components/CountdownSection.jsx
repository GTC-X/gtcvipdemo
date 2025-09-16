'use client';
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const CountdownSection = () => {
  const t = useTranslations("demo.counter");

  const calculateTimeLeft = () => {
    // Set target date in Dubai time (UTC+4)
    const targetDate = new Date("2025-10-13T00:00:00+04:00"); // Dubai time
    // Get current time and adjust to Dubai timezone (UTC+4)
    const now = new Date();
    const dubaiOffset = 4 * 60; // UTC+4 in minutes
    const localOffset = now.getTimezoneOffset(); // Local timezone offset in minutes
    const dubaiTime = new Date(now.getTime() + (dubaiOffset + localOffset) * 60 * 1000);

    const difference = targetDate.getTime() - dubaiTime.getTime();

    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden pb-16">
      {/* Beige wave background */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 140"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[100px] md:h-[190px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(232, 219, 204, 1)" offset="0%" />
              <stop stopColor="rgba(232, 219, 204, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,112L40,100.3C80,89,160,65,240,49C320,33,400,23,480,32.7C560,42,640,70,720,74.7C800,79,880,61,960,63C1040,65,1120,89,1200,86.3C1280,84,1360,56,1440,37.3V140H0Z"
          />
        </svg>
      </div>

      {/* Countdown Content */}
      <div className="relative z-10 max-w-6xl mx-auto md:text-center px-4">
        <h2 className="text-[#20205B] text-xl xl:text-[22px] mb-10">
          {t("title")}
        </h2>

        <div className="flex justify-between items-center gap-2 sm:gap-8 md:gap-12">
          {[
            { label: t("days"), value: timeLeft.days },
            { label: t("hours"), value: timeLeft.hours },
            { label: t("min"), value: timeLeft.minutes },
            { label: t("sec"), value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-[40px] md:text-[48px] xl:text-[60px] xl:leading-[72px] font-extrabold bg-[linear-gradient(135deg,#293794_0%,#000021_100%)] bg-clip-text text-transparent leading-none">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="mt-2 text-base xl:text-[20px] font-semibold text-[#20205B] md:tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;