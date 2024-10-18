export type ProductsState = ProductState[]

export interface ProductState {
  id: string,
  model: string,
  description: string,
  full_description: string,
  attributes: ProductAttributeState[],
  variants: ProductVariantState[],
}

export interface ProductAttributeState {
  key: string,
  value: string,
}

export interface ProductVariantState {
  name: string,
  price: number,
}