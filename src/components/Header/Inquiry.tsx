import React from 'react'
import Link from 'next/link'
import { useAppSelector } from '@/lib/hooks/hooks'
import { InquiryCartState } from '@/types/InquiryCart'
import { HeaderInquiryNumberStyled, InquiryContentWrapperStyled, InquiryStyled, InquiryWrapperStyled } from './Inquiry.style'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import HeaderInquiryProducts from './HeaderInquiryProducts'

export default function Inquiry() {
  const [showInquiry, setShowInquiry] = React.useState<Boolean>(false)
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState
  const numberOfProducts =
    inquiryCart.products.reduce((sum, product) =>
      product.variants.reduce((variantSum: number, variant: any) =>
        (variant.amount > 0 ? 1 : 0) + variantSum, 0) + sum, 0)

  return (
    <InquiryWrapperStyled>
      <InquiryContentWrapperStyled $show={showInquiry}>
        <h3>Vaše produkty:</h3>
        <div>
          {inquiryCart.products.length === 0 && <span>Poptávka je prázdná</span>}
          {inquiryCart.products.map((inquiryProduct: any, index: number) => (
            <React.Fragment key={index}>
              {inquiryProduct.variants.map((inquiryVariant: any, variantIndex: number) => inquiryVariant.amount > 0 && (
                <HeaderInquiryProducts key={variantIndex} product={inquiryProduct} variantIndex={variantIndex} />
              ))}
            </React.Fragment>
          ))}
        </div>
        <Link href='/poptavka'>Odeslat poptávku</Link>
      </InquiryContentWrapperStyled>
      <InquiryStyled id='inquiry' $show={showInquiry} onClick={() => setShowInquiry(prev => !prev)}>
        <HeaderInquiryNumberStyled $show={inquiryCart.products.length > 0}>{numberOfProducts}</HeaderInquiryNumberStyled>
        <div>Vaše poptávka</div>
      </InquiryStyled>
      <DarkModeToggle />
    </InquiryWrapperStyled>
  )
}
