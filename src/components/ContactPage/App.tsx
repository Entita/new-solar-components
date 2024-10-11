'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import ContactSection from './ContactSection'
import MapSection from './MapSection'

export default function App() {
  return (
    <AppWrapperStyled>
      <ContactSection />
      <MapSection />
    </AppWrapperStyled>
  )
}
