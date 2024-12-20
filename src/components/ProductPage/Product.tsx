import React from 'react'
import { ProductAmountWrapperStyled, ProductAtributeWrapperStyled, ProductBottomWrapperStyled, ProductButtonsWrapperStyled, ProductControlsWrapperStyled, ProductDescriptionWrapperStyled, ProductDimensionalButtonWrapperStyled, ProductImageWrapperStyled, ProductTopWrapperStyled, ProductVariantsWrapperStyled, ProductVariantWrapperStyled, ProductWrapperStyled } from './Product.style'
import { formatPriceFromProduct, getPriceRangeFromProduct, maxRestrictionAmount } from '../PruductsPage/Product'
import { InquiryCartState, InquiryProductState, InquiryProductVariantState } from '@/types/InquiryCart'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { addProduct, editProduct, removeProduct } from '@/lib/slices/inquiryCartSlice'
import { ProductPriceStyled } from '../PruductsPage/Product.style'
import RenderModel from './RenderModel'
import Zoom from './Zoom'
import { ProductAttributeState, ProductState, ProductVariantState } from '@/types/Products'

export default function Product({ product }: { product: ProductState }) {
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState
  const [zoomedElement, setZoomedElement] = React.useState<string>('')
  const [imageMode, setImageMode] = React.useState<'2d' | '3d'>('2d')
  const [variant, setVariant] = React.useState<number>(0)
  const cartProduct = React.useMemo(() => inquiryCart.products.find((cartProduct: InquiryProductState) => cartProduct.id === product.id), [inquiryCart, product])
  const haveMultipleVariants = React.useMemo(() => product.variants.length > 1, [product])

  const dispatch = useAppDispatch()

  const addProductToCart = React.useCallback(() => {
    if (cartProduct) {
      setProductAmountInCart(1)
    } else {
      const newProduct = {
        ...product,
        variants: product.variants.map((productVariant: ProductVariantState, index: number) =>
          index === variant ? { ...productVariant, amount: 1 } : { ...productVariant, amount: 0 }) }
      dispatch(addProduct(newProduct))
    }
  }, [inquiryCart, product, cartProduct, variant])

  const setProductAmountInCart = React.useCallback((amount: number) => {
    if (!cartProduct) return

    const newAmount = amount < 0 ? 0 : amount > maxRestrictionAmount ? maxRestrictionAmount : amount
    let otherVariantsAmount = 0
    cartProduct.variants.forEach((cartVariant: InquiryProductVariantState, index: number) => index !== variant && (otherVariantsAmount += cartVariant.amount))

    if (newAmount + otherVariantsAmount <= 0) {
      dispatch(removeProduct({ id: cartProduct.id }))
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

  const getAttributeBasedOnVariant = (attribute: ProductAttributeState, productVariants: ProductVariantState) => {
    const productAttributes = productVariants.attributes
    if (productAttributes) {
      const findVariantAttribute = productAttributes.find((searchingVariantAttribute: ProductAttributeState) => searchingVariantAttribute.key === attribute.key)
      if (findVariantAttribute) return findVariantAttribute.value
      return attribute.value
    }
    return attribute.value
  }

  return (
    <ProductWrapperStyled>
      {zoomedElement && <Zoom zoomedElement={zoomedElement} setZoomedElement={setZoomedElement} />}
      <ProductTopWrapperStyled>
        <ProductImageWrapperStyled $url={`models/${product.model}/${product.model}.png`}>
          {imageMode === '3d' && <RenderModel model={product.model} />}
          <ProductDimensionalButtonWrapperStyled $2d={imageMode === '2d'} onClick={() => setImageMode(prev => prev === '2d' ? '3d' : '2d')}>
            <span>2D</span>
            <span>3D</span>
          </ProductDimensionalButtonWrapperStyled>
          <ProductPriceStyled>{!haveMultipleVariants ? `${formatPriceFromProduct(product.variants[variant].price)} Kč` : getPriceRangeFromProduct(product)}</ProductPriceStyled>
        </ProductImageWrapperStyled>
        <ProductDescriptionWrapperStyled>
          <h1>{product.variants[variant].name}</h1>
          <p>{product.full_description}</p>
          <ProductAtributeWrapperStyled>
            <h3>Klíčové vlastnosti:</h3>
            <ul>
              {product.attributes.map((productAttribute: ProductAttributeState, index: number) => (
                <li key={index}>
                  <b>{`${productAttribute.key}: `}</b>
                  {getAttributeBasedOnVariant(productAttribute, product.variants[variant])}
                </li>
              ))}
            </ul>
          </ProductAtributeWrapperStyled>
        </ProductDescriptionWrapperStyled>
      </ProductTopWrapperStyled>
      <ProductBottomWrapperStyled>
        {haveMultipleVariants ? (
          <ProductVariantsWrapperStyled>
          <h3>Varianty produktu:</h3>
          <div>
            {product.variants.map((productVariant: ProductVariantState, variantIndex: number) => (
              <ProductVariantWrapperStyled key={variantIndex} onClick={() => setVariant(variantIndex)} $selected={variant === variantIndex}>
                <span>{productVariant.name}</span>
                <div>
                  <span>{`počet kusů: ${cartProduct?.variants[variantIndex].amount || 0}`}</span>
                  <span>{`cena za 1 kus: ${formatPriceFromProduct(product.variants[variantIndex].price)} Kč`}</span>
                </div>
              </ProductVariantWrapperStyled>
            ))}
          </div>
        </ProductVariantsWrapperStyled>
        ) : (
          <ProductButtonsWrapperStyled>
            <button onClick={() => setZoomedElement(`/models/${product.model}/${product.model}_technical_drawing.png`)}>Zobrazit technický výkres</button>
          </ProductButtonsWrapperStyled>
        )}
        <ProductControlsWrapperStyled>
          {cartProduct && cartProduct?.variants[variant].amount > 0 ? (
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
          {haveMultipleVariants && (
            <ProductButtonsWrapperStyled>
              <button onClick={() => setZoomedElement(`/models/${product.model}/${product.model}_technical_drawing.png`)}>Zobrazit technický výkres</button>
            </ProductButtonsWrapperStyled>
          )}
        </ProductControlsWrapperStyled>
      </ProductBottomWrapperStyled>
    </ProductWrapperStyled>
  )
}
