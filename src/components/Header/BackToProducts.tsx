import React from 'react'
import Link from 'next/link'
import Arrow from '../SVG\'s/Arrow'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import { HeaderBackToProductsWrapperStyled } from './BackToProducts.style'

export default function BackToProducts() {
  return (
    <HeaderBackToProductsWrapperStyled>
      <Link href='/produkty'>
        <Arrow />
        <span>Zpět na výběr</span>
      </Link>
      <DarkModeToggle />
    </HeaderBackToProductsWrapperStyled>
  )
}
