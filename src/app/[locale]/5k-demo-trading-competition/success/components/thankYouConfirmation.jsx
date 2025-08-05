import React from 'react';
import Image from 'next/image';

const ConfirmationThankYou = ({ user }) => {
    return (
        <section className="bg-gradient-to-r from-[#293794] to-[#000021] text-[#E5E5EA] py-8 md:py-20 relative overflow-hidden">
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
  {/* Image column – show first on mobile, second on desktop */}
  <div className="order-1 md:order-2">
    <img
      className="w-full md:h-auto max-w-[120px] md:max-w-[250px] mx-auto pl-10"
      src="/thank-you.svg"
      alt="Shield Check"
    />
  </div>

  {/* Text column – show second on mobile, first on desktop */}
  <div className="text-center md:text-left order-2 md:order-1">
    <h2 className="text-2xl md:text-4xl 2xl:text-4xl font-bold mb-5">
      Thanks, <span className="text-white">{user?.nickname}</span><b>! You’re In!</b>

    </h2>
    <h4 className="text-lg md:text-xl 2xl:text-xl font-semibold text-secondary mb-5">
      Congrats for registering for the <b>GTC Demo Trading Tournament.</b>

    </h4>
    <div className="max-w-xl">
      <p className="text-sm md:text-base mb-5 leading-relaxed">
       Now’s the perfect time to prepare your trading strategy! And remember, you’ll be trading FX, Metals & Commodities only, with 1:500 leverage across a 14-day period.
      </p>
      <p className="text-sm md:text-base mb-5 leading-relaxed">
       Make every trade count, and keep an eye on the leaderboard. Some seriously skilled traders are joining this tournament… but so are some seriously lucky ones too. 😉

      </p>
      <p className="text-sm md:text-base mb-5 leading-relaxed">
        We’ve sent you another email with all your trading credentials, so go ahead and check that out. It might be a good idea to check your spam or junk folder, just in case our email has crept in there. If the email we’ve sent you has made its way into your spam or junk folder, simply move it back into your inbox.
      </p>
      <p className="text-sm md:text-base mb-5 leading-relaxed">We’ll send you a couple of emails before the tournament starts.</p>
      <p className="text-lg md:text-2xl mb-5 leading-relaxed text-secondary font-semibold">
    G O O D    L U C K <br />
      </p>
    </div>
  </div>
</div>
            </div>

        </section >
    );
};

export default ConfirmationThankYou;




