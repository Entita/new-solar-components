"use client";
import { loadStripe } from "@stripe/stripe-js";
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from "@stripe/react-stripe-js";
import { useCallback } from "react";
import { Drawer, Portal } from "@mantine/core";
import { useAppSelector } from "@/lib/hooks/hooks";
import { InquiryCartState } from "@/types/InquiryCart";
import axios from "axios";
import { Customer, DeliveryList } from "@/types/Basket";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type EmbeddedStripeCheckoutProps = {
  delivery: DeliveryList | undefined;
  customer: Customer | undefined;
  opened: boolean;
  close: () => void;
};

export default function EmbeddedStripeCheckout({ opened, close, delivery, customer }: EmbeddedStripeCheckoutProps) {
  const inquiryCartProducts = useAppSelector(state => state.inquiryCart.products) as InquiryCartState['products']

  const fetchClientSecret = useCallback(() => {
    return axios.post('/api/embedded-checkout', { products: inquiryCartProducts, shippingId: delivery?.id, customer })
      .then((res) => res.data.client_secret);
  }, [inquiryCartProducts, delivery, customer]);

  const options = { fetchClientSecret };

  return (
    <Portal>
      <Drawer opened={opened} onClose={close} title="Platební brána" position='right' padding="lg" size="lg">
        {opened && (
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </Drawer>
    </Portal>
  );
}
