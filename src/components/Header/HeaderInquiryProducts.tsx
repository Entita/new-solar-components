import React from 'react'
import { useAppDispatch } from '@/lib/hooks/hooks'
import Trash from '../SVG\'s/Trash'
import { maxRestrictionAmount } from '../PruductsPage/Product'
import { InquiryProductPriceWrapperStyled, InquiryProductWrapperStyled } from './HeaderInquiryProducts.style'
import { editProduct, removeProduct } from '@/lib/slices/inquiryCartSlice'
import Link from 'next/link'
import { InquiryProductState, InquiryProductVariantState } from '@/types/InquiryCart'

export default function HeaderInquiryProducts({ product, variantIndex, inquiry }: { product: InquiryProductState, variantIndex: number, inquiry?: Boolean }) {
  const variant = React.useMemo(() => product.variants[variantIndex], [product, variantIndex])
  const dispatch = useAppDispatch()

  const setProductAmountInCart = React.useCallback((amount: number) => {
    const newAmount = amount < 0 ? 0 : amount > maxRestrictionAmount ? maxRestrictionAmount : amount
    let otherVariantsAmount = 0
    product.variants.forEach((cartVariant: InquiryProductVariantState, index: number) => index !== variantIndex && (otherVariantsAmount += cartVariant.amount))

    if (newAmount + otherVariantsAmount <= 0) {
      dispatch(removeProduct({ id: product.id }))
    } else {
      const newProduct = JSON.parse(JSON.stringify(product))
      newProduct.variants[variantIndex].amount = newAmount
      dispatch(editProduct({ id: product.id, newProduct }))
    }
  }, [maxRestrictionAmount, product, variantIndex])

  const handleAmountInput = React.useCallback((value: string) => {
    const numberFromValue = Number(value)
    if (!Number.isNaN(numberFromValue) && numberFromValue >= 0) setProductAmountInCart(numberFromValue)
  }, [])

  return (
    <InquiryProductWrapperStyled key={variantIndex}>
      <div>
        <Link href={`/produkty/${product.id}`}><span>{variant.name}</span></Link>
        <div onClick={() => setProductAmountInCart(0)}>
          <Trash height={16} />
        </div>
      </div>
      <div>
        <InquiryProductPriceWrapperStyled>
          <button onClick={() => setProductAmountInCart(variant.amount - 1)}>-</button>
          <input onChange={({ target }) => handleAmountInput(target.value)} value={variant.amount} min={0} max={maxRestrictionAmount} />
          <button onClick={() => setProductAmountInCart(variant.amount + 1)}>+</button>
        </InquiryProductPriceWrapperStyled>
        <span>{inquiry ? 'cena za 1 kus:' : 'cena'} <b>{`${variant.price} Kč`}</b></span>
      </div>
    </InquiryProductWrapperStyled>
  )
}
