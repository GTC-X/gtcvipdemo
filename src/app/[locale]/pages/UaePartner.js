"use client";
import { useState } from "react";
import SliderModal from "../5k-demo-trading-competition/components/SliderModal";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { useTranslations } from "next-intl";
import HeroSection from "../components/common/HeroSection";
import CountdownSection from "../components/CountdownSection";
import WhyJoinSection from "../5k-demo-trading-competition/components/WhyJoinSection";
import HowWorkSection from "../5k-demo-trading-competition/components/HowWorkSection";
import EarningsMarginImpact from "../5k-demo-trading-competition/components/marginInfoPanel";
import FinalCtaSection from "../5k-demo-trading-competition/components/FinalCtaSection";
import Meta from "@/app/components/common/MetaData";


const UaePartnerPage = () => {
  const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("demo");


  return (
    <>
         <Meta title={t('meta.title')} description={t('meta.description')}/>
            <MainHeader setIsOpen={setIsOpen} />
            <HeroSection setIsOpen={setIsOpen} />
            <CountdownSection />
            <WhyJoinSection setIsOpen={setIsOpen} />
            <HowWorkSection  setIsOpen={setIsOpen} />
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