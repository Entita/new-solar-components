'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import { mergeProductWithStripePrice } from '../PruductsPage/Products'
import ProductNotFound from '@/app/produkty/not-found'
import Product from './Product'
import { ProductState } from '@/types/Products'
import { products } from '@/products'
import { useAppSelector } from '@/lib/hooks/hooks'
import { PricesType } from '@/types/Prices'

export const capitalizeString = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

export default function App({ productId }: { productId: string}) {
  const [isMounted, setIsMounted] = React.useState(false)
  const prices = useAppSelector(state => state.prices.prices) as PricesType[]
  const product: ProductState | undefined = React.useMemo(() => {
    const product = products.find((product: ProductState) => product.id === productId)
    if (product && prices !== null) return mergeProductWithStripePrice(prices, product)
    return product
  }, [productId, prices, products])

  React.useEffect(() => setIsMounted(true), [])

  return (
    <AppWrapperStyled>
      {isMounted && (
        <>
          <title>{`Solar components - ${capitalizeString(productId)}`}</title>
          {product
            ? <Product product={product} />
            : <ProductNotFound />}
        </>
      )}
    </AppWrapperStyled>
  )
}
