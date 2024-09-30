'use client'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AppWrapperStyled } from '../Homepage/App.style'
import ContactSection from './ContactSection'
import MapSection from './MapSection'

export default function App() {
  const [loading, setLoading] = React.useState<Boolean>(true)

  React.useEffect(() => setLoading(false), [])

  if (loading) return <></>

  return (
    <AppWrapperStyled>
      <Header />
      <ContactSection />
      <MapSection />
      <Footer />
    </AppWrapperStyled>
  )
}
