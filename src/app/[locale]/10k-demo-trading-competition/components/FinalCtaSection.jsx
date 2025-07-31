import React from 'react';
import CustomButton from '../../components/common/CustomButton';

const FinalCtaSection = ({ setIsOpen }) => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white text-center  items-center"
      style={{
        backgroundImage: `url('/demo/bottom-bg.webp')` // ← Update this with correct path if needed
      }}
    >
      <div className="container h-[450px] 2xl:h-[600px] flex flex-col items-center justify-center gap-8">
        <h2 className="text-[28px] md:text-[48px] xl:text-[60px] xl:leading-[72px] font-extrabold">
          Are You Up To The Challenge?
        </h2>
        <p className="text-lg md:text-xl xl:text-[22px] leading-relaxed  max-w-5xl mx-auto">
          Unleash your trading skills and battle it out with traders from around the world.
          Remember, there’s $10,000 worth in Live Trading Account prizes that will be handed out!
        </p>
        <div className="flex flex-row justify-center md:justify-start items-center">
              <CustomButton
                        text="Register Your Place"
                        bgColor="bg-white"
                        textColor="text-[#000032]"
                        strokeColor="#000032"
                        onClick={() => setIsOpen(true)}
                      />
            </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
