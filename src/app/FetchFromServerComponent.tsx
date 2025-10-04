import React from 'react'
import ReduxProvider from "./ReduxProvider"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import PageTransition from "./PageTransition"
import PageInitialAnimation from "./PageInitialAnimation"
import FacebookPixelProvider from './FacebookPixel'
import MantineLocalProvider from './MantineLocalProvider'
import { stripe } from '@/utils/stripe'

export const fetchCache = 'force-no-store'
export const revalidate = 0

const fetchPricesList = async () => {
  const productPrices = await stripe.prices.list({ limit: 100 });
  const activePrices = productPrices.data.filter(price => price.active);
  return activePrices || [];
};

export default async function FetchFromServerComponent({ children }: { children: React.ReactNode }) {
  const pricesList = await fetchPricesList()

  return (
    <ReduxProvider>
      <PageInitialAnimation pricesList={pricesList}>
        <FacebookPixelProvider>
          <MantineLocalProvider>
              <Header />
              <PageTransition>
                {children}
              </PageTransition>
              <Footer />
          </MantineLocalProvider>
        </FacebookPixelProvider>
      </PageInitialAnimation>
    </ReduxProvider>
  )
}
