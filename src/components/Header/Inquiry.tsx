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
      <InquiryStyled $show={showInquiry} onClick={() => setShowInquiry(prev => !prev)}>
        <HeaderInquiryNumberStyled $show={inquiryCart.products.length > 0}>{inquiryCart.products.length}</HeaderInquiryNumberStyled>
        <div>Vaše poptávka</div>
      </InquiryStyled>
      <DarkModeToggle />
    </InquiryWrapperStyled>
  )
}
