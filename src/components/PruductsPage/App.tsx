'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import ProductsTitle from './ProductsTitle'
import Products from './Products'
import { Metadata } from 'next'

export default function App() {
  return (
    <AppWrapperStyled>
      <ProductsTitle />
      <Products />
    </AppWrapperStyled>
  )
}
