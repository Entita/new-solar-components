export interface PricesType {
  active: boolean;
  id: string;
  unit_amount: number | null;
}

export interface PricesSliceType {
  prices: PricesType[] | null;
}