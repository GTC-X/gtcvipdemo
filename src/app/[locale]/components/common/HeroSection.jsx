'use client';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import RegistrationPopup from '../../5k-demo-trading-competition/components/RegistrationPopup';
import Link from 'next/link';
export default function HeroSection({ setIsOpen, isAfterMidnight }) {
  const t = useTranslations('demo.banner');
  const locale = useLocale();
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    setIsRtl(document?.documentElement?.dir === 'rtl');
  }, []);

  const imageSrc = useMemo(() => {
    if (isRtl) return '/demo/arabic.webp';
    if (locale === 'es') return '/demo/full.webp';
    if (locale === 'pt') return '/demo/full.webp';
    return '/demo/full.webp';
  }, [locale, isRtl]);

  // Get para2 as raw (can be string or array)
  const rawPara2 = t.raw('para2');

  return (
    <section className="bg-white py-8 md:py-20 xl:pt-20 xl:pb-16 relative overflow-hidden">
      <div className="relative z-10 container flex flex-col md:flex-row items-center">
        {/* LEFT */}
        <div className="w-full md:w-[44%] space-y-2 text-center ltr:md:text-left rtl:md:text-right">
          <h2 className="text-[#000032] text-[32px] md:text-[30px] ltr:xl:text-[40px] rtl:xl:text-[30px] font-bold">
            {t('para1')}
          </h2>

          <h1 className="ltr:text-[76px] ltr:md:text-[56px] ltr:xl:text-[76px] ltr:2xl:text-[70px] rtl:text-[26px] rtl:md:text-[36px] rtl:xl:text-[46px] rtl:2xl:text-[60px] font-bold leading-none bg-gradient-to-b from-[#E1CFBB] to-[#956D42] inline-block text-transparent bg-clip-text rtl:leading-normal z-50 relative">
            {t('no')}
          </h1>

          <h2 className="text-[#000032] text-[32px] md:text-[28px] xl:text-[40px] font-bold leading-tight px-5 md:px-0">
            {t('title')}
          </h2>

          {/* Mobile Image */}
          <div className="block md:hidden relative w-full h-[264px] mb-[-30px] md:mb-0">
            <Image src={imageSrc} fill alt="GTC Trophy" className="object-contain" />
          </div>

          {/* Paragraph(s): supports string (EN) or array (ES/PT). First ES paragraph bold. */}
          <div className="text-primary text-[14px] md:text-[16px] leading-relaxed py-4 md:px-0 mb-3 md:mb-0 space-y-4">
            {Array.isArray(rawPara2) ? (
              rawPara2.map((p, i) => (
                <p key={i} className={locale === 'es' && i === 0 ? 'font-semibold' : undefined}>
                  {p}
                </p>
              ))
            ) : (
              <p>{t('para2')}</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 md:pb-20 md:px-0 mt-4">
            <RegistrationPopup buttonText={t('btnText')} reopenDate="15th September" />
            <Link href="/gtc-s-first-ever-demo-trading-competition" className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm lg:text-lg font-semibold text-white bg-gradient-to-r from-[#E1CFBB] to-[#956D42] shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#263B93] hover:bg-gradient-to-r hover:from-primary hover:to-[#263B93]">Check Previous Winners </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block md:w-[56%] 2xl:w-[65%] 2xl:-mr-28 3xl:-mr-36">
          <div className="relative w-full h-[600px] 2xl:h-[550px] 3xl:h-[800px]">
            <Image src={imageSrc} fill alt="GTC Trophy" className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
