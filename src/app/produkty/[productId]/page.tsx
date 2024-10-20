import App from "@/components/ProductPage/App";

export default function Products({ params: { productId } }: { params: { productId: string } }) {
  return <App productId={productId} />
}
