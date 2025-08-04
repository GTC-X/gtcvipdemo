import Image from "next/image";
import CustomButton from "@/app/components/common/CustomButton";

const steps = [
  {
    title: "Step 1",
    heading: "Register with Your Name & Email",
    desc: "Fill in a quick form. No deposit, no fuss, just your basic info to get started.",
  },
  {
    title: "Step 2",
    heading: "Get Your $5,000 Demo Account",
    desc: "We’ll instantly set you up with a demo MT5 account loaded with $5k virtual funds.",
  },
  {
    title: "Step 3",
    heading: "Trade FX, Metals & Commodities",
    desc: "You’ll have 15 Days to make your move. Use your skills to grow your demo balance.",
  },
  {
    title: "Step 4",
    heading: "Climb the Leaderboard & Win",
    desc: "Outperform other traders, climb the ranks, and grab your share of the $5,000 in live trading prizes.",
  },
];

export default function HowItWorksSection({ setIsOpen }) {
  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden bg-[url('/demo/work.webp')] bg-cover bg-center" id="work">
   

      {/* Main Content */}
      <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-18">
       
        {/* Left Text */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[40px] font-bold text-[#4D4D70] leading-snug">
            How the GTC Demo Trading Competition Works
          </h2>
          <p className="text-[#4D4D70] text-base sm:text-lg xl:text-[22px] max-w-xl">
            Register your interest in literally seconds. Trade like a pro for 15 Days. Win big!
          </p>
          <CustomButton
            text="Register Now"
            bgColor="bg-white border border-gray-500 "
            textColor="text-[#1A1A3C]"
            strokeColor="#1A1A3C"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Right Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-[#1A1A3C] text-sm xl:text-[20px] font-semibold mb-1">{step.title}</h3>
              <h5 className="text-[##D4D70] text-base xl:text-[20px] mb-2 leading-snug">{step.heading}</h5>
              <p className="text-[#808098] text-sm italic">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
