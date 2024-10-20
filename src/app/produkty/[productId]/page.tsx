import App from "@/components/ProductPage/App";
import React from "react";

export const capitalizeString = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

export default function Products({ params: { productId } }: { params: { productId: string } }) {
  return (
    <React.Fragment>
      <title>{`Solar components - ${capitalizeString(productId)}`}</title>
      <App productId={productId} />
    </React.Fragment>
  )
}
