'use client'
import React, { useEffect } from 'react'
import LandingSection from './LandingSection'
import { AppWrapperStyled } from './App.style'
import WhyUsSection from './WhyUsSection'
import HowSection from './HowSection'
import StepsSection from './StepsSection'

export default function App() {
  const emitPageView = async () => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      const ReactGA = (await import('react-ga4')).default;
      ReactGA.send({ hitType: 'pageview', page: '/' })
    }
  }

  useEffect(() => {
    emitPageView()
  }, [])

  return (
    <AppWrapperStyled>
      <LandingSection />
      <WhyUsSection />
      <HowSection />
      <StepsSection />
    </AppWrapperStyled>
  )
}
