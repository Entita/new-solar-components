'use client'
import React from 'react'
import { ProductsWrapperStyled } from './Products.style'
import Product from './Product'
import { ProductsState, ProductState, ProductVariantState } from '@/types/Products'
import { products } from '@/products'
import { useAppSelector } from '@/lib/hooks/hooks'
import { PricesType } from '@/types/Prices'
import { isDevelopment } from '@/utils/development'

export const mergeProductWithStripePrice = (prices: PricesType[], product: ProductState) => ({
  ...product,
  variants: product.variants.map((variant: ProductVariantState) => {
    const stripePrice = prices.find((p) => isDevelopment ? p.id === variant.testPriceId : p.id === variant.priceId)
    return {
      ...variant,
      price: stripePrice ? (stripePrice.unit_amount ?? 0) / 100 : 0,
    }
  }),
})

export const mergeProductsWithStripePrices = (prices: PricesType[], productsToMerge: ProductState[]) =>
  productsToMerge.map((product: ProductState) => mergeProductWithStripePrice(prices, product))

export default function Products() {
  const [isMounted, setIsMounted] = React.useState(false)
  const prices = useAppSelector(state => state.prices.prices) as PricesType[]
  const productsWithPrices: ProductsState = React.useMemo(() => prices !== null ? mergeProductsWithStripePrices(prices, products) : products, [prices, products])

  React.useEffect(() => setIsMounted(true), [])

  return (
    <ProductsWrapperStyled>
      {isMounted && (
        <>
          {productsWithPrices.map((product: ProductState) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
        </>
      )}
    </ProductsWrapperStyled>
  )
}
