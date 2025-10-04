import App from "@/components/PruductsPage/App";
import { defaultMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Components - Produkty",
  ...defaultMetadata,
}

export default function Products() {
  return <App />
}
