import React from 'react'
import { LandingSectionWrapperStyled } from './LandingSection.style'
import BackgroundLogo from './BackgroundLogo'
import Link from 'next/link'

export default function LandingSection() {
  const [isMobile, setIsMobile] = React.useState<Boolean | null>(null)

  const isDeviceMobile = React.useCallback(() => setIsMobile(window.innerWidth < 500), [])

  React.useEffect(() => {
    isDeviceMobile()
    window.addEventListener('resize', isDeviceMobile)

    return () => window.removeEventListener('resize', isDeviceMobile)
  }, [])

  return (
    <LandingSectionWrapperStyled>
      {!isMobile && <BackgroundLogo />}
      <h1>Kvalitní solární komponenty.</h1>
      <p>Dostanete spolupráci, na kterou se můžete opravdu spolehnout, a dodáme jen kvalitní komponenty od prověřených dodavatelů.</p>
      <Link href='/produkty'>Chci objednat produkty</Link>
    </LandingSectionWrapperStyled>
  )
}
