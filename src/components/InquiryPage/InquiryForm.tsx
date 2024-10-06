import React from 'react'
import { InquiryFormWrapperStyled } from './InquiryForm.style'
import MapForm from '../ContactPage/MapForm'

export default function InquiryForm() {
  return (
    <InquiryFormWrapperStyled>
      <MapForm inquiry />
    </InquiryFormWrapperStyled>
  )
}
