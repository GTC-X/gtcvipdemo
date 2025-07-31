'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const MobileMenu = ({ setIsOpen }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Why Join?', href: '#join' },
    { label: 'How It Works', href: '#work' },
    { label: 'Competition Details', href: '#details' },
    {
      label: 'T&Cs',
      href: 'https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/GTC+Demo+Trading+Competition+–+Terms+%26+Conditions.pdf',
      external: true,
    },
  ];

  const handleClick = async (id) => {
    setOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 300);
      }
    } else {
      await router.push('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <div className="relative z-10">
      <button
        className="p-2 text-white bg-primary rounded-md"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
       {/* Hamburger / Close icons as inline SVG */}
{open ? (
  // ❌ Close Icon (X)
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none">
    <path d="M6 6L18 18" strokeLinecap="round" />
    <path d="M6 18L18 6" strokeLinecap="round" />
  </svg>
) : (
  // ☰ Hamburger Icon
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" fill="none">
    <path d="M4 6h16" strokeLinecap="round" />
    <path d="M4 12h16" strokeLinecap="round" />
    <path d="M4 18h16" strokeLinecap="round" />
  </svg>
)}

      </button>

      {open && (
        <div className="fixed inset-0 h-[500px] z-50 bg-white overflow-y-auto w-[85%] shadow-md">
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
             <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo-2024.webp"
            width={200}
            height={82}
            alt="GTCFX Logo"
            className="w-[120px] md:w-[200px] h-auto object-contain"
          />
        </Link>
            <button onClick={() => setOpen(false)}>
              <svg width="24" height="24" fill="currentColor">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="p-4 space-y-3">
            <li>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setOpen(false);
                }}
                className="block w-full text-left text-sm font-medium text-white bg-primary px-4 py-2 rounded hover:bg-secondary"
              >
                Register
              </button>
            </li>
            {menuItems.map((item, index) =>
              item.external ? (
                <li key={index}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-900 hover:bg-gray-100 p-2 rounded"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={index}>
                  <button
                    onClick={() => handleClick(item.href.replace('#', ''))}
                    className="block w-full text-left text-sm text-gray-900 hover:bg-gray-100 p-2 rounded"
                  >
                    {item.label}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
