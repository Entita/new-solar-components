import App from "@/components/BasketPage/App";
import { defaultMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Components - Košík",
  ...defaultMetadata,
}

export default function Basket() {
  return <App />
}
