import React from 'react'
import { ProductAmountWrapperStyled, ProductAtributeWrapperStyled, ProductBottomWrapperStyled, ProductButtonsWrapperStyled, ProductControlsWrapperStyled, ProductDescriptionWrapperStyled, ProductDimensionalButtonWrapperStyled, ProductImageWrapperStyled, ProductTopWrapperStyled, ProductVariantsWrapperStyled, ProductVariantWrapperStyled, ProductWrapperStyled } from './Product.style'
import { getPriceRangeFromProduct, maxRestrictionAmount } from '../PruductsPage/Product'
import { InquiryCartState } from '@/types/InquiryCart'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { addProduct, editProduct, removeProduct } from '@/lib/slices/inquiryCartSlice'
import { ProductPriceStyled } from '../PruductsPage/Product.style'
import RenderModel from './RenderModel'
import Zoom from './Zoom'

export const download = (url: any) => {
  const a = document.createElement('a')
  a.href = url
  a.download = url.split('/').pop()
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default function Product({ product }: { product: any }) {
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState
  const [zoomedElement, setZoomedElement] = React.useState<string>('')
  const [imageMode, setImageMode] = React.useState<'2d' | '3d'>('2d')
  const [variant, setVariant] = React.useState<number>(0)
  const cartProduct = React.useMemo(() => inquiryCart.products.find((cartProduct: any) => cartProduct.id === product.id), [inquiryCart, product])

  const dispatch = useAppDispatch()

  const addProductToCart = () => {
    if (cartProduct) {
      setProductAmountInCart(1)
    } else {
      const newProduct = { ...product, variants: product.variants.map((productVariant: any, index: number) => index === variant ? { ...productVariant, amount: 1 } : { ...productVariant, amount: 0 }) }
      dispatch(addProduct(newProduct))
    }
  }

  const setProductAmountInCart = (amount: number) => {
    const newAmount = amount < 0 ? 0 : amount > maxRestrictionAmount ? maxRestrictionAmount : amount
    let otherVariantsAmount = 0
    cartProduct.variants.forEach((cartVariant: any, index: number) => index !== variant && (otherVariantsAmount += cartVariant.amount))

    if (newAmount + otherVariantsAmount <= 0) {
      dispatch(removeProduct({ id: product.id }))
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
      {zoomedElement && <Zoom zoomedElement={zoomedElement} setZoomedElement={setZoomedElement} />}
      <ProductTopWrapperStyled>
        <ProductImageWrapperStyled $url={product.image_url}>
          {imageMode === '3d' && <RenderModel model={product.model} />}
          <ProductDimensionalButtonWrapperStyled $2d={imageMode === '2d'} onClick={() => setImageMode(prev => prev === '2d' ? '3d' : '2d')}>
            <span>2D</span>
            <span>3D</span>
          </ProductDimensionalButtonWrapperStyled>
          <ProductPriceStyled>{product.variants.length === 1 ? `${product.variants[variant].price} Kč` : getPriceRangeFromProduct(product)}</ProductPriceStyled>
        </ProductImageWrapperStyled>
        <ProductDescriptionWrapperStyled>
          <h1>{product.variants[variant].name}</h1>
          <p>{product.full_description}</p>
          <ProductAtributeWrapperStyled>
            <h3>Klíčové vlastnosti:</h3>
            <ul>
              {product.attributes.map((productAttribute: any, index: number) => (
                <li key={index}>
                  <b>{`${productAttribute.key}: `}</b>
                  {productAttribute.value}
                </li>
              ))}
            </ul>
          </ProductAtributeWrapperStyled>
        </ProductDescriptionWrapperStyled>
      </ProductTopWrapperStyled>
      <ProductBottomWrapperStyled>
        {product.variants.length > 1 ? (
          <ProductVariantsWrapperStyled>
          <h3>Varianty produktu:</h3>
          <div>
            {product.variants.map((productVariant: any, variantIndex: number) => (
              <ProductVariantWrapperStyled key={variantIndex} onClick={() => setVariant(variantIndex)} $selected={variant === variantIndex}>
                <span>{productVariant.name}</span>
                <div>
                  <span>{`počet kusů: ${cartProduct?.variants[variantIndex].amount || 0}`}</span>
                  <span>{`cena za 1 kus: ${product.variants[variantIndex].price} Kč`}</span>
                </div>
              </ProductVariantWrapperStyled>
            ))}
          </div>
        </ProductVariantsWrapperStyled>
        ) : <div></div>}
        <ProductControlsWrapperStyled>
          {cartProduct?.variants[variant].amount > 0 ? (
            <ProductAmountWrapperStyled>
              <button onClick={() => setProductAmountInCart(cartProduct.variants[variant].amount - 1)}>-</button>
              <input onChange={({ target }) => handleAmountInput(target.value)} value={cartProduct.variants[variant].amount} min={0} max={maxRestrictionAmount} />
              <button onClick={() => setProductAmountInCart(cartProduct.variants[variant].amount + 1)}>+</button>
            </ProductAmountWrapperStyled>
          ) : (
            <ProductAmountWrapperStyled onClick={() => addProductToCart()}>
              Přidat do poptávky
            </ProductAmountWrapperStyled>
          )}
          <ProductButtonsWrapperStyled>
            <button onClick={() => download(`/pdf/${product.variants[variant].pdf}.pdf`)}>Stáhnout PDF</button>
            <button onClick={() => setZoomedElement(`/models/${product.model}_technic.png`)}>Zobrazit technický výkres</button>
          </ProductButtonsWrapperStyled>
        </ProductControlsWrapperStyled>
      </ProductBottomWrapperStyled>
    </ProductWrapperStyled>
  )
}
