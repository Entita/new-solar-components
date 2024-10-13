export interface ProductState {
  id: string,
  image_url: string,
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
  pdf: string,
}