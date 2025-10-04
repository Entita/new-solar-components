export enum DeliveryOption {
  DELIVERY = 'Doručení na adresu',
  PICKUP = 'Vyzvednutí na skladě'
}

export enum PaymentOption {
  CREDIT_CARD = 'Platba platební kartou',
  BANK_TRANSFER = 'Platba bankovním převodem',
}

export interface BasketDeliveryStep {
    delivery: DeliveryOption | '';
}

export interface DeliveryList {
  id: string;
  display_name: string;
  fixed_amount: {
    amount: number;
  };
  delivery_estimate: {
    minimum: { value: number };
    maximum: { value: number };
  }
}

export interface Customer {
  email: string;
  name: string;
  phone: string;
  address: {
      line1: string;
      city: string;
      postal_code: string;
      country: string;
  };
}

export interface BasketAddressStep {
    firstName: string;
    lastName: string;
    phone: number | '';
    city: string;
    zip: number | '';
    street: string;
    houseNumber: number | '';
    sameBillingAddress: boolean;
    billingFirstName?: string;
    billingLastName?: string;
    billingPhone?: number | '';
    billingZip?: number | '';
    billingCity?: string;
    billingStreet?: string;
    billingHouseNumber?: number | '';
}

export interface BasketPaymentStep {
  payment: PaymentOption | '';
}

export interface ValidatedBasketDeliveryStep {
    delivery: DeliveryOption;
}

export interface ValidatedBasketAddressStep {
    firstName: string;
    lastName: string;
    phone: number;
    city: string;
    zip: number;
    street: string;
    houseNumber: number;
    sameBillingAddress: boolean;
    billingFirstName?: string;
    billingLastName?: string;
    billingPhone?: number;
    billingZip?: number;
    billingCity?: string;
    billingStreet?: string;
    billingHouseNumber?: number;
}

export interface ValidatedBasketPaymentStep {
  payment: PaymentOption;
}

export type Step = "delivery" | "address" | "summary";

export enum Delivery {
  STANDARD = "standard",
  CARGO = "cargo",
  PICKUP = "pickup",
}
