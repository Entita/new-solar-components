import Link from 'next/link'
import React from 'react'
import { ConditionsWrapperStyled } from './Conditions.style'

export default function Conditions() {
  return (
    <ConditionsWrapperStyled>
      <h1>Podmínky používání a zpracování osobních údajů</h1>

      <h2>1. Úvod</h2>
      <p>Tyto podmínky upravují způsob, jakým společnost <strong>Solar Components s.r.o.</strong>, se sídlem Češkova 889, Zelené Předměstí, 530 02 Pardubice, IČO: 194 13 190, DIČ: CZ 194 13 190 (dále jen „společnost“), zpracovává osobní údaje svých klientů a zájemců o produkty a služby. Vstupem na naše webové stránky (<a href="https://www.solar-components.cz" target="_blank">www.solar-components.cz</a>) a odesláním poptávky souhlasíte s těmito podmínkami.</p>

      <h2>2. Shromažďované osobní údaje</h2>
      <p>V rámci poskytování našich služeb zpracováváme následující osobní údaje:</p>
      <ul>
        <li>Jméno a příjmení</li>
        <li>Název firmy</li>
        <li>Kontaktní údaje (e-mail, telefon)</li>
        <li>Fakturační údaje (adresa, IČO, DIČ)</li>
        <li>Detaily o poptávaných produktech a službách</li>
      </ul>
      <p>Tyto údaje jsou nezbytné pro zpracování vaší poptávky, vytvoření nabídky a následnou komunikaci ohledně vašich objednávek.</p>

      <h2>3. Účel zpracování osobních údajů</h2>
      <p>Osobní údaje zpracováváme za účelem:</p>
      <ul>
          <li>Zpracování a vyřízení vaší poptávky</li>
          <li>Vytvoření nabídky na míru na základě vašich potřeb</li>
          <li>Komunikace ohledně vašich objednávek a smluvních vztahů</li>
          <li>Zasílání obchodních sdělení (novinky, speciální nabídky apod.), pokud k tomu udělíte souhlas</li>
      </ul>

      <h2>4. Zasílání obchodních sdělení</h2>
      <p>Na základě vašeho souhlasu vám můžeme zasílat obchodní sdělení týkající se našich produktů a služeb prostřednictvím e-mailu. Tento souhlas můžete kdykoliv odvolat zasláním e-mailu na adresu <a href="mailto:info@solar-components.cz">info@solar-components.cz</a> nebo prostřednictvím odkazu pro odhlášení, který je součástí každé zaslané zprávy.</p>

      <h2>5. Sdílení osobních údajů</h2>
      <p>Vaše osobní údaje neposkytujeme třetím stranám, s výjimkou zpracovatelů, kteří nám pomáhají s provozem webových stránek, účetnictvím nebo doručováním zásilek. Tito zpracovatelé jsou vždy vázáni povinností mlčenlivosti a smí údaje zpracovávat pouze v souladu s našimi pokyny a příslušnými právními předpisy.</p>

      <h2>6. Práva subjektů údajů</h2>
      <p>V souladu s platnými právními předpisy máte následující práva:</p>
      <ul>
        <li>Právo na přístup k osobním údajům</li>
        <li>Právo na opravu nebo výmaz osobních údajů</li>
        <li>Právo na omezení zpracování</li>
        <li>Právo na přenositelnost údajů</li>
        <li>Právo vznést námitku proti zpracování</li>
        <li>Právo kdykoliv odvolat souhlas se zpracováním osobních údajů</li>
      </ul>
      <p>Pokud chcete uplatnit některé z těchto práv, kontaktujte nás prosím na e-mailové adrese <Link href="mailto:info@solar-components.cz">info@solar-components.cz</Link>.</p>

      <h2>7. Uchovávání osobních údajů</h2>
      <p>Vaše osobní údaje uchováváme po dobu nezbytnou pro splnění účelů, pro které byly shromážděny, nebo po dobu stanovenou zákony.</p>

      <h2>8. Závěr</h2>
      <p>Používáním našich služeb potvrzujete, že jste se seznámili s těmito podmínkami a souhlasíte s nimi. Tyto podmínky mohou být příležitostně aktualizovány, proto doporučujeme pravidelně kontrolovat naše webové stránky.</p>

      <h3>Kontaktní údaje správce osobních údajů:</h3>
      <div>
        <span>
          <strong>Název společnosti:</strong> Solar Components s.r.o.
        </span>
        <span>
          <strong>Adresa:</strong> Češkova 889, Zelené Předměstí, 530 02, Pardubice, Česká republika
        </span>
        <span>
          <strong>E-mail:</strong> <Link href="mailto:info@solar-components.cz">info@solar-components.cz</Link>
        </span>
        <span>
          <strong>Telefon:</strong> +420 732 433 877
        </span>
        <span>
          <strong>Web:</strong> <Link href="https://www.solar-components.cz" target="_blank">www.solar-components.cz</Link>
        </span>
      </div>
    </ConditionsWrapperStyled>
  )
}
