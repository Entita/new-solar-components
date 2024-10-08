import React from 'react'
import { LandingSectionWrapperStyled } from './LandingSection.style'
import BackgroundLogo from './BackgroundLogo'
import Link from 'next/link'

export default function LandingSection() {
  return (
    <LandingSectionWrapperStyled>
      <BackgroundLogo />
      <h1>Kvalitní solární komponenty.</h1>
      <p>Dostanete spolupráci, na kterou se můžete opravdu spolehnout, a dodáme jen kvalitní komponenty od prověřených dodavatelů.</p>
      <Link href='/produkty'>Chci poptat produkty</Link>
    </LandingSectionWrapperStyled>
  )
}
