'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import ProductsTitle from './ProductsTitle'
import Products from './Products'
import { ExcelPricesType } from '@/types/Excel'

export default function App({ excelPrices }: { excelPrices: ExcelPricesType }) {
  return (
    <AppWrapperStyled>
      <ProductsTitle />
      <Products excelPrices={excelPrices} />
    </AppWrapperStyled>
  )
}
