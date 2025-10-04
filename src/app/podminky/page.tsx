import App from "@/components/ConditionsPage/App";
import { defaultMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Components - Podminky",
  ...defaultMetadata,
}

export default function Inquiry() {
  return <App />
}
