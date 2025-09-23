'use client'
import { useState } from "react";
import HeroMargin from './components/HeroMargin'
import { useTranslations } from 'next-intl'
import Meta from "@/app/components/common/MetaData";
import MainHeader from "@/app/[locale]/components/MainHeader";
import FinalCtaSection from "@/app/[locale]/5k-demo-trading-competition/components/FinalCtaSection";
import MainFooter from "@/app/[locale]/components/MainFooter";

const page = () => {
   const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("demo");
  return (
    <>
    <Meta title={t('meta.title')} description={t('meta.description')}/>
            <MainHeader />
    <HeroMargin />
     <FinalCtaSection  setIsOpen={setIsOpen}  />
    <MainFooter />
    </>
  )
}

export default page