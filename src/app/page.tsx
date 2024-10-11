// import axios from 'axios'
// import * as XLSX from 'xlsx'
import App from "@/components/Homepage/App";

// export const getExcelData = async () => {
//   try {
//     const axiosResponse = await axios({ url: 'https://docs.google.com/spreadsheets/d/16VqRzndFajs7D25tLbZYy-eNHpl7_KBersXdkF4LFEE/edit?gid=1650439636#gid=1650439636', responseType: "arraybuffer" });
//     const workbook = XLSX.read(axiosResponse.data);
//     const worksheets = workbook.SheetNames.map((sheetName: string) => ({
//       sheetName,
//       data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
//     }));
//     const data = worksheets[0].data
//     const productDataWithoutHeader = data.splice(2, data.length - 1)
//     const productsData = productDataWithoutHeader.filter((productData: any) => productData.A)

//     return JSON.parse(JSON.stringify(productsData))
//   } catch {
//     return {}
//   }
// };

export default async function Home() {
  const excelData = {}

  return <App excelData={excelData} />
}
