import React from 'react'
import { WhyUsCardsWrapperStyled, WhyUsCardWrapperStyled, WhyUsSectionWrapperStyled } from './WhyUsSection.style'

export default function WhyUsSection() {
  const [selected, setSelected] = React.useState<number>(0)
  const [hovered, setHovered] = React.useState<number | null>(null)

  const changeSelectToNext = React.useCallback(() => {
    setSelected((prev: number) => prev >= 2 ? 0 : prev + 1)
  }, [selected])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (hovered === null) changeSelectToNext()
    }, 2000)

    return () => clearInterval(interval)
  }, [hovered])

  return (
    <WhyUsSectionWrapperStyled>
      <h2>Proč nás ?</h2>
      <WhyUsCardsWrapperStyled>
        <WhyUsCardWrapperStyled onMouseEnter={() => (setHovered(0), setSelected(0))} onMouseLeave={() => setHovered(null)} $selected={selected === 0}>
          <h3><i>01.</i></h3>
          <p>Jsme menší firma a o to více nám <i>záleží na důvěryhodnosti</i> a kvalitní komunikaci.</p>
        </WhyUsCardWrapperStyled>
        <WhyUsCardWrapperStyled onMouseEnter={() => (setHovered(0), setSelected(1))} onMouseLeave={() => setHovered(null)} $selected={selected === 1}>
          <h3><i>02.</i></h3>
          <p>Protože si nemůžeme dovolit zklamat, tak dbáme na to, abyste vždy <i>obdrželi</i> pouze <i>prvotřídní komponenty</i>.</p>
        </WhyUsCardWrapperStyled>
        <WhyUsCardWrapperStyled onMouseEnter={() => (setHovered(0), setSelected(2))} onMouseLeave={() => setHovered(null)} $selected={selected === 2}>
          <h3><i>03.</i></h3>
          <p>Dáváme si záležet na <i>rychlé a efektivní komunikaci</i>, abyste měli odpovědi a řešení co nejdříve.</p>
        </WhyUsCardWrapperStyled>
      </WhyUsCardsWrapperStyled>
    </WhyUsSectionWrapperStyled>
  )
}
