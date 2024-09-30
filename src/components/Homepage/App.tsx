'use client'
import React from 'react'
import Header from '../Header/Header'
import LandingSection from './LandingSection'
import { AppWrapperStyled } from './App.style'
import WhyUsSection from './WhyUsSection'
import HowSection from './HowSection'
import Footer from '../Footer/Footer'
import StepsSection from './StepsSection'

export default function App() {
  const [loading, setLoading] = React.useState<Boolean>(true)

  React.useEffect(() => setLoading(false), [])

  if (loading) return <></>

  return (
    <AppWrapperStyled>
      <Header />
      <LandingSection />
      <WhyUsSection />
      <HowSection />
      <StepsSection />
      <Footer />
    </AppWrapperStyled>
  )
}
