"use client";
import { useState } from "react";
import SliderModal from "../10k-demo-trading-competition/components/SliderModal";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import PayCommission from "../components/common/PayCommission";
import TrustBroker from "../components/common/TrustBroker";
import GrowBusiness from "../components/common/GrowBusiness";
import ReferTables from "../components/common/ReferTables";
import FeedBack from "../components/common/FeedBack";
import NewHeader from "../components/NewHeader";
import { useTranslations } from "next-intl";
import HeroSection from "../components/common/HeroSection";
import CountdownSection from "../components/CountdownSection";
import WhyJoinSection from "../10k-demo-trading-competition/components/WhyJoinSection";
import HowWorkSection from "../10k-demo-trading-competition/components/HowWorkSection";
import EarningsMarginImpact from "../10k-demo-trading-competition/components/marginInfoPanel";
import FinalCtaSection from "../10k-demo-trading-competition/components/FinalCtaSection";


const UaePartnerPage = () => {
  const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("partner");
  const testimonials = [
    {
      text: `“As an FX partner, getting up to 80% RevShare and paid out instantly was a game changer. I moved my entire client book to GTC where they’re looked after.”`,
      name: 'Judi Izdihar Shamoon, Dubai, UAE',
      stars: 5,
    },
    {
      text: `“I run monthly trading classes in Dubai, UAE. GTC gave me banners, an LP, and real bonuses for my traders. The support is unreal!”`,
      name: 'Suoud Butrus Gaber, UAE',
      stars: 4,
    },
    {
      text: `“My trading educator recommended GTC. I was sceptical at first, but now I see why he recommended them. The spreads, bonus, everything just works really well.”`,
      name: 'Kutaiba Abdul-Matin Awad, UAE',
      stars: 5,
    },
    {
      text: `“GTC doesn’t just talk, they deliver! I get paid on time, every time, and my traders are sticking around longer than ever. They also trade gold and GTC is great with them.”`,
      name: "Yasser Nu'aym Bazzi, UAE",
      stars: 4,
    },
  ];

  return (
    <>
            <MainHeader />
            <HeroSection setIsOpen={setIsOpen} />
            <CountdownSection />
            <WhyJoinSection />
            <HowWorkSection />
            <EarningsMarginImpact />
            <FinalCtaSection  setIsOpen={setIsOpen}  />
            <MainFooter />
            
            <SliderModal isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
    </> 
  )
}

export default UaePartnerPage