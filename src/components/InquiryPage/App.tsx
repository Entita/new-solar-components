'use client'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AppWrapperStyled } from '../Homepage/App.style'
import InquiryText from './InquiryText'
import InquiryProductsAndForm from './InquiryProductsAndForm'

export default function App() {
  const [loading, setLoading] = React.useState<Boolean>(true)

  React.useEffect(() => setLoading(false), [])

  if (loading) return <></>

  return (
    <AppWrapperStyled>
      <Header />
      <InquiryText />
      <InquiryProductsAndForm />
      <Footer />
    </AppWrapperStyled>
  )
}
