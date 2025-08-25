import React from 'react';
import CustomButton from '../../components/common/CustomButton';
import { useTranslations } from 'next-intl';
import RegistrationPopup from './RegistrationPopup';

const FinalCtaSection = ({ setIsOpen, isAfterMidnight }) => {
  const t = useTranslations('demo.final-cta-section');

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
          <RegistrationPopup
                     buttonText="Be First to Know"
                     reopenDate="15th September"
                   />
      </div>
    </section>
  );
};

export default FinalCtaSection;