import Image from "next/image";
import CustomButton from "./CustomButton";

const HeroSection = ({ setIsOpen }) => {
  return (
    <section className="bg-white py-8 md:py-20 xl:pt-20 xl:pb-16 relative overflow-hidden">
      {/* Desktop Background Image Only */}
      {/*  <div className="hidden md:block absolute inset-0 z-0 scale-[1.0] origin-bottom-right hero-bg">
    <Image
      src="/demo/banner.webp"
      alt="Hero BG"
      fill
      className="object-cover object-right 3xl:object-contain"
      priority
    />
  </div> */}

      {/* Left Content */}
      <div className="relative z-10 container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[44%] space-y-2 text-center md:text-left">
          <h2 className="text-[#000032] text-[32px] md:text-[30px] xl:text-[40px] font-bold">
            GTC’s
          </h2>
          <h1 className="text-[76px] md:text-[56px] xl:text-[76px] font-bold leading-none 2xl:text-[90px] 3xl:text-[100px] bg-gradient-to-b from-[#E1CFBB] to-[#956D42] inline-block text-transparent bg-clip-text">
            $5,000
          </h1>
          <h2 className="text-[#000032] text-[32px] md:text-[28px] xl:text-[40px] font-bold leading-tight px-5 md:px-0">
            Demo Trading Competition Is Almost Here!
          </h2>
          <div className="block md:hidden relative w-full h-[264px] mb-[-30px] md:mb-0">
            <Image
              src="/demo/full.webp"
              fill
              alt="GTC Trophy"
              className="object-contain"
            />
          </div>

          {/* Paragraph */}
          <p className="text-primary text-[14px] md:text-[16px] leading-relaxed py-4 md:px-0 mb-3 md:mb-0">
            Think you’ve got what it takes to top the GTC Demo Trading
            Competition League? Prove it in our first-ever demo trading
            tournament & win your share of $5,000 in live trading prizes. No
            risk, all reward & just pure trading glory. Remember, this is a demo
            trading competition, so we really do mean that there’s no risk! Hit
            the button below to register your place and let’s see what you’re
            made of.
          </p>

          <div className="flex flex-row justify-center md:justify-start items-center gap-4 md:pb-20 md:px-0 mt-4">
            <CustomButton
              text="Register Your Place"
              bgColor="bg-gradient-to-l from-[#E1CFBB] to-[#956D42] text-white w-full md:w-auto hover:bg-gradient-to-r hover:from-[#E1CFBB] hover:to-[#956D42]"
              textColor="text-[#1F2937]"
              strokeColor="#fff "
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        {/* Empty Right half for spacing on desktop */}
        {/* Right Side Image (Visible on Desktop) */}
        <div className="hidden md:block md:w-[56%] 2xl:w-[65%] 2xl:-mr-28 3xl:-mr-36">
          <div className="relative w-full h-[600px] 2xl:h-[550px] 3xl:h-[800px]">
            <Image
              src="/demo/full.webp"
              fill
              alt="GTC Trophy"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
