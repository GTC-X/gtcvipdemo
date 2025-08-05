'use client';
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useTranslations } from "next-intl";   

const HeroSection = ({ setIsOpen }) => {
  const t = useTranslations("demo.banner");

  return (
    <section className="bg-white py-8 md:py-20 xl:pt-20 xl:pb-16 relative overflow-hidden">
      <div className="relative z-10 container flex flex-col md:flex-row items-center">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-[44%] space-y-2 text-center ltr:md:text-left rtl:md:text-right">
          <h2 className="text-[#000032] text-[32px] md:text-[30px] xl:text-[40px] font-bold">
            {t("para1")}
          </h2>

          <h1 className="text-[76px] md:text-[56px] xl:text-[76px] font-bold leading-none 2xl:text-[90px] 3xl:text-[100px] bg-gradient-to-b from-[#E1CFBB] to-[#956D42] inline-block text-transparent bg-clip-text">
            {t("no")}
          </h1>

          <h2 className="text-[#000032] text-[32px] md:text-[28px] xl:text-[40px] font-bold leading-tight px-5 md:px-0">
            {t("title")}
          </h2>

          {/* Mobile Image */}
          <div className="block md:hidden relative w-full h-[264px] mb-[-30px] md:mb-0">
            <Image
              src="/demo/full.webp"
              fill
              alt="GTC Trophy"
              className="object-contain"
            />
          </div>

          {/* Paragraph */}
          <p className="text-primary text-[14px] md:text-[16px] leading-relaxed py-4 md:px-0 mb-3 md:mb-0">
            {t("para2")}
          </p>

          {/* CTA Button */}
          <div className="flex flex-row justify-center md:justify-start items-center gap-4 md:pb-20 md:px-0 mt-4">
            <CustomButton
              text={t("btnText")}
              bgColor="bg-gradient-to-l from-[#E1CFBB] to-[#956D42] text-white w-full md:w-auto hover:bg-gradient-to-r hover:from-[#E1CFBB] hover:to-[#956D42]"
              textColor="text-[#1F2937]"
              strokeColor="#fff"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:block md:w-[56%] 2xl:w-[65%] 2xl:-mr-28 3xl:-mr-36">
          <div className="relative w-full h-[600px] 2xl:h-[550px] 3xl:h-[800px]">
            <Image
              src="/demo/full.webp"
              fill
              alt="GTC Trophy"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
