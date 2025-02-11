"use client"

import { useStore } from "../store/useStore"
import { useEffect } from "react"
import type React from "react" // Added import for React

export function Providers({ children }: { children: React.ReactNode }) {
  const { theme } = useStore()

  useEffect(() => {
    document.body.classList.remove("light", "dark")
    document.body.classList.add(theme)
  }, [theme])

  return <>{children}</>
}

