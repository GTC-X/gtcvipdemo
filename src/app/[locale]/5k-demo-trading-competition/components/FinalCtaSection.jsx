import React from 'react';
import CustomButton from '../../components/common/CustomButton';
import { useTranslations } from 'next-intl';
import RegistrationPopup from '../../gtc-s-first-ever-demo-trading-competition/components/RegistrationPopup';

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
              <RegistrationPopup />
            </div>
          
      </div>
    </section>
  );
};

export default FinalCtaSection;