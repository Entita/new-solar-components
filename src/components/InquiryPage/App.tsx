'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import InquiryText from './InquiryText'
import InquiryProductsAndForm from './InquiryProductsAndForm'

export default function App() {
  return (
    <AppWrapperStyled>
      <InquiryText />
      <InquiryProductsAndForm />
    </AppWrapperStyled>
  )
}
