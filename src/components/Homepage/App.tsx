'use client'
import React, { useEffect } from 'react'
import LandingSection from './LandingSection'
import { LandingAppWrapperStyled } from './App.style'
import WhyUsSection from './WhyUsSection'
import HowSection from './HowSection'
import StepsSection from './StepsSection'
import { trackPageView } from '@/utils/ReactGA'

export default function App() {
  useEffect(() => {
    trackPageView('');
  }, [])

  return (
    <LandingAppWrapperStyled>
      <LandingSection />
      <WhyUsSection />
      <HowSection />
      <StepsSection />
    </LandingAppWrapperStyled>
  )
}
