import App from "@/components/ProductPage/App";
import { getExcelData } from "../page";

export default async function Products({ params: { productId } }: { params: { productId: string } }) {
  const excelPrices = await getExcelData()

  return <App productId={productId} excelPrices={excelPrices} />
}
