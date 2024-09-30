import React from 'react'
import { ContactUsRowWrapperStyled, ContactUsWrapperStyled } from './ContactUs.style'
import Marker from '../SVG\'s/Marker'

export default function ContactUs() {
  return (
    <ContactUsWrapperStyled>
      <h1>Kontaktujte nás.</h1>
      <p>Ještě přesně nevíte jaké komponenty potřebujete a chcete se zeptat ? Nebo jste firma, která by chtěla odebírat pravidelně ? Nebojte se na nás obrátit ať už telefonicky nebo přes email.</p>
      <h3>Navštivte nás</h3>
      <div>
        <ContactUsRowWrapperStyled>
          <Marker height={24} />
          <span>Adresa sídla firmy:
            <u>Češkova 889, Zelené Předměstí, 530 02, Pardubice</u>
          </span>
        </ContactUsRowWrapperStyled>
        <ContactUsRowWrapperStyled>
          <Marker height={24} />
          <span>Adresa skladu:
            <u>Češkova 889, Zelené Předměstí, 530 02, Pardubice</u>
          </span>
        </ContactUsRowWrapperStyled>
      </div>
    </ContactUsWrapperStyled>
  )
}
