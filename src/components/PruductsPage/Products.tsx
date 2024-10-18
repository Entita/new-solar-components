import React from 'react'
import { ProductsWrapperStyled } from './Products.style'
import Product from './Product'
import { ProductAttributeState, ProductsState, ProductState, ProductVariantState } from '@/types/Products'
import { ExcelPricesType } from '@/types/Excel'
import { products } from '@/products'

const getNumberFromExcelString = (stringPrice: string) => parseFloat(stringPrice.replaceAll(',', '.'))

const findPriceFromExcel = (excelPrices: ExcelPricesType, productAttribute: ProductAttributeState, variantIndex: number) =>
  productAttribute.key === 'DIN' ? getNumberFromExcelString(excelPrices[`DIN ${productAttribute.value}`])
                                 : getNumberFromExcelString(excelPrices[`${productAttribute.value}-${variantIndex + 1}`])

export const mergeProductWithExcelPrice = (excelPrices: ExcelPricesType, product: ProductState) =>
  ({ ...product, variants: product.variants.map((variant: ProductVariantState, variantIndex: number) =>
    ({ ...variant, price: findPriceFromExcel(excelPrices, product.attributes[0], variantIndex) })) })

const mergeProductsWithExcelPrices = (excelPrices: ExcelPricesType) =>
  products.map((product: ProductState) => mergeProductWithExcelPrice(excelPrices, product))

export default function Products({ excelPrices }: { excelPrices: ExcelPricesType }) {
  const [isMounted, setIsMounted] = React.useState(false)
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
