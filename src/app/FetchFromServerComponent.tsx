import React from 'react'
import axios from 'axios'
import * as XLSX from 'xlsx'
import { ExcelPricesType } from '@/types/Excel'
import ReduxProvider from "./ReduxProvider"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import PageTransition from "./PageTransition"
import PageInitialAnimation from "./PageInitialAnimation"

export const fetchCache = 'force-no-store'
export const revalidate = 0

export const getExcelData = async () => {
  try {
    // const axiosResponse = await axios({
    //   url: 'https://docs.google.com/spreadsheets/d/16VqRzndFajs7D25tLbZYy-eNHpl7_KBersXdkF4LFEE/edit?gid=1650439636#gid=1650439636',
    //   responseType: "arraybuffer",
    // })
    const fetchRequest = await fetch('https://docs.google.com/spreadsheets/d/16VqRzndFajs7D25tLbZYy-eNHpl7_KBersXdkF4LFEE/edit?gid=1650439636#gid=1650439636', { cache: 'no-store' })
    const fetchResponse = await fetchRequest.arrayBuffer()
    const workbook = XLSX.read(fetchResponse)
    const worksheets = workbook.SheetNames.map((sheetName: string) => ({
      sheetName,
      data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]),
    }))
    const data = worksheets[0].data
    const productDataWithoutHeader = data.splice(2, data.length - 1)
    const productsData: ExcelPricesType = {}
    productDataWithoutHeader.forEach((productData: any) => {
      if (productData.A) {
        productsData[productData.C] = parseFloat(productData.D.replaceAll(',', '.'))
      }
    })
    return JSON.parse(JSON.stringify(productsData))
  } catch {
    return {}
  }
}

export default async function FetchFromServerComponent({ children }: { children: React.ReactNode }) {
  const excelPrices = await getExcelData()

  return (
    <ReduxProvider>
      <PageInitialAnimation excelPrices={excelPrices}>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </PageInitialAnimation>
    </ReduxProvider>
  )
}
