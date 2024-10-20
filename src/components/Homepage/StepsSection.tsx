import React from 'react'
import StepsDesktop from './StepsDesktop'
import StepsMobile from './StepsMobile'

export const allSteps = [
  {
    title: 'Prozkoumejte naši širokou nabídku produktů',
    description: 'Na našich webových stránkách máte možnost prohlédnout si rozmanité produkty, které nabízíme. Zaměřujeme se na vysoce kvalitní komponenty pro montáž solárních systémů. Věnujte čas důkladnému zkoumání našich výrobků, abyste našli ty, které nejlépe vyhovují vašim potřebám. Každý produkt je detailně popsán s uvedením technických specifikací, což vám pomůže učinit informované rozhodnutí.',
  },
  {
    title: 'Vyberte si varianty a množství',
    description: 'Jakmile identifikujete produkty, které vás zajímají, jednoduše si zaklikněte požadované varianty a množství podle aktuální dostupnosti. Naše platforma je navržena tak, aby byl výběr rychlý a intuitivní. Nezapomeňte zkontrolovat, zda vybrané varianty splňují vaše požadavky, abychom mohli zpracovat vaši poptávku co nejefektivněji.',
  },
  {
    title: 'Odešlete poptávkovou zprávu',
    description: 'Po dokončení výběru produktů přejděte k odeslání poptávkové zprávy prostřednictvím našich stránek. Tento krok je klíčový, neboť nám poskytuje informace o vašich preferencích a požadavcích. Ujistěte se, že jste vyplnili všechny potřebné údaje, abychom mohli co nejpřesněji a nejrychleji reagovat na vaši poptávku.',
  },
  {
    title: 'Příprava individuální nabídky',
    description: 'Po obdržení vaší poptávky začneme zpracovávat individuální cenovou nabídku, která bude přesně odpovídat vašim požadavkům. Ceny uvedené na webových stránkách slouží pouze jako orientační odhad. Finální cena se bude odvíjet od několika faktorů, jako je objednané množství, historie spolupráce, spolehlivost a další specifické podmínky. Naším cílem je zajistit vám co nejlepší možnou cenu na základě konkrétních detailů vaší poptávky.',
  },
  {
    title: 'Přijetí nabídky a dodání',
    description: 'Pokud se vám naše nabídka líbí, stačí ji potvrdit a my se postaráme o zbytek. Vaši objednávku rychle zpracujeme a odešleme na vámi určenou adresu. Důsledně dbáme na to, aby produkty dorazily včas a v perfektním stavu, abyste mohli začít s montáží co nejdříve.',
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
