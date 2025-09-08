'use client'
import React, { useEffect } from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import InquiryText from './InquiryText'
import InquiryProductsAndForm from './InquiryProductsAndForm'

export default function App() {
  const emitPageView = async () => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      const ReactGA = (await import('react-ga4')).default;
      ReactGA.send({ hitType: 'pageview', page: '/poptavka' })
    }
  }

  useEffect(() => {
    emitPageView()
  }, [])

  return (
    <AppWrapperStyled>
      <InquiryText />
      <InquiryProductsAndForm />
    </AppWrapperStyled>
  )
}
