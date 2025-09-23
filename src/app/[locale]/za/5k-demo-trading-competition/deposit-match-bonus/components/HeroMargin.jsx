'use client';
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import DepositFormNew from "./DepositForm";

const HeroMargin = ({ setIsOpen }) => {
  const t = useTranslations("MarginContent.banner");
  const locale = useLocale();
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    // Set direction from document or based on locale
    setIsRtl(document?.documentElement?.dir === "rtl");
  }, []);

  const imageSrc = isRtl ? "/demo/arabic.webp" : "/demo/full.webp";

  return (
    <section className="py-8 md:py-20 xl:pt-20 xl:pb-16 relative overflow-hidden bg-[#f2f2f2]">
      <div className="relative z-10 container flex flex-col md:flex-row items-center">

        {/* LEFT SIDE */}
        <div className="max-w-4xl mx-auto space-y-2 text-center mb-5">
          <h2 className="text-[#000032] text-[22px] md:text-[30px] ltr:xl:text-[40px] rtl:xl:text-[30px] font-bold">
            {t("para1")}
          </h2>

          <h1 className="ltr:text-[36px] ltr:md:text-[56px] ltr:xl:text-[80px]  ltr:2xl:text-[90px] rtl:text-[26px] rtl:md:text-[36px] rtl:xl:text-[46px]  rtl:2xl:text-[60px] font-bold leading-none bg-gradient-to-r from-[#956D42] to-[#956D42] inline-block text-transparent bg-clip-text rtl:leading-normal z-50 relative">
            {t("no")}
          </h1>

          <h2 className="text-[#000032] text-[22px] md:text-[28px] xl:text-[40px] font-bold leading-tight px-5 md:px-0">
            {t("title")}
          </h2>

    

          {/* Paragraph */}
          <p className="text-primary text-[16px] md:text-[20px] leading-relaxed py-4 md:px-0 mb-3 md:mb-0 max-w-2xl mx-auto">
            {t("para2")}
          </p>

           <DepositFormNew />
        </div>

  
      </div>
    </section>
  );
};


export default HeroMargin