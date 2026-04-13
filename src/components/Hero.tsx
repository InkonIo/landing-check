"use client"

import { useTranslation } from '@/lib/i18n/LanguageContext'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-8 tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light mb-8">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#" className="flex items-center px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">{t.hero.downloadIn}</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="flex items-center px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors">
              <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302-2.302 5.642 3.302a.99.99 0 0 1 0 1.716l-5.642 3.302-2.302-2.302 3.372-1.856-3.372-1.86zm-3.516 3.516L6.203 12l4.78-4.223 1.972 1.972-2.809 2.251 2.809 2.251-1.972 1.972z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">{t.hero.availableIn}</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero