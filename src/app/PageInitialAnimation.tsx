'use client'
import { motion } from "framer-motion";

export default function PageInitialAnimation({ children }: { children: React.ReactNode }) {
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
