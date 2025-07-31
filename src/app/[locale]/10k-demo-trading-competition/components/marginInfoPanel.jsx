import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
const EarningsMarginImpact = () => {
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

  const competitionDetails = [
    {
      title: 'Registration Period',
      content: [
        `Monday 4th August 2025 – Monday 18th August 2025 (23:59 GMT). Register early to secure your demo account and get familiar with the MT5 platform.`
      ]
    },
    {
      title: 'Competition Period',
      content: [
        `Tuesday 19th August – Friday 19th September 2025 (23:59 GMT). You’ll have 30 full days to trade your way up the leaderboard.`
      ]
    },
    {
      title: 'How to Participate',
      content: [
        `Simply click here to access the registration form. When you fill in the form, here’s what will happen:`
      ],
      list: [
        `You’ll get your $10,000 GTC MT5 Demo Account with login credentials via email.`,
        `You’ll be able to trade FX, Metals & Commodities during the contest period.`,
        `You’ll be able to track your progress on the live leaderboard in GTC VIP, our loyalty rewards platform. Check it out!`
      ],
      note: `⚠️ Note: Minimum 10 trades are required to qualify for a prize.`
    },
    {
      title: '$10,000 Prize Pool',
      list: [
        '🥇 1st Place Wins $5,000 in a GTC Live Trading Account.',
        '🥈 2nd Place Wins $2,500 in a GTC Live Trading Account.',
        '🥉 3rd Place Wins $1,000 in a GTC Live Trading Account.',
        '4th – 10th Win a $200 Credit Bonus (requires a deposit).'
      ]
    },
    {
      content: [
        'All other verified participants receive a 15% Deposit Bonus on their first GTC Live Trading Account deposit.',
        'Everyone receives a certificate.'
      ]
    },
    {
      title: 'Terms & Conditions',
      content: [
        <>
          Make sure you’re clear on the rules. Simply click here to view full{' '}
          <a
            href="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/GTC+Demo+Trading+Competition+%E2%80%93+Terms+%26+Conditions.pdf"
            target="_blank"
            className="text-[#20205B] font-semibold underline"
          >
            Terms & Conditions
          </a>.
        </>
      ]
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F2F2F5] py-10 md:py-20 text-[#1a1a1a]"
    >
      {/* Sticky Image */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:flex justify-end">
        <div
          className="flex items-start justify-end w-full"
          style={{
            position: isSticky ? 'fixed' : 'absolute',
            top: isSticky ? 0 : 'auto',
            right: 0,
            left: 'auto',
            zIndex: 20,
            height: isSticky ? 500 : '80vh',
            maxHeight: 500,
            transition: 'top 0.2s',
          }}
        >
          <img
            src="/demo/sidebar.webp"
            alt="Sidebar Coins"
            className="object-contain max-h-[680px]"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-3 relative z-10">
         <div className="block md:hidden relative w-full h-[380px] mb-10">
          <Image src="/demo/mobile-new.webp" fill className="object-contain" alt="" />
        </div>
        <h2 className="text-[#956D42] text-[25px] md:text-[36px] xl:text-[40px] font-bold mb-4">
          Demo Trading Competition Details
        </h2>
        <p className="text-[#4D4D70] mb-10 text-[16px] md:text-[18px] xl:text-[22px] leading-relaxed">
          Here’s everything you need to know about the demo trading competition.
        </p>

        <div className="max-w-3xl space-y-10 text-[#4D4D70] text-[16px] md:text-[18px] xl:text-[22px] leading-relaxed">
          {competitionDetails.map((block, index) => (
            <div key={index} className="space-y-3">
              {block.title && (
                <h3 className="text-[#956D42] text-xl xl:text-[32px] font-semibold text-center">
                  {block.title}
                </h3>
              )}

              {block.content?.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              {block.list && (
                <ul className="list-decimal ml-6 space-y-2">
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
