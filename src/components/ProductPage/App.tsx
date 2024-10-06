'use client'
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AppWrapperStyled } from '../Homepage/App.style'
import { products } from '../PruductsPage/Products'
import ProductNotFound from '@/app/produkty/not-found'
import Product from './Product'

export default function App({ productId }: { productId: string }) {
  const [loading, setLoading] = React.useState<Boolean>(true)
  const product = React.useMemo(() => products.find((product: any) => product.id === productId), [productId])

  React.useEffect(() => setLoading(false), [])

  if (loading) return <></>

  return (
    <AppWrapperStyled>
      <Header />
      {product
        ? <Product product={product} />
        : <ProductNotFound />}
      <Footer />
    </AppWrapperStyled>
  )
}
