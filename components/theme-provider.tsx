"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    const handleThemeChange = () => {
      document.documentElement.classList.add("theme-transition")

      setTimeout(() => {
        document.documentElement.classList.remove("theme-transition")
      }, 500)
    }

    window.addEventListener("themechange", handleThemeChange)

    return () => {
      window.removeEventListener("themechange", handleThemeChange)
    }
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

