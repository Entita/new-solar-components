import React from 'react'
import StepsDesktop from './StepsDesktop'
import StepsMobile from './StepsMobile'

export const allSteps = [
  {
    title: 'Kouknete se na naše produkty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla. Nullam aliquet vestibulum augue, non dapibus nulla vestibulum sit amet.',
  },
  {
    title: 'Zaklikáte si varianty a počet podle dostupnosti',
    description: 'Lofaads amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla. Nullam aliquet vestibulum augue, non dapibus nulla vestibulum sit amet.',
  },
  {
    title: 'Odešlete poptávací zprávu skrz naše stránky',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla. Nullam aliquet vestibulum augue, non dapibus nulla vestibulum sit amet.',
  },
  {
    title: 'My připravíme podle Vaší poptávky co nejlepší nabídku',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla. Nullam aliquet vestibulum augue, non dapibus nulla vestibulum sit amet.',
  },
  {
    title: 'Pokud se vám bude naše nabídka líbit tak odesíláme na vámi určenou adresu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra nulla. Nullam aliquet vestibulum augue, non dapibus nulla vestibulum sit amet.',
  },
]

export default function StepsSection() {
  const [isMobile, setIsMobile] = React.useState<Boolean | null>(null)

  const isDeviceMobile = React.useCallback(() => setIsMobile(window.innerWidth < 900), [])

  React.useEffect(() => {
    isDeviceMobile()
    window.addEventListener('resize', isDeviceMobile)

    return () => window.removeEventListener('resize', isDeviceMobile)
  }, [])

  if (isMobile === null) return <></>

  return (
    <>
      {isMobile
        ? <StepsMobile />
        : <StepsDesktop />}
    </>
  )
}
