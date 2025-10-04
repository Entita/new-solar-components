import App from "@/components/ThankYouPage/App";
import { defaultMetadata } from "@/utils/metadata";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Solar Components - Dekujeme",
  ...defaultMetadata,
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div>Načítání...</div>}>
      <App />
    </Suspense>
  )
}
