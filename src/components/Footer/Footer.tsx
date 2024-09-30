import React from 'react'
import { FooterWrapperStyled } from './Footer.style'
import Image from 'next/image'

export default function Footer() {
  const thisYear = React.useMemo(() => new Date().getFullYear(), [])

  return (
    <FooterWrapperStyled>
      <div>
        <span>{`©${thisYear} Solar Components s.r.o. All Rights Reserved.`}</span>
        <a href='#'>Zpět nahoru &#8593;</a>
      </div>
      <Image priority alt='Full logo' src='/img/full_logo.png' width={206} height={118} />
    </FooterWrapperStyled>
  )
}
