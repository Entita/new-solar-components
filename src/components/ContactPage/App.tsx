'use client'
import React, { useEffect } from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import ContactSection from './ContactSection'
import MapSection from './MapSection'

export default function App() {
  const emitPageView = async () => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      const ReactGA = (await import('react-ga4')).default;
      ReactGA.send({ hitType: 'pageview', page: '/kontakt' })
    }
  }

  useEffect(() => {
    emitPageView()
  }, [])

  return (
    <AppWrapperStyled>
      <ContactSection />
      <MapSection />
    </AppWrapperStyled>
  )
}
