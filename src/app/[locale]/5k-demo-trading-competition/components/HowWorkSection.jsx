"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import CustomButton from "@/app/components/common/CustomButton";
import RegistrationPopup from './RegistrationPopup';
import Link from "next/link";

export default function HowItWorksSection({ setIsOpen,isAfterMidnight }) {
  const t = useTranslations("demo.work");
   const t2 = useTranslations('demo.banner');

  const steps = [
    {
      title: t("list.t1.step"),
      heading: t("list.t1.name"),
      desc: t("list.t1.stars"),
    },
    {
      title: t("list.t2.step"),
      heading: t("list.t2.name"),
      desc: t("list.t2.stars"),

    },
    {
      title: t("list.t3.step"),
      heading: t("list.t3.name"),
      desc: t("list.t3.stars"),

    },
    {
      title: t("list.t4.step"),
      heading: t("list.t4.name"),
      desc: t("list.t4.stars"),
    },
  ];

  return (
    <section
      className="relative py-16 md:py-20 bg-white overflow-hidden bg-[url('/demo/work.webp')] bg-cover bg-center"
      id="work"
    >
      {/* Main Content */}
      <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-18">
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-bold text-[#4D4D70] leading-snug">
            {t("heading")}
          </h2>
          <p className="text-[#4D4D70] text-base sm:text-lg xl:text-[22px] max-w-xl">
            {t("paragraph")}
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 md:pb-20 md:px-0 mt-4"
          >
            <div className="flex flex-row justify-center md:justify-start items-center gap-4 pb-8 md:pb-20">
              <CustomButton
                text={t2("btnText")}
                bgColor="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm lg:text-lg font-semibold text-white bg-gradient-to-r from-primary to-[#263B93] shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#263B93] hover:bg-[#b2b2c2]"
                textColor="text-[#1F2937]"
                strokeColor="#000032"
                onClick={() => setIsOpen(true)}
              />
            </div>
            
          </div>
          
        </div>

        {/* Right Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-[#1A1A3C] text-sm xl:text-[20px] font-semibold mb-1">
                {step.title}
              </h3>
              <h5 className="text-[#4D4D70] text-base xl:text-[20px] mb-2 leading-snug">
                {step.heading}
              </h5>
              <p className="text-[#808098] text-sm italic">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
