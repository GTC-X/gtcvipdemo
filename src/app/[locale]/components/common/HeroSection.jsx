import Image from "next/image";
import CustomButton from "./CustomButton";

const HeroSection = ({ setIsOpen }) => {
  return (
    <section className="bg-white py-8 md:py-20 xl:pt-28 xl:pb-16 relative overflow-hidden">

  {/* Desktop Background Image Only */}
  <div className="hidden md:block absolute inset-0 z-0 scale-[1.0] origin-bottom-right hero-bg">
    <Image
      src="/demo/banner.webp"
      alt="Hero BG"
      fill
      className="object-cover object-right 3xl:object-contain"
      priority
    />
  </div>

      {/* Left Content */}
      <div className="relative z-10 container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 space-y-2 text-center md:text-left">
           <h2 className="text-[#000032] text-[22px] md:text-[30px] xl:text-[40px] font-bold leading-normal">
          GTC’s
        </h2>
        <h1 className="text-[40px] md:text-[56px] xl:text-[76px] font-bold leading-none bg-gradient-to-b from-[#E1CFBB] to-[#956D42] inline-block text-transparent bg-clip-text">
  $10,000
</h1>
        <h2 className="text-[#000032] text-[22px] md:text-[28px] xl:text-[40px] font-bold leading-tight">
          Demo Trading Competition Is Almost Here!
        </h2>
       

        {/* Paragraph */}
        <p className="text-primary text-[14px] md:text-[16px] leading-relaxed py-5 max-w-[2xl]">
          Think you’ve got what it takes to top the GTC Demo Trading Competition League?
          Prove it in our first-ever demo trading tournament & win your share of $10,000
          in live trading prizes. No risk, all reward & just pure trading glory.
          Remember, this is a demo trading competition, so we really do mean that there’s no risk!
          Hit the button below to register your place and let’s see what you’re made of.
        </p>

            <div className="flex flex-row justify-center md:justify-start items-center gap-4 pb-8 md:pb-20">
              <CustomButton
                        text="Register Your Place"
                        bgColor="bg-gradient-to-r from-[#E1CFBB] to-[#956D42] text-white"
                        textColor="text-[#1F2937]"
                        strokeColor="#fff"
                        onClick={() => setIsOpen(true)}
                      />
            </div>
        </div>

        {/* Empty Right half for spacing on desktop */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
};

export default HeroSection;
