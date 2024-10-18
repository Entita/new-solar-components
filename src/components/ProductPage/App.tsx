'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import { mergeProductWithExcelPrice } from '../PruductsPage/Products'
import ProductNotFound from '@/app/produkty/not-found'
import Product from './Product'
import { ProductState } from '@/types/Products'
import { ExcelPricesType } from '@/types/Excel'
import { products } from '@/products'

export default function App({ productId, excelPrices }: { productId: string, excelPrices: ExcelPricesType }) {
  const [isMounted, setIsMounted] = React.useState(false)
  const product: ProductState | undefined = React.useMemo(() => {
    const product = products.find((product: ProductState) => product.id === productId)
    if (product && Object.keys(excelPrices).length > 0) return mergeProductWithExcelPrice(excelPrices, product)
    return product
  }, [productId, excelPrices, products])

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
