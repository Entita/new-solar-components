import React from 'react'
import { InquiryProductsWrapperStyled } from './InquiryProducts.style'
import HeaderInquiryProducts from '../Header/HeaderInquiryProducts'
import { useAppSelector } from '@/lib/hooks/hooks'
import { InquiryCartState } from '@/types/InquiryCart'
import { InquiryContentWrapperStyled } from '../Header/Inquiry.style'

export default function InquiryProducts() {
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState

  return (
    <InquiryProductsWrapperStyled>
      <InquiryContentWrapperStyled $show={true}>
        <h3>Váše nezávazná poptávka:</h3>
        <div>
          {inquiryCart.products.length === 0 && <span>Poptávka je prázdná</span>}
          {inquiryCart.products.map((inquiryProduct: any, index: number) => (
            <React.Fragment key={index}>
              {inquiryProduct.variants.map((inquiryVariant: any, variantIndex: number) => inquiryVariant.amount > 0 && (
                <HeaderInquiryProducts key={variantIndex} product={inquiryProduct} variantIndex={variantIndex} inquiry />
              ))}
            </React.Fragment>
          ))}
        </div>
      </InquiryContentWrapperStyled>
    </InquiryProductsWrapperStyled>
  )
}
