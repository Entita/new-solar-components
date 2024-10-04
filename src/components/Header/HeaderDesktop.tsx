import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderInquiryNumberStyled, HeaderTextStyled, HeaderWrapperStyled, InquiryWrapperStyled } from './HeaderDesktop.style'
import Logo from '../SVG\'s/Logo'
import DarkModeToggle from '../DarkMode/DarkModeToggle'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/hooks'
import { InquiryCartState } from '@/types/InquiryCart'

export default function HeaderDesktop() {
  const [isOnTop, setIsOnTop] = React.useState<Boolean>(true)
  const pathname = usePathname()
  const inquiryCart = useAppSelector(state => state.inquiryCart) as InquiryCartState

  const dispatch = useAppDispatch()
    // dispatch(toggleDarkMode(newMode))

  const changeIsOnTop = () => setIsOnTop(window.scrollY === 0)

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
      <InquiryWrapperStyled>
        <HeaderInquiryNumberStyled $show={inquiryCart.products.length > 0}>{inquiryCart.products.length}</HeaderInquiryNumberStyled>
        <div>Vaše poptávka</div>
        <DarkModeToggle />
      </InquiryWrapperStyled>
    </HeaderWrapperStyled>
  )
}
