import React from 'react'
import { BackgroundLogoStyled } from './BackgroundLogo.style'
import BigLogo from '../SVG\'s/BigLogo'

export default function BackgroundLogo() {
  const [logoHeight, setLogoHeight] = React.useState(0)

  const changeLogoHeight = React.useCallback(() => {
    setLogoHeight(window.innerHeight)
  }, [])

  React.useEffect(() => {
    changeLogoHeight()

    window.addEventListener('resize', changeLogoHeight)
    return () => window.removeEventListener('resize', changeLogoHeight)
  }, [])

  return (
    <BackgroundLogoStyled>
      <BigLogo height={logoHeight} />
    </BackgroundLogoStyled>
  )
}
