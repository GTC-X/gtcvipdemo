import React, { useRef, useEffect, useState } from 'react';

const EarningsMarginImpact = () => {
  const sectionRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      // When section top is at or above viewport top and bottom is below image height
      if (rect.top <= 0 && rect.bottom > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F2F2F5] py-14 md:py-24 text-[#1a1a1a]"
    >
      {/* Sticky Side Image */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:flex justify-end">
        <div
          className={`flex items-start justify-end w-full`}
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
            className="object-contain"
            style={{
              maxHeight: 500,
            //   width: 'auto',
            //   marginTop: 0,
            //   marginRight: 0,
            //   boxShadow: '0 4px 24px 0 #0001',
            //   borderRadius: 12,
            //   background: '#fff',
            }}
          />
        </div>
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-[#956D42] text-[28px] md:text-[36px] xl:text-[40px] font-bold mb-3">
          Demo Trading Competition Details
        </h2>
        <p className="text-[#5475C6] underline mb-10 cursor-pointer hover:opacity-80 transition-all">
          Here’s everything you need to know about the demo trading competition.
        </p>

        <div className="max-w-2xl space-y-10 text-[#4D4D70] text-base md:text-lg">
          <div>
            <h3 className="text-[#956D42] text-xl font-semibold mb-2">Registration Period</h3>
            <p>Monday 4th August 2025 – Monday 18th August 2025 (23:59 GMT). Register early to secure your demo account and get familiar with the MT5 platform.</p>
          </div>

          <div>
            <h3 className="text-[#956D42] text-xl font-semibold mb-2">Competition Period</h3>
            <p>Tuesday 19th August – Friday 19th September 2025 (23:59 GMT). You’ll have 30 full days to trade your way up the leaderboard.</p>
          </div>

          <div>
            <h3 className="text-[#956D42] text-xl font-semibold mb-2">How to Participate</h3>
            <ul className="list-decimal ml-6 space-y-2">
              <li>You’ll get your $10,000 GTC MT5 Demo Account with login credentials via email.</li>
              <li>You’ll be able to trade FX, Metals & Commodities during the contest period.</li>
              <li>You’ll be able to track your progress on the live leaderboard in GTC VIP, our loyalty rewards platform. Check it out!</li>
            </ul>
            <p className="mt-3">⚠️ Note: Minimum 10 trades are required to qualify for a prize.</p>
          </div>

          <div>
            <h3 className="text-[#956D42] text-xl font-semibold mb-2">$10,000 Prize Pool</h3>
            <ul className="space-y-1">
              <li>🥇 1st Place Wins $5,000 in a GTC Live Trading Account.</li>
              <li>🥈 2nd Place Wins $2,500 in a GTC Live Trading Account.</li>
              <li>🥉 3rd Place Wins $1,000 in a GTC Live Trading Account.</li>
              <li>4th – 10th Win a $200 Credit Bonus (requires a deposit).</li>
            </ul>
          </div>

          <div>
            <p>All other verified participants receive a <strong>15% Deposit Bonus</strong> on their first GTC Live Trading Account deposit.</p>
            <p>Everyone receives a certificate.</p>
          </div>

          <div>
            <h3 className="text-[#956D42] text-xl font-semibold mb-2">Terms & Conditions</h3>
            <p>
              Make sure you’re clear on the rules. Simply click here to view full{' '}
              <a href="#" className="text-[#20205B] font-semibold underline">Terms & Conditions</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsMarginImpact;