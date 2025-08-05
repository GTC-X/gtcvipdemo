import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ConfirmationThankYou = ({ user }) => {
  const t = useTranslations("demo.form");
    return (
    <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full z-0 pointer-events-none opacity-50 hidden md:block">
        <div className="relative w-full sm:h-96 xl:h-[500px] 2xl:h-[450px] 3xl:h-[600px] scale-[1.9] origin-center-center">
          <Image
            src="/ib/bottom-overlay.webp"
            alt="Decorative background"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative container">
        <div className="grid md:grid-cols-2 items-center gap-10 z-10 relative mb-8">
          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              className="w-full md:h-auto max-w-[120px] md:max-w-[250px] mx-auto pl-10"
              src="/thank-you.svg"
              alt="Thank You"
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl 2xl:text-4xl font-bold mb-5">
              {t('thankYou')}, <span className="text-white">{user?.nickname || 'Trader'}</span>! {t('almostThere')}
            </h2>

            <h4 className="text-lg md:text-xl 2xl:text-xl font-semibold text-secondary mb-5">
              {t('emailSent')}
            </h4>

            <div className="max-w-xl space-y-5 text-sm md:text-base leading-relaxed">
              <p>{t('para1')}</p>
              <p>{t('para2')}</p>
              <p>{t('para3')}</p>
              <p>{t('checkSpam')}</p>
              <p className="text-lg md:text-2xl text-secondary font-semibold">{t('seeYou')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default ConfirmationThankYou;




