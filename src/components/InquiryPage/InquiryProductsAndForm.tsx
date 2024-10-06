import React from 'react'
import { InquiryProductsAndFormWrapperStyled } from './InquiryProductsAndForm.style'
import InquiryForm from './InquiryForm'
import InquiryProducts from './InquiryProducts'

export default function InquiryProductsAndForm() {
  return (
    <InquiryProductsAndFormWrapperStyled>
      <InquiryProducts />
      <InquiryForm />
    </InquiryProductsAndFormWrapperStyled>
  )
}
