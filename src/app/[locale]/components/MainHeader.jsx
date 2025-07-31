'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
  { label: 'Register', href: '#register' },
  { label: 'Why Join?', href: '#join' },
  { label: 'How It Works', href: '#work' },
  { label: 'Competition Details', href: '#details' },
  { label: 'T&Cs', href: '#tcs' },
];

const MainHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/Logo.png"
            width={200}
            height={82}
            alt="GTCFX Logo"
            className="w-[160px] md:w-[200px] h-auto object-contain"
          />
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[#000032] font-medium text-sm lg:text-base relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#b68756] hover:after:w-full after:transition-all after:duration-300 hover:text-[#b68756]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
