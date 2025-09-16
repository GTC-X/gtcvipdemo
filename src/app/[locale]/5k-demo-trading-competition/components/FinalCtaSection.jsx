import React from 'react';
import CustomButton from '../../components/common/CustomButton';
import { useTranslations } from 'next-intl';
import RegistrationPopup from './RegistrationPopup';
import Link from 'next/link';
const FinalCtaSection = ({ setIsOpen, isAfterMidnight }) => {
  const t = useTranslations('demo.final-cta-section');
 const t2 = useTranslations('demo.banner');
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white text-center items-center"
      style={{
        backgroundImage: `url('/demo/bottom-bg.webp')` // ← Update this with correct path if needed
      }}
    >
      <div className="container h-[450px] 2xl:h-[600px] flex flex-col items-center justify-center gap-8">
        <h2 className="text-[28px] md:text-[48px] xl:text-[60px] xl:leading-[72px] font-extrabold">
          {t('heading')}
        </h2>
        <p className="text-lg md:text-xl xl:text-[22px] leading-relaxed max-w-5xl mx-auto">
          {t('description')}
        </p>
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
    </section>
  );
};

export default FinalCtaSection;