'use client'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AppWrapperStyled } from '../Homepage/App.style'
import ProductsTitle from './ProductsTitle'
import Products from './Products'

export default function App() {
  const [loading, setLoading] = React.useState<Boolean>(true)

  React.useEffect(() => setLoading(false), [])

  if (loading) return <></>

  return (
    <AppWrapperStyled>
      <Header />
      <ProductsTitle />
      <Products />
      <Footer />
    </AppWrapperStyled>
  )
}
