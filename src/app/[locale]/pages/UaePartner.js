"use client";
import { useState } from "react";
import HeroSection from "../iraq/ib/components/banner";
import SliderModal from "../iraq/ib/components/SliderModal";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import PayCommission from "../components/common/PayCommission";
import TrustBroker from "../components/common/TrustBroker";
import GrowBusiness from "../components/common/GrowBusiness";
import ReferTables from "../components/common/ReferTables";
import FeedBack from "../components/common/FeedBack";
import NewHeader from "../components/NewHeader";
import { useTranslations } from "next-intl";


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
      <NewHeader />
            <HeroSection setIsOpen={setIsOpen} />
            <ReferTables setIsOpen={setIsOpen} />
              <PayCommission 
              topTitle={t('payMore.subtitle')}
              bottomText={t('payMore.outro')}
              buttonText={t('payMore.cta')}
              setIsOpen={setIsOpen}
              />
              <TrustBroker 
               title={t('broker.heading') }
                  subtitle={t('broker.heading') }
                  features={[
                    t('broker.points.p1'),
                    t('broker.points.p2'),,
                    t('broker.points.p3'),,
                    t('broker.points.p3'),,
                  ]}
                  buttonLabel="Start Earning"
                  onClick={() => setIsOpen(true)}
              />
          
            <FeedBack 
             title="What UAE's Partners & Traders Are Saying"
              description="Whether you’re a seasoned partner or just getting started, these partners made the switch and they or their traders haven’t looked back."
              testimonials={testimonials}
              buttonLabel="Join Us"
              onClick={() => setIsOpen(true)}
            />
            <GrowBusiness
              topTitle="Start Earning More."
              mainTitle="Grow Your FX Partnership Business with GTC"
              description1="You’ve seen what GTC brings to the table. Now it’s your turn. Join the partnership programme that’s helping UAE’s Forex Partners scale faster, earn more, and build lasting trust with their traders."
              description2="Join us today, and your traders will thank you tomorrow."
              buttonLabel="Make the Switch"
              onClick={() => setIsOpen(true)}
            />
            <MainFooter />
            <SliderModal isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
    </> 
  )
}

export default UaePartnerPage