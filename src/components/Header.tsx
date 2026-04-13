"use client"

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../lib/i18n/LanguageContext'
import { Locale } from '../lib/i18n/translations'

const LOCALES: { value: Locale; label: string }[] = [
  { value: 'ru', label: 'RU' },
  { value: 'kz', label: 'KZ' },
  { value: 'en', label: 'EN' },
]

const Header = () => {
  const { locale, setLocale, t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navigation = [
    { name: t.nav.platformDevelopment, href: '/#platform-development' },
    { name: t.nav.statusFeatures, href: '/#status-features' },
    { name: t.nav.ratingSystem, href: '/#rating-system' },
    { name: t.nav.contacts, href: '/#contacts' },
  ]

  const legalLinks = [
    { name: t.legal.privacy, href: '/privacy' },
    { name: t.legal.agreement, href: '/agreement' },
  ]

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold text-gray-900 hover:text-gray-600 transition">
              Persona
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition font-medium"
              >
                {item.name}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
              >
                {locale.toUpperCase()}
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-1 w-20 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50">
                  {LOCALES.map(({ value, label }) => (
                    <button
                      key={value}
                      onClick={() => { setLocale(value); setIsLangOpen(false) }}
                      className={`w-full text-left px-3 py-1.5 text-sm font-medium transition
                        ${locale === value
                          ? 'text-gray-900 bg-gray-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile: lang switcher + burger */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Inline lang buttons on mobile */}
            <div className="flex gap-1">
              {LOCALES.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setLocale(value)}
                  className={`px-2 py-1 rounded text-xs font-semibold transition
                    ${locale === value
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">{t.header.openMenu}</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="px-3 space-y-1">
                {legalLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header