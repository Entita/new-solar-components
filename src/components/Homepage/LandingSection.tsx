import React from 'react'
import { LandingSectionWrapperStyled } from './LandingSection.style'
import BackgroundLogo from './BackgroundLogo'

export default function LandingSection() {
  return (
    <LandingSectionWrapperStyled>
      <BackgroundLogo />
      <h1>Kvalitní solární komponenty.</h1>
      <p>Dostanete spolupráci, na kterou se můžete opravdu spolehnout, a dodáme jen kvalitní komponenty od prověřených dodavatelů.</p>
      <button>Chci poptat produkty</button>
    </LandingSectionWrapperStyled>
  )
}
