'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import { products } from '../PruductsPage/Products'
import ProductNotFound from '@/app/produkty/not-found'
import Product from './Product'

export default function App({ productId }: { productId: string }) {
  const [isMounted, setIsMounted] = React.useState(false)
  const product = React.useMemo(() => products.find((product: any) => product.id === productId), [productId])

  React.useEffect(() => setIsMounted(true), [])

  return (
    <AppWrapperStyled>
      {isMounted && (
        <>
          {product
            ? <Product product={product} />
            : <ProductNotFound />}
        </>
      )}
    </AppWrapperStyled>
  )
}
