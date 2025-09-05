"use client"
import React, { useEffect } from 'react'

export default function FacebookPixelProvider({ children }: { children: React.ReactNode }) {
  const initPixel = async () => {
    if (typeof window !== 'undefined') {
      const ReactPixel = (await import('react-facebook-pixel')).default;
      const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID || ''
      ReactPixel.init(pixelId)
    }
  }

  useEffect(() => {
    initPixel()
  }, [])

  return children
}
