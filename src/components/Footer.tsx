"use client"

import { useTranslation } from '@/lib/i18n/LanguageContext'

const Footer = () => {
  const { t } = useTranslation()

  const mainLinks = [
    { name: t.nav.platformDevelopment, href: '#platform-development' },
    { name: t.nav.statusFeatures, href: '#status-features' },
    { name: t.nav.ratingSystem, href: '#rating-system' },
    { name: t.nav.contacts, href: '#contacts' },
  ]

  const legalLinks = [
    { name: t.legal.privacy, href: '/privacy' },
    { name: t.legal.agreement, href: '/agreement' },
    { name: t.legal.requisites, href: '/requisites' },
  ]

  return (
    <footer id="contacts" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">Persona</h3>
            <p className="text-gray-400">{t.footer.description}</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              {mainLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">{t.footer.documents}</h3>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">{t.footer.contacts}</h3>
            <p className="text-gray-400 mb-2">Email: tsoy.fc@yandex.kz</p>
            <p className="text-gray-400">TOO &quot;Personabest&quot;</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Persona. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer