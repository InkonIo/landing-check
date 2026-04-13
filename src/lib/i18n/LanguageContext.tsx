"use client"

import { createContext, useContext, useState, ReactNode } from 'react'
import { Locale, TranslationSchema, translations } from './translations'

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationSchema
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('locale') as Locale) || 'ru'
    }
    return 'ru'
  })

  const setLocale = (l: Locale) => {
    localStorage.setItem('locale', l)
    setLocaleState(l)
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}