"use client"

import React from 'react'
import { MantineProvider } from '@mantine/core'
import { useAppSelector } from '@/lib/hooks/hooks'

export default function MantineLocalProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(state => state.darkMode.value)

  return (
    <MantineProvider forceColorScheme={theme ?? undefined}>
      {children}
    </MantineProvider>
  )
}
