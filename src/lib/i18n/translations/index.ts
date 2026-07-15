import type { Locale, TranslationSchema } from './types'
import { ru } from './ru'
import { kz } from './kz'
import { en } from './en'

export type { Locale, TranslationSchema }

export const translations: Record<Locale, TranslationSchema> = {
  ru,
  kz,
  en,
}