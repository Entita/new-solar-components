"use client"
import React, { useEffect } from 'react'
import ReactPixel from 'react-facebook-pixel'

export default function FacebookPixelProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID || ''
    ReactPixel.init(pixelId)
  }, [])

  return children
}
