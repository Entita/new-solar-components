import React from 'react'
import { ProductsWrapperStyled } from './Products.style'
import Product from './Product'

export const products = [
  {
    id: 'matice',
    image_url: 'img/example.png',
    description: 'Slouží k upevnění solárního panelu na hlinikový montážní profil.',
    full_description: 'Matice M8 je ideální volbou pro průmyslové i stavební aplikace. S jejím standardizovaným závitem o průměru 8 mm poskytuje vysokou pevnost a dlouhou životnost při zajištění pevných spojů. Je vyrobena z prémiové nerezové oceli, což zaručuje vynikající odolnost vůči korozi a mechanickému opotřebení, což je zásadní zejména v náročných prostředích.',
    attributes: [
      { key: 'DIN', value: '999' },
      { key: 'Rozměry', value: 'Vnější průměr 13 mm, výška 6,5 mm' },
      { key: 'Materiál', value: 'Nerezová ocel A2 pro vynikající ochranu proti korozi' },
      { key: 'Pevnost v tahu', value: 'Až 800 MPa' },
      { key: 'Závit', value: 'M8 s jemným stoupáním pro snadné a bezpečné utažení' },
      { key: 'Aplikace', value: 'Lze použít ve stavebnictví, automobilovém průmyslu a pro mechanické opravy' },
    ],
    variants: [
      { name : 'Matice M8 "14"', price: 100 },
      { name : 'Matice M8 "12"', price: 300 },
    ]
  },
  {
    id: 'matice1',
    image_url: 'img/example.png',
    description: 'Slouží k upevnění solárního panelu na hlinikový montážní profil.',
    full_description: 'Matice M8 je ideální volbou pro průmyslové i stavební aplikace. S jejím standardizovaným závitem o průměru 8 mm poskytuje vysokou pevnost a dlouhou životnost při zajištění pevných spojů. Je vyrobena z prémiové nerezové oceli, což zaručuje vynikající odolnost vůči korozi a mechanickému opotřebení, což je zásadní zejména v náročných prostředích.',
    attributes: [
      { key: 'DIN', value: '999' },
      { key: 'Rozměry', value: 'Vnější průměr 13 mm, výška 6,5 mm' },
      { key: 'Materiál', value: 'Nerezová ocel A2 pro vynikající ochranu proti korozi' },
      { key: 'Pevnost v tahu', value: 'Až 800 MPa' },
      { key: 'Závit', value: 'M8 s jemným stoupáním pro snadné a bezpečné utažení' },
      { key: 'Aplikace', value: 'Lze použít ve stavebnictví, automobilovém průmyslu a pro mechanické opravy' },
    ],
    variants: [{ name : 'Matice M8 "14"', price: 100 }]
  },
  {
    id: 'matice2',
    image_url: 'img/example.png',
    description: 'Slouží k upevnění solárního panelu na hlinikový montážní profil.',
    full_description: 'Matice M8 je ideální volbou pro průmyslové i stavební aplikace. S jejím standardizovaným závitem o průměru 8 mm poskytuje vysokou pevnost a dlouhou životnost při zajištění pevných spojů. Je vyrobena z prémiové nerezové oceli, což zaručuje vynikající odolnost vůči korozi a mechanickému opotřebení, což je zásadní zejména v náročných prostředích.',
    attributes: [
      { key: 'DIN', value: '999' },
      { key: 'Rozměry', value: 'Vnější průměr 13 mm, výška 6,5 mm' },
      { key: 'Materiál', value: 'Nerezová ocel A2 pro vynikající ochranu proti korozi' },
      { key: 'Pevnost v tahu', value: 'Až 800 MPa' },
      { key: 'Závit', value: 'M8 s jemným stoupáním pro snadné a bezpečné utažení' },
      { key: 'Aplikace', value: 'Lze použít ve stavebnictví, automobilovém průmyslu a pro mechanické opravy' },
    ],
    variants: [{ name : 'Matice M8 "14"', price: 100 }]
  },
  {
    id: 'matice3',
    image_url: 'img/example.png',
    description: 'Slouží k upevnění solárního panelu na hlinikový montážní profil.',
    full_description: 'Matice M8 je ideální volbou pro průmyslové i stavební aplikace. S jejím standardizovaným závitem o průměru 8 mm poskytuje vysokou pevnost a dlouhou životnost při zajištění pevných spojů. Je vyrobena z prémiové nerezové oceli, což zaručuje vynikající odolnost vůči korozi a mechanickému opotřebení, což je zásadní zejména v náročných prostředích.',
    attributes: [
      { key: 'DIN', value: '999' },
      { key: 'Rozměry', value: 'Vnější průměr 13 mm, výška 6,5 mm' },
      { key: 'Materiál', value: 'Nerezová ocel A2 pro vynikající ochranu proti korozi' },
      { key: 'Pevnost v tahu', value: 'Až 800 MPa' },
      { key: 'Závit', value: 'M8 s jemným stoupáním pro snadné a bezpečné utažení' },
      { key: 'Aplikace', value: 'Lze použít ve stavebnictví, automobilovém průmyslu a pro mechanické opravy' },
    ],
    variants: [{ name : 'Matice M8 "14"', price: 100 }]
  },
  {
    id: 'matice4',
    image_url: 'img/example.png',
    description: 'Slouží k upevnění solárního panelu na hlinikový montážní profil.',
    full_description: 'Matice M8 je ideální volbou pro průmyslové i stavební aplikace. S jejím standardizovaným závitem o průměru 8 mm poskytuje vysokou pevnost a dlouhou životnost při zajištění pevných spojů. Je vyrobena z prémiové nerezové oceli, což zaručuje vynikající odolnost vůči korozi a mechanickému opotřebení, což je zásadní zejména v náročných prostředích.',
    attributes: [
      { key: 'DIN', value: '999' },
      { key: 'Rozměry', value: 'Vnější průměr 13 mm, výška 6,5 mm' },
      { key: 'Materiál', value: 'Nerezová ocel A2 pro vynikající ochranu proti korozi' },
      { key: 'Pevnost v tahu', value: 'Až 800 MPa' },
      { key: 'Závit', value: 'M8 s jemným stoupáním pro snadné a bezpečné utažení' },
      { key: 'Aplikace', value: 'Lze použít ve stavebnictví, automobilovém průmyslu a pro mechanické opravy' },
    ],
    variants: [{ name : 'Matice M8 "14"', price: 100 }]
  },
]

export default function Products() {
  return (
    <ProductsWrapperStyled>
      {products.map((product: any, index: number) => (
        <Product
          key={index}
          product={product}
        />
      ))}
    </ProductsWrapperStyled>
  )
}
