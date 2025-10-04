'use client'
import React, { useEffect } from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import ContactSection from './ContactSection'
import MapSection from './MapSection'
import { trackPageView } from '@/utils/ReactGA'

export default function App() {
  useEffect(() => {
    trackPageView('kontakt');
  }, [])

  return (
    <AppWrapperStyled>
      <ContactSection />
      <MapSection />
    </AppWrapperStyled>
  )
}
