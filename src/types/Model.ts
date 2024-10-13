import { ProductState } from "./Products";

export type ProductModel = ProductState['model']

export interface ProductAdjustments {
  [key: ProductModel]: {
    scale: number,
    position?: [number, number, number],
  }
}