import App from "@/components/ContactPage/App";
import { defaultMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Components - Kontakt",
  ...defaultMetadata,
}

export default function Contact() {
  return <App />
}
