'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import ProductsTitle from './ProductsTitle'
import Products from './Products'
import { useEffect } from "react";

export default function App() {
  const emitPageView = async () => {
    if (typeof window !== 'undefined') {
      const ReactPixel = (await import('react-facebook-pixel')).default;
      ReactPixel.pageView()
    }
  }

  useEffect(() => {
    emitPageView()
  }, [])

  return (
    <AppWrapperStyled>
      <ProductsTitle />
      <Products />
    </AppWrapperStyled>
  )
}
