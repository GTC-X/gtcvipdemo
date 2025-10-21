"use client";
import { useTranslations } from "next-intl";
import CustomButton from "@/app/components/common/CustomButton";
import { useMemo } from "react";
import SheetTable from "../../components/SheetTable";

const icons = [
  // 1. Shield + Trophy
  <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.498" cy="19.998" r="18.3352" fill="#4D4D70" />
    <path
      d="M20.5004 10.6677C18.0534 12.2766 15.2921 13.3434 12.3998 13.7986V19.3503C12.3998 21.666 13.0807 23.6276 14.4105 25.2751C15.7324 26.9126 17.7428 28.2935 20.5004 29.3728C23.2568 28.2936 25.2663 26.9126 26.5883 25.2751C27.9186 23.6272 28.5999 21.6654 28.6 19.3503V13.7996C25.7078 13.3444 22.9471 12.2765 20.5004 10.6677Z"
      stroke="white"
      strokeWidth="2"
    />
  </svg>,

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
  </svg>,

  // 3. Bar Chart
  <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.4978" cy="19.998" r="18.3352" fill="#4D4D70" />
    <path d="M11 29V17H16.5V29H11ZM18.25 29V11H23.75V29H18.25ZM25.5 29V19H31V29H25.5Z" fill="white" />
  </svg>,

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
  </svg>,

  // 5. Medal
  <svg width="50" height="50" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.4978" cy="19.998" r="18.3352" fill="#4D4D70" />
    <path
      d="M16.475 29C14.9583 29 13.6667 28.4667 12.6 27.4C11.5333 26.3333 11 25.0417 11 23.525C11 22.0917 11.4793 20.854 12.438 19.812C13.3967 18.77 14.5923 18.191 16.025 18.075L12 10H19L21 14L23 10H30L26 18.025C27.4167 18.1583 28.6043 18.746 29.563 19.788C30.5217 20.83 31.0007 22.0673 31 23.5C31 25.0333 30.4667 26.3333 29.4 27.4C28.3333 28.4667 27.0333 29 25.5 29C25.35 29 25.196 28.996 25.038 28.988C24.88 28.98 24.7257 28.959 24.575 28.925C25.4917 28.325 26.2083 27.546 26.725 26.588C27.2417 25.63 27.5 24.6007 27.5 23.5C27.5 21.6833 26.8707 20.146 25.612 18.888C24.3533 17.63 22.816 17.0007 21 17C19.184 16.9993 17.6467 17.6287 16.388 18.888C15.1293 20.1473 14.5 21.6847 14.5 23.5C14.5 24.6333 14.7333 25.7 15.2 26.7C15.6667 27.7 16.4 28.4417 17.4 28.925C17.25 28.9583 17.096 28.9793 16.938 28.988C16.78 28.9967 16.6257 29.0007 16.475 29ZM21 28C19.75 28 18.6877 27.5627 17.813 26.688C16.9383 25.8133 16.5007 24.7507 16.5 23.5C16.4993 22.2493 16.937 21.187 17.813 20.313C18.689 19.439 19.7513 19.0013 21 19C22.2487 18.9987 23.3113 19.4363 24.188 20.313C25.0647 21.1897 25.502 22.252 25.5 23.5C25.498 24.748 25.0607 25.8107 24.188 26.688C23.3153 27.5653 22.2527 28.0027 21 28ZM19.15 26.25L21 24.85L22.85 26.25L22.15 23.975L24 22.65H21.725L21 20.25L20.275 22.65H18L19.85 23.975L19.15 26.25Z"
      fill="white"
    />
  </svg>,

  // ✅ 6. Final Updated Speedometer with Inner Needle
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20.4978" cy="19.998" r="18.3352" fill="#4D4D70" />
    <path
      d="M13.3344 11.575C15.184 10.0433 17.477 9.14674 19.875 9.0175V12.125H21.125V9.01688C23.5231 9.1469 25.8159 10.0439 27.6656 11.5756L25.7906 13.4506L26.6744 14.335L28.5844 12.4244C30.3188 14.2112 31.4086 16.5249 31.6819 19H29.2169V20.25H31.75C31.7526 22.7742 30.9015 25.2251 29.335 27.2044L27.5106 25.3806L26.6269 26.2644L28.505 28.1431L28.4937 28.155L29.3812 29.0344C31.7027 26.6982 33.004 23.5373 33 20.2437C33 13.3438 27.4031 7.75 20.5 7.75C13.5969 7.75 7.99999 13.3431 7.99999 20.2437C7.99823 21.9183 8.33411 23.5759 8.98756 25.1177C9.64101 26.6595 10.5986 28.0536 11.8031 29.2169L12.6725 28.3188L12.665 28.3112L14.8381 26.1381L13.9537 25.2544L11.8162 27.3919C10.1549 25.383 9.24718 22.8569 9.24999 20.25H11.9475V19H9.31812C9.59147 16.5251 10.6813 14.2117 12.4156 12.425L14.25 14.2581L15.1337 13.375L13.3344 11.575Z"
      fill="white"
    />
    <path
      d="M22.6081 27.5651C22.6262 27.8101 22.5537 28.0532 22.405 28.2488L21.2031 29.6313C20.5 29.9376 20.1875 29.9376 19.5981 29.6313L18.3969 28.2488C18.2481 28.0532 18.1756 27.8101 18.1931 27.5651L19.6812 18.9388C19.7719 17.6907 21.0375 17.6794 21.1275 18.9276L22.6081 27.5651Z"
      fill="white"
    />
  </svg>
];

const WhyJoinSection = ({ setIsOpen, isAfterMidnight }) => {
  const t = useTranslations("demo.payMore");
  const tRegister = useTranslations("demo.register");


  const featureItems = useMemo(() => {
    return Object.keys(t.raw("features")).map((key, idx) => ({
      icon: icons[idx],
      title: t(`features.${key}.title`),
      description: t(`features.${key}.description`)
    }));
  }, [t]);

  return (
    <section
      className="relative bg-[#F7F3EE] pt-10 pb-16 md:py-20 overflow-hidden"
      id="join"
    >

      <div className="relative z-10 container text-center">
        <div className="mb-12 flex flex-col gap-5">
          <h2 className="text-[25px] md:text-3xl xl:text-[40px] font-bold text-primary">
            {"Leaderboard "}

          </h2>
          {/* {!isAfterMidnight &&
            <p className="text-[#000021] text-base leading-5 px-5 md:px-0 max-w-[1192px] mx-auto mb-5">
              {tRegister("description")}
            </p>
          } */}
          {/* {!isAfterMidnight ?
            <SheetTable
              id="1gjvJ35RNXe-aDYANSu-9dg7vDsOztslaRseHTYJMFWU"
              gid="0"
            />
            : */}
            <iframe
              src="https://prod-widgets.returning.ai/custom-leaderboards/67c95cd354f1f4d3292b5455/gtc-vip-demo-contest"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          {/* } */}
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:gap-9 pb-8 md:pb-16">
          <h2 className="text-[25px] md:text-3xl xl:text-[40px] font-bold text-primary">
            {t("title")}
          </h2>
          <p className="text-[#000021] text-base leading-5 px-5 md:px-0 max-w-[1192px] mx-auto">
            {t("intro")}
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 pb-10 md:pb-16">
          {featureItems.map((item, idx) => (
            <div key={idx} className="group perspective w-full h-[220px]">
              <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-md p-10 flex flex-col items-center justify-center text-center backface-hidden">
                  <div className="mb-4">{item.icon}</div>
                  <p className="text-[#20205B] text-lg font-medium md:max-w-[250px]">{item.title}</p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#C39F77] text-white rounded-lg shadow-md p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
                  <p className="text-sm md:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CustomButton
            text={t("cta")}
            bgColor="bg-white w-full md:w-auto hover:bg-gradient-to-l hover:from-[#E1CFBB] hover:to-[#956D42]"
            textColor="text-[#B48755] hover:text-white"
            strokeColor="#B48755"
            disabled={true}
            hoverStrokeColor="#FFFFFF"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

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