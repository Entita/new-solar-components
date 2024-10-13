import { ProductState, ProductVariantState } from "./Products";

export interface InquiryCartState {
  products: InquiryProductState[]
}

export interface InquiryProductState extends ProductState {
  variants: InquiryProductVariantState[]
}

export interface InquiryProductVariantState extends ProductVariantState {
  amount: number
}
