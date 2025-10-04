import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderTextStyled, HeaderWrapperStyled } from './HeaderDesktop.style'
import Logo from '../SVG\'s/Logo'
import BackToProducts from './BackToProducts'
import InquiryPopover from './InquiryPopover'

export default function HeaderDesktop() {
  const [isOnTop, setIsOnTop] = React.useState<Boolean>(true)
  const pathname = usePathname()

  const changeIsOnTop = React.useCallback(() => setIsOnTop(window.scrollY === 0), [])

  React.useEffect(() => {
    changeIsOnTop()
    window.onscroll = () => changeIsOnTop()

    return () => { window.onscroll = null }
  }, [])

  return (
    <HeaderWrapperStyled $isOnTop={isOnTop}>
      <Link href='/'><Logo type={isOnTop ? 'dark' : 'light'} /></Link>
      <Link href='/produkty'><HeaderTextStyled $current={pathname === '/produkty'}>Produkty</HeaderTextStyled></Link>
      <Link href='/kontakt'><HeaderTextStyled $current={pathname === '/kontakt'}>Kontakt</HeaderTextStyled></Link>
      {(pathname === '/kosik' || pathname.includes('/produkty/')) && <BackToProducts />}
      {pathname !== '/kosik' && !pathname.includes('/produkty/') && <InquiryPopover />}
    </HeaderWrapperStyled>
  )
}
