import React from 'react'
import { ProductsWrapperStyled } from './Products.style'
import Product from './Product'

export const products = [
  {
    id: 'matice',
    image_url: 'img/example.png',
    variants: [
      { name : 'Matice M8 "14"', price: 100 },
      { name : 'Matice M8 "12"', price: 300 },
    ]
  },
  {
    id: 'matice1',
    image_url: 'img/example.png',
    variants: [{ name : 'Matice M8 "14"', price: 100 }]
  },
  {
    id: 'matice2',
    image_url: 'img/example.png',
    variants: [{ name : 'Matice M8 "14"', price: 100 }]
  },
  {
    id: 'matice3',
    image_url: 'img/example.png',
    variants: [{ name : 'Matice M8 "14"', price: 100 }]
  },
  {
    id: 'matice4',
    image_url: 'img/example.png',
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
