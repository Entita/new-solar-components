'use client'
import React from 'react'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

export default function Header() {
  const [isMobile, setIsMobile] = React.useState<Boolean | null>(null)

  const isDeviceMobile = React.useCallback(() => setIsMobile(window.innerWidth < 760), [])

  React.useEffect(() => {
    isDeviceMobile()
    window.addEventListener('resize', isDeviceMobile)

    return () => window.removeEventListener('resize', isDeviceMobile)
  }, [])

  if (isMobile === null) return <></>

  return (
    <>
      {isMobile
        ? <HeaderMobile />
        : <HeaderDesktop />}
    </>
  )
}
