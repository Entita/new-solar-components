'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import ProductsTitle from './ProductsTitle'
import Products from './Products'
import { useEffect } from "react";
import { trackPageView, trackPageViewFacebook } from '@/utils/ReactGA'

export default function App() {
  useEffect(() => {
    trackPageViewFacebook()
    trackPageView('produkty')
  }, [])

  return (
    <AppWrapperStyled>
      <ProductsTitle />
      <Products />
    </AppWrapperStyled>
  )
}
