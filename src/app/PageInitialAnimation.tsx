'use client'
import { useAppDispatch } from "@/lib/hooks/hooks";
import { setExcelPrices } from "@/lib/slices/excelPricesSlice";
import { refreshCart } from "@/lib/slices/inquiryCartSlice";
import { ExcelPricesType } from "@/types/Excel";
import { motion } from "framer-motion";
import React from "react";

export default function PageInitialAnimation({ children, excelPrices }: { children: React.ReactNode, excelPrices: ExcelPricesType }) {
  const dispatch = useAppDispatch()
  dispatch(setExcelPrices(excelPrices))
  dispatch(refreshCart(excelPrices))

  return (
    <motion.div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', rowGap: '25vh', padding: 'calc(15vh + 60px) 10vw 2.5vh 10vw' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
