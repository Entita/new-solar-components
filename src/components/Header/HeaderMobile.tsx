import React from 'react'
import { HeaderMobileBackgroundStyled, HeaderMobileButtonRelativeWrapperStyled, HeaderMobileButtonStyled, HeaderMobileButtonWrapperStyled, HeaderMobileContentWrapperStyled, HeaderMobileWrapperStyled, HeaderTextStyled } from './HeaderMobile.style'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '../SVG\'s/Logo'
import DarkModeToggle from '../DarkMode/DarkModeToggle'

export default function HeaderMobile() {
  const [open, setOpen] = React.useState<Boolean>(false)
  const pathname = usePathname()

  return (
    <HeaderMobileWrapperStyled>
      <HeaderMobileButtonWrapperStyled>
        <HeaderMobileBackgroundStyled $open={open} />
        <HeaderMobileButtonRelativeWrapperStyled $open={open} onClick={() => setOpen(prev => !prev)}>
          <HeaderMobileButtonStyled $open={open} />
        </HeaderMobileButtonRelativeWrapperStyled>
      </HeaderMobileButtonWrapperStyled>
      <HeaderMobileContentWrapperStyled $open={open}>
        <Link href='/'><Logo height={128} mobile={true} type='light' /></Link>
        <Link href='/produkty'><HeaderTextStyled $current={pathname === '/produkty'}>Produkty</HeaderTextStyled></Link>
        <Link href='/kontakt'><HeaderTextStyled $current={pathname === '/kontakt'}>Kontakt</HeaderTextStyled></Link>
        <div>
          <span>Vaše poptávka</span>
        </div>
        <DarkModeToggle />
      </HeaderMobileContentWrapperStyled>
    </HeaderMobileWrapperStyled>
  )
}
