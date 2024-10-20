'use client'
import React from 'react'
import { AppWrapperStyled } from '../Homepage/App.style'
import { mergeProductWithExcelPrice } from '../PruductsPage/Products'
import ProductNotFound from '@/app/produkty/not-found'
import Product from './Product'
import { ProductState } from '@/types/Products'
import { ExcelPricesType } from '@/types/Excel'
import { products } from '@/products'
import { useAppSelector } from '@/lib/hooks/hooks'

export const capitalizeString = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

export default function App({ productId }: { productId: string}) {
  const [isMounted, setIsMounted] = React.useState(false)
  const excelPrices = useAppSelector(state => state.excelPrices.value) as ExcelPricesType
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
          <title>{`Solar components - ${capitalizeString(productId)}`}</title>
          {product
            ? <Product product={product} />
            : <ProductNotFound />}
        </>
      )}
    </AppWrapperStyled>
  )
}
