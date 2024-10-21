import React from 'react'
import { ProductAddStyled, ProductBgStyled, ProductBottomButtonsWrapperStyled, ProductButtonsWrapperStyled, ProductInfoStyled, ProductPriceStyled, ProductVariantsStyled, ProductVariantsWrapperStyled, ProductVariantWrapperStyled, ProductWrapperStyled } from './Product.style'
import Info from '../SVG\'s/Info'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { InquiryCartState, InquiryProductState, InquiryProductVariantState } from '@/types/InquiryCart'
import { ProductState, ProductVariantState } from '@/types/Products'
import { addProduct, editProduct, removeProduct } from '@/lib/slices/inquiryCartSlice'
import Link from 'next/link'

export const maxRestrictionAmount = 9999

export const getPriceRangeFromProduct = (product: ProductState) => {
  const prices = [...product.variants.map((variant: ProductVariantState) => variant.price)]
  const min = String(Math.min(...prices)).replaceAll('.', ',')
  const max = String(Math.max(...prices)).replaceAll('.', ',')
  if (min === max) return `${min} Kč`
  return `${min} - ${max} Kč`
}

export const formatPriceFromProduct = (price: number) => {
  return String(price).replaceAll('.', ',')
}

export const addToInquiryAnimation = (productEl: HTMLDivElement | null) => {
  const inquiryEl = document.getElementById('inquiry')
  if (!inquiryEl || !productEl) return

  const inquiryBounds = inquiryEl.getBoundingClientRect()
  const productBounds = productEl.getBoundingClientRect()
  const centerX = inquiryBounds.left + inquiryBounds.width / 2
  const centerY = inquiryBounds.top + inquiryBounds.height / 2

  const clonedEl = productEl.cloneNode(false)
  const parentEl = document.createElement('div')

  parentEl.appendChild(clonedEl)
  parentEl.style.position = 'fixed'
  parentEl.style.top = `${productBounds.y}px`
  parentEl.style.left = `${productBounds.x}px`
  parentEl.style.width = `${productBounds.width}px`
  parentEl.style.height = `${productBounds.height}px`
  parentEl.style.zIndex = '10'
  parentEl.style.scale = '0.5'
  parentEl.style.pointerEvents = 'none'
  parentEl.style.transition = 'scale 1.2s ease, left 1.2s ease, top 1.2s ease'

  document.body.appendChild(parentEl)
  setTimeout(() => {
    parentEl.style.top = `${centerY - productBounds.height / 2}px`
    parentEl.style.left = `${centerX - productBounds.width / 2}px`
    parentEl.style.scale = '0'

    setTimeout(() => parentEl.remove(), 1200)
  }, 1)
}

export default function Product({ product }: { product: ProductState } ) {
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState
  const [variant, setVariant] = React.useState<number>(0)
  const cartProduct = React.useMemo(() => inquiryCart.products.find((cartProduct: InquiryProductState) => cartProduct.id === product.id), [inquiryCart, product])
  const productRef = React.useRef<HTMLDivElement>(null!)

  const dispatch = useAppDispatch()

  const addProductToCart = React.useCallback(() => {
    const newProduct = {
      ...product,
      variants: product.variants.map(
        (variant: ProductVariantState, index: number) =>
          index === 0 ? { ...variant, amount: 1 } : { ...variant, amount: 0 }),
    }
    dispatch(addProduct(newProduct))
    addToInquiryAnimation(productRef.current)
  }, [inquiryCart, product, cartProduct, variant])

  const setProductAmountInCart = React.useCallback((amount: number) => {
    if (!cartProduct) return
    const newAmount = amount < 0 ? 0 : amount > maxRestrictionAmount ? maxRestrictionAmount : amount
    let otherVariantsAmount = 0
    cartProduct.variants.forEach((cartVariant: InquiryProductVariantState, index: number) => index !== variant && (otherVariantsAmount += cartVariant.amount))

    if (newAmount + otherVariantsAmount <= 0) {
      dispatch(removeProduct({ id: cartProduct.id }))
      setVariant(0)
    } else {
      const newProduct = JSON.parse(JSON.stringify(cartProduct))
      newProduct.variants[variant].amount = newAmount
      dispatch(editProduct({ id: cartProduct.id, newProduct }))
    }
  }, [cartProduct, variant])

  const handleAmountInput = React.useCallback((value: string) => {
    const numberFromValue = Number(value)
    if (!Number.isNaN(numberFromValue) && numberFromValue >= 0) setProductAmountInCart(numberFromValue)
  }, [])

  return (
    <ProductWrapperStyled>
      <ProductBgStyled ref={productRef} $url={`models/${product.model}/${product.model}.png`}>
        <ProductButtonsWrapperStyled>
          <div>
            {product.variants.length > 1 ? (
              <>
                <ProductVariantsWrapperStyled $open={!!cartProduct}>
                  <h4>Varianty produktu:</h4>
                  {product.variants.map((productVariant: ProductVariantState, index: number) => {
                    const cartVariant = cartProduct?.variants.find((x: InquiryProductVariantState, cartIndex: number) => index === cartIndex)

                    return (
                      <ProductVariantWrapperStyled key={productVariant.name} $selected={variant === index} onClick={() => setVariant(index)}>
                        <span>{productVariant.name}</span>
                        <div>
                          <span>{`počet kusů: ${cartVariant?.amount || 0}`}</span>
                          <span>{`cena za 1 kus: ${formatPriceFromProduct(productVariant.price)} Kč`}</span>
                        </div>
                      </ProductVariantWrapperStyled>
                    )
                  })}
                </ProductVariantsWrapperStyled>
                <ProductPriceStyled>{getPriceRangeFromProduct(product)}</ProductPriceStyled>
                <ProductVariantsStyled>více variant</ProductVariantsStyled>
              </>
            ) : (
              <ProductPriceStyled>{`${formatPriceFromProduct(product.variants[0].price)} Kč`}</ProductPriceStyled>
            )}
          </div>
          <ProductBottomButtonsWrapperStyled $show={!!cartProduct}>
            <ProductAddStyled onClick={() => !cartProduct && addProductToCart()}>
              {!cartProduct ? (
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
      <Link href={`/produkty/${product.id}`}>
        <h3>{product.variants[variant].name}</h3>
      </Link>
      <p>{product.description}</p>
    </ProductWrapperStyled>
  )
}
