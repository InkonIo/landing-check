"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Locale, TranslationSchema, translations } from './translations'

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationSchema
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Всегда одинаковый дефолт на сервере и на клиенте при первом рендере
  const [locale, setLocaleState] = useState<Locale>('ru')

  // Подтягиваем сохранённый locale уже ПОСЛЕ гидратации
  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null
    if (stored && stored !== locale) {
      setLocaleState(stored)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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