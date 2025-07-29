"use client";
import { useEffect, useState } from "react";

const CountdownSection = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-15T00:00:00Z"); // ⏰ Set your launch date/time here
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    const timeLeft = {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((difference / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
  <section className="relative bg-white overflow-hidden pb-10">
  {/* Beige wave background behind countdown */}
  <div className="absolute bottom-0 left-0 w-full z-0">
    <svg
      viewBox="0 0 1440 140"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[100px] md:h-[140px]"
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
  <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
    <h2 className="text-[#20205B] text-lg md:text-xl xl:text-[22px] font-medium mb-10">
      GTC’s First-Ever Demo Trading Competition Starts In:
    </h2>

    <div className="flex justify-between items-center gap-4 sm:gap-8 md:gap-12">
      {[
        { label: "D A Y S", value: timeLeft.days },
        { label: "H O U R S", value: timeLeft.hours },
        { label: "M I N U T E S", value: timeLeft.minutes },
        { label: "S E C O N D S", value: timeLeft.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="text-[36px] md:text-[48px] xl:text-[60px] xl:leading-[72px] font-extrabold bg-[linear-gradient(135deg,#293794_0%,#000021_100%)] bg-clip-text text-transparent leading-none">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="mt-2 text-xs md:text-base xl:text-[20px] font-semibold text-[#20205B] tracking-widest uppercase">
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
