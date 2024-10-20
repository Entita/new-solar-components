import App from "@/components/ProductPage/App";
import React from "react";

export default function Products({ params: { productId } }: { params: { productId: string } }) {
  return <App productId={productId} />
}
