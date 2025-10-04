'use client'
import { useAppDispatch } from "@/lib/hooks/hooks";
import { refreshCart } from "@/lib/slices/inquiryCartSlice";
import { setPrices } from "@/lib/slices/pricesSlice";
import { PricesType } from "@/types/Prices";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

export default function PageInitialAnimation({ children, pricesList }: { children: React.ReactNode, pricesList: PricesType[] }) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPrices(pricesList));
    dispatch(refreshCart(pricesList));
  }, [dispatch, pricesList]);

  return (
    <motion.div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', rowGap: '25vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
