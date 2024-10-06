import React from 'react'
import { ProductAddStyled, ProductBgStyled, ProductBottomButtonsWrapperStyled, ProductButtonsWrapperStyled, ProductInfoStyled, ProductPriceStyled, ProductVariantsStyled, ProductVariantsWrapperStyled, ProductVariantWrapperStyled, ProductWrapperStyled } from './Product.style'
import Info from '../SVG\'s/Info'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { InquiryCartState } from '@/types/InquiryCart'
import { addProduct, editProduct, removeProduct } from '@/lib/slices/inquiryCartSlice'
import Link from 'next/link'

export const maxRestrictionAmount = 9999

export const getPriceRangeFromProduct = (product: any) => {
  const prices = [...product.variants.map((variant: any) => variant.price)]
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  return `${min} - ${max} Kč`
}

export default function Product({ product }: { product: any } ) {
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState
  const [variant, setVariant] = React.useState<number>(0)
  const cartProduct = React.useMemo(() => inquiryCart.products.find((cartProduct: any) => cartProduct.id === product.id), [inquiryCart, product])
  const isProductInCart = React.useMemo(() => !!cartProduct, [cartProduct])

  const dispatch = useAppDispatch()

  const addProductToCart = () => {
    const newProduct = { ...product, variants: product.variants.map((variant: any, index: number) => index === 0 ? { ...variant, amount: 1 } : { ...variant, amount: 0 }) }
    dispatch(addProduct(newProduct))
  }

  const setProductAmountInCart = (amount: number) => {
    const newAmount = amount < 0 ? 0 : amount > maxRestrictionAmount ? maxRestrictionAmount : amount
    let otherVariantsAmount = 0
    cartProduct.variants.forEach((cartVariant: any, index: number) => index !== variant && (otherVariantsAmount += cartVariant.amount))

    if (newAmount + otherVariantsAmount <= 0) {
      dispatch(removeProduct({ id: product.id }))
      setVariant(0)
    } else {
      const newProduct = JSON.parse(JSON.stringify(cartProduct))
      newProduct.variants[variant].amount = newAmount
      dispatch(editProduct({ id: product.id, newProduct }))
    }
  }

  const handleAmountInput = (value: string) => {
    const numberFromValue = Number(value)
    if (!Number.isNaN(numberFromValue) && numberFromValue >= 0) setProductAmountInCart(numberFromValue)
  }

  return (
    <ProductWrapperStyled>
      <ProductBgStyled $url='img/example.png'>
        <ProductButtonsWrapperStyled>
          <div>
            {product.variants.length > 1 ? (
              <>
                <ProductVariantsWrapperStyled $open={isProductInCart}>
                  <h4>Varianty produktu:</h4>
                  {product.variants.map((productVariant: any, index: number) => {
                    const cartVariant = cartProduct?.variants.find((x: any, cartIndex: number) => index === cartIndex)

                    return (
                      <ProductVariantWrapperStyled key={index} $selected={variant === index} onClick={() => setVariant(index)}>
                        <span>{productVariant.name}</span>
                        <div>
                          <span>{`počet kusů: ${cartVariant?.amount || 0}`}</span>
                          <span>{`cena za 1 kus: ${productVariant.price} Kč`}</span>
                        </div>
                      </ProductVariantWrapperStyled>
                    )
                  })}
                </ProductVariantsWrapperStyled>
                <ProductPriceStyled>{getPriceRangeFromProduct(product)}</ProductPriceStyled>
                <ProductVariantsStyled>více variant</ProductVariantsStyled>
              </>
            ) : (
              <ProductPriceStyled>{`${product.variants[0].price} Kč`}</ProductPriceStyled>
            )}
          </div>
          <ProductBottomButtonsWrapperStyled $show={isProductInCart}>
            <ProductAddStyled onClick={() => !isProductInCart && addProductToCart()}>
              {!isProductInCart ? (
                <span>Přidat do poptávky</span>
              ) : (
                <>
                <button onClick={() => setProductAmountInCart(cartProduct.variants[variant].amount - 1)}>-</button>
                <input onChange={({ target }) => handleAmountInput(target.value)} value={cartProduct.variants[variant].amount} min={0} max={maxRestrictionAmount} />
                <button onClick={() => setProductAmountInCart(cartProduct.variants[variant].amount + 1)}>+</button>
              </>
              )}
            </ProductAddStyled>
            <ProductInfoStyled>
              <Link href={`/produkty/${product.id}`}>
                <Info />
              </Link>
            </ProductInfoStyled>
          </ProductBottomButtonsWrapperStyled>
        </ProductButtonsWrapperStyled>
      </ProductBgStyled>
      <h3>{product.variants[variant].name}</h3>
      <p>{product.description}</p>
    </ProductWrapperStyled>
  )
}
