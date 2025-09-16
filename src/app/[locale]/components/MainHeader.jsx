'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { useTranslations, useLocale } from 'next-intl';

const TERMS_LINKS = {
  en: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/GTC+Demo+Trading+Competition+–+Terms+%26+Conditions.pdf',
  ar: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Demo+Trading+Competition+T%26Cs+_+Arabic.pdf',
  ru: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Demo+Trading+Competition+T%26Cs+_+Russian.pdf',
  zh: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Demo+Trading+Competition+T%26Cs+_+Mandarin.pdf', // use zh instead of cn
  vi: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Demo+Trading+Competition+T%26Cs+_+Vietnamese.pdf',
  pt: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Demo+Trading+Competition+T%26Cs+_+Portuguese.pdf', // fix .pdf extension
  es: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/Demo+Trading+Competition+T%26Cs+_+Spanish.pdf',
};

// normalize runtime locale → base code
function getBaseLocale(locale) {
  const lc = (locale || '').toLowerCase();
  if (lc.startsWith('zh') || lc.startsWith('cn')) return 'zh';
  if (lc.startsWith('pt')) return 'pt';
  if (lc.startsWith('es')) return 'es';
  if (lc.startsWith('ar')) return 'ar';
  if (lc.startsWith('ru')) return 'ru';
  if (lc.startsWith('vi')) return 'vi';
  return 'en';
}

const MainHeader = ({ setIsOpen }) => {
  const t = useTranslations('menuItem');
  const locale = useLocale();
  const base = getBaseLocale(locale);
  const termsHref = TERMS_LINKS[base] || TERMS_LINKS.en;

  const menuItems = [
    { label: t('whyJoin'), href: '#join' },
    { label: t('howItWorks'), href: '#work' },
    { label: t('competitionDetails'), href: '#details' },
    { label: t('termsConditions'), href: termsHref, external: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" aria-label="Go to homepage">
          <Image
            src="/logo-2024.webp"
            width={200}
            height={82}
            alt="GTCFX Logo"
            className="w-[160px] md:w-[200px] h-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#000032] font-medium text-sm lg:text-base relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#b68756] hover:after:w-full after:transition-all after:duration-300 hover:text-[#b68756]"
          >
            {t('register')}
          </button>

          {menuItems.map((item, i) =>
            item.external ? (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#000032] font-medium text-sm lg:text-base relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#b68756] hover:after:w-full after:transition-all after:duration-300 hover:text-[#b68756]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={i}
                href={item.href}
                className="text-[#000032] font-medium text-sm lg:text-base relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#b68756] hover:after:w-full after:transition-all after:duration-300 hover:text-[#b68756]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
         <Link href="/gtc-s-first-ever-demo-trading-competition" className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm lg:text-lg font-semibold text-white bg-gradient-to-r from-primary to-[#263B93] shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#263B93]">Check Previous Winners </Link>

        {/* Mobile menu */}
        <div className="md:hidden flex gap-2 items-center">
          <MobileMenu setIsOpen={setIsOpen} termsHref={termsHref} />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
