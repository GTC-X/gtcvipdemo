'use client'
import { useState } from "react";
import HeroMargin from './components/HeroMargin'
import { useTranslations } from 'next-intl'
import Meta from '../../../components/common/MetaData'
import MainHeader from '../../components/MainHeader'
import FinalCtaSection from '../components/FinalCtaSection'
import MainFooter from '../../components/MainFooter'

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