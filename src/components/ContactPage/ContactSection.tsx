import React from 'react'
import { ContactSectionWrapperStyled } from './ContactSection.style'
import ContactUs from './ContactUs'
import ImportantData from './ImportantData'

export default function ContactSection() {
  return (
    <ContactSectionWrapperStyled>
      <ContactUs />
      <ImportantData />
    </ContactSectionWrapperStyled>
  )
}
