import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const EarningsMarginImpact = () => {
  const t = useTranslations('demo.detail');
  const sectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const competitionDetails = t.raw('competitionDetails');

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F2F2F5] py-10 md:py-20 text-[#1a1a1a]"
      id="details"
    >
      <div className="max-w-[800px] mx-auto px-3 relative z-10 text-center">
        <div className="block md:hidden relative w-full h-[380px] mb-10">
          <Image src="/demo/mobile-new.webp" fill className="object-contain" alt={t('title')} />
        </div>
        <h2 className="text-[#956D42] text-[25px] md:text-[36px] xl:text-[40px] font-bold mb-4">
          {t('title')}
        </h2>
        <p className="text-[#4D4D70] mb-10 text-[16px] md:text-[18px] xl:text-[21px] leading-relaxed">
          {t('description')}
        </p>

        <div className="max-w-3xl space-y-10 text-[#4D4D70] text-[16px] md:text-[18px] xl:text-[21px] leading-relaxed">
          {competitionDetails.map((block, index) => (
            <div key={index} className="space-y-3 ltr:text-left rtl:text-right ">
              {block.title && (
                <h3 className="text-[#956D42] text-xl xl:text-[32px] font-semibold text-center">
                  {block.title}
                </h3>
              )}

              {block.content?.map((text, i) => (
                <p key={i} className="mb-0 ltr:text-left rtl:text-right ">
                  {index === competitionDetails.length - 1 && block.linkText ? (
                    <>
                      {text}
                      <p className="mt-2">
                        <a
                          href={block.linkUrl}
                          target="_blank"
                          className="text-[#20205B] font-semibold underline"
                          rel="noopener noreferrer"
                        >
                          {block.linkText.trim()}
                        </a>
                        .
                      </p>
                    </>
                  ) : (
                    text
                  )}
                </p>
              ))}

              {block.list && (
                <ul className="list-decimal ml-6 space-y-2 ltr:text-left rtl:text-right pt-5">
                  {block.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {block.note && <p className="mt-2">{block.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarningsMarginImpact;