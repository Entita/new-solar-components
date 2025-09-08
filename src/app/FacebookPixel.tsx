"use client"
import React, { useEffect } from 'react'

export default function FacebookPixelProvider({ children }: { children: React.ReactNode }) {
  const initPixel = async () => {
    if (typeof window !== 'undefined') {
      // Facebook Pixel
      const ReactPixel = (await import('react-facebook-pixel')).default;
      const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID || ''
      ReactPixel.init(pixelId)

      // Google Analytics
      const ReactGA = (await import('react-ga4')).default;
      const gaId = process.env.NEXT_PUBLIC_GA_ID || ''
      ReactGA.initialize(gaId)
    }
  }

  useEffect(() => {
    initPixel()
  }, [])

  return children
}
