'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import ProductsTitle from './ProductsTitle'
import Products from './Products'
import { useEffect } from "react";
import ReactPixel from 'react-facebook-pixel'

export default function App() {
  useEffect(() => {
    ReactPixel.pageView()
  }, [])

  return (
    <AppWrapperStyled>
      <ProductsTitle />
      <Products />
    </AppWrapperStyled>
  )
}
