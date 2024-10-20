import React from 'react'
import { ProductsWrapperStyled } from './Products.style'
import Product from './Product'
import { ProductAttributeState, ProductsState, ProductState, ProductVariantState } from '@/types/Products'
import { ExcelPricesType } from '@/types/Excel'
import { products } from '@/products'
import { useAppSelector } from '@/lib/hooks/hooks'

const findPriceFromExcel = (excelPrices: ExcelPricesType, productAttribute: ProductAttributeState, variantIndex: number) =>
  productAttribute.key === 'DIN' ? excelPrices[`DIN ${productAttribute.value}`]
                                 : excelPrices[`${productAttribute.value}-${variantIndex + 1}`]

export const mergeProductWithExcelPrice = (excelPrices: ExcelPricesType, product: ProductState) =>
  ({ ...product, variants: product.variants.map((variant: ProductVariantState, variantIndex: number) =>
    ({ ...variant, price: findPriceFromExcel(excelPrices, product.attributes[0], variantIndex) || 0 })) })

export const mergeProductsWithExcelPrices = (excelPrices: ExcelPricesType, productsToMerge: ProductState[] = products) =>
  productsToMerge.map((product: ProductState) => mergeProductWithExcelPrice(excelPrices, product))

export default function Products() {
  const [isMounted, setIsMounted] = React.useState(false)
  const excelPrices = useAppSelector(state => state.excelPrices.value) as ExcelPricesType
  const productsWithExcelPrices: ProductsState = React.useMemo(() => Object.keys(excelPrices).length > 0 ? mergeProductsWithExcelPrices(excelPrices) : products, [excelPrices])

  React.useEffect(() => setIsMounted(true), [])

  return (
    <ProductsWrapperStyled>
      {isMounted && (
        <>
          {productsWithExcelPrices.map((product: ProductState, index: number) => (
            <Product
              key={index}
              product={product}
            />
          ))}
        </>
      )}
    </ProductsWrapperStyled>
  )
}
