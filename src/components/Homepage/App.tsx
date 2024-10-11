'use client'
import React from 'react'
import LandingSection from './LandingSection'
import { AppWrapperStyled } from './App.style'
import WhyUsSection from './WhyUsSection'
import HowSection from './HowSection'
import StepsSection from './StepsSection'

export default function App({ excelData }: { excelData: any }) {
  return (
    <AppWrapperStyled>
      <LandingSection />
      <WhyUsSection />
      <HowSection />
      <StepsSection />
    </AppWrapperStyled>
  )
}
