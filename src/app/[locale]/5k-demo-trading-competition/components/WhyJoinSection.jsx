import CustomButton from "@/app/components/common/CustomButton";
import { useState } from "react";

const features = [
  {
    icon: (
      // 1. Shield + Trophy
      <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.498" cy="19.998" r="18.3352" fill="#4D4D70" />
        <path
          d="M20.5004 10.6677C18.0534 12.2766 15.2921 13.3434 12.3998 13.7986V19.3503C12.3998 21.666 13.0807 23.6276 14.4105 25.2751C15.7324 26.9126 17.7428 28.2935 20.5004 29.3728C23.2568 28.2936 25.2663 26.9126 26.5883 25.2751C27.9186 23.6272 28.5999 21.6654 28.6 19.3503V13.7996C25.7078 13.3444 22.9471 12.2765 20.5004 10.6677Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
    text: "$5,000 Goes To The Winner + Zero Risk!",
    back: "You are trading demo funds, but the top performer wins a live trading account with $5,000 in it! No deposit required to join."
  },
  {
    icon: (
      // 2. Chart with Checkmark
      <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.4981" cy="19.998" r="18.3352" fill="#4D4D70" />
        <g clipPath="url(#clip0)">
          <path
            d="M32 13.125V20H30.625V15.4775L22.375 23.7275L18.25 19.6025L10.999 26.8428L10.0322 25.876L18.25 17.6475L22.375 21.7725L29.6475 14.5H25.125V13.125H32Z"
            fill="white"
            stroke="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="22" height="22" fill="white" transform="translate(10 9)" />
          </clipPath>
        </defs>
      </svg>
    ),
    text: "Test Your Skills on Real Market Conditions",
    back: "This is your chance to prove you’re the best when it comes to trading in live market conditions, plus it’s completely risk free!"
  },
  {
    icon: (
      // 3. Bar Chart
      <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.4978" cy="19.998" r="18.3352" fill="#4D4D70" />
        <path d="M11 29V17H16.5V29H11ZM18.25 29V11H23.75V29H18.25ZM25.5 29V19H31V29H25.5Z" fill="white" />
      </svg>
    ),
    text: "Leaderboard That Shows You’re Really the Best!",
     back: "See how you really stack up against other traders worldwide. The leaderboard updates daily & your performance does the talking."
  },
  {
    icon: (
      // 4. Exchange Arrows
      <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.498" cy="19.998" r="18.3352" fill="#4D4D70" />
        <path
          d="M20.3124 30.0626L25.9373 30.0626L10.9372 15.0626"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.3124 11.3124L14.6875 11.3124L29.6876 26.3124"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    text: "Trade Your Way When Competing with Other Traders",
     back: "Trade your way in the demo trading competition with 1:500 leverage. Trade Forex, Metals & Commodities in the demo competition."
  },
  {
    icon: (
      // 5. Medal
      <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.4978" cy="19.998" r="18.3352" fill="#4D4D70" />
        <path
          d="M16.475 29C14.9583 29 13.6667 28.4667 12.6 27.4C11.5333 26.3333 11 25.0417 11 23.525C11 22.0917 11.4793 20.854 12.438 19.812C13.3967 18.77 14.5923 18.191 16.025 18.075L12 10H19L21 14L23 10H30L26 18.025C27.4167 18.1583 28.6043 18.746 29.563 19.788C30.5217 20.83 31.0007 22.0673 31 23.5C31 25.0333 30.4667 26.3333 29.4 27.4C28.3333 28.4667 27.0333 29 25.5 29C25.35 29 25.196 28.996 25.038 28.988C24.88 28.98 24.7257 28.959 24.575 28.925C25.4917 28.325 26.2083 27.546 26.725 26.588C27.2417 25.63 27.5 24.6007 27.5 23.5C27.5 21.6833 26.8707 20.146 25.612 18.888C24.3533 17.63 22.816 17.0007 21 17C19.184 16.9993 17.6467 17.6287 16.388 18.888C15.1293 20.1473 14.5 21.6847 14.5 23.5C14.5 24.6333 14.7333 25.7 15.2 26.7C15.6667 27.7 16.4 28.4417 17.4 28.925C17.25 28.9583 17.096 28.9793 16.938 28.988C16.78 28.9967 16.6257 29.0007 16.475 29ZM21 28C19.75 28 18.6877 27.5627 17.813 26.688C16.9383 25.8133 16.5007 24.7507 16.5 23.5C16.4993 22.2493 16.937 21.187 17.813 20.313C18.689 19.439 19.7513 19.0013 21 19C22.2487 18.9987 23.3113 19.4363 24.188 20.313C25.0647 21.1897 25.502 22.252 25.5 23.5C25.498 24.748 25.0607 25.8107 24.188 26.688C23.3153 27.5653 22.2527 28.0027 21 28ZM19.15 26.25L21 24.85L22.85 26.25L22.15 23.975L24 22.65H21.725L21 20.25L20.275 22.65H18L19.85 23.975L19.15 26.25Z"
          fill="white"
        />
      </svg>
    ),
    text: "Gain the Ultimate Recognition Plus the Rewards!",
    back: "The top traders don’t just win prizes but they get bragging rights, a trophy, a certificate, and exclusive recognition from GTC."
  },
  {
    icon: (
      // 6. Speedometer (duplicated bar chart to match previous #6 SVG)
      <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.4978" cy="19.998" r="18.3352" fill="#4D4D70" />
        <path d="M11 29V17H16.5V29H11ZM18.25 29V11H23.75V29H18.25ZM25.5 29V19H31V29H25.5Z" fill="white" />
      </svg>
    ),
    text: "Absolutely Perfect for New & Experienced Traders",
     back: "Whether you're brand new to trading or already seasoned, this is the ideal no-risk opportunity to grow, compete & get rewarded."
  },
];

const WhyJoinSection = ({ setIsOpen }) => {


  return (
    <section className="relative bg-[#F7F3EE] pt-0 pb-16 md:py-20 overflow-hidden" id="join">
      {/* Wave */}
    

      <div className="relative z-10 container text-center">
      

        <div className="flex flex-col items-center justify-center gap-6 md:gap-9 pb-8 md:pb-16">
          <h2 className="text-[25px] md:text-3xl xl:text-[40px] font-bold text-primary">
            Why Join the GTC Demo Trading Competition?
          </h2>
          <p className="text-[#000021] text-base leading-5  px-5 md:px-0">
            You're not just entering a trading competition, you're stepping into the trading spotlight!
            Here’s why traders from all over the world are registering and can’t wait to compete in
            GTC’s first-ever demo trading tournament:
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pb-10 md:pb-16">
          {features.map((item, idx) => (
            <div key={idx} className="group perspective w-full h-[220px]">
              <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-md p-10 flex flex-col items-center justify-center text-center backface-hidden">
                  <div className="mb-4">{item.icon}</div>
                  <p className="text-[#20205B] text-lg font-medium md:max-w-[250px]">{item.text}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#C39F77] text-white rounded-lg shadow-md p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
                  <p className="text-sm md:text-base">{item.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CustomButton
            text="Take Part"
            bgColor="bg-white w-full md:w-auto"
            textColor="text-[#B48755]"
            strokeColor="#B48755"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Flip styles */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default WhyJoinSection;
