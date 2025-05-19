"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { fr } from "@/translations/fr"
import { ja } from "@/translations/ja"

type Language = "fr" | "ja"
type Translations = typeof fr

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof fr) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")
  const [translations, setTranslations] = useState<Translations>(fr)

  useEffect(() => {
    setTranslations(language === "fr" ? fr : ja)
    document.documentElement.lang = language
  }, [language])

  const t = (key: keyof typeof fr) => {
    return translations[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

