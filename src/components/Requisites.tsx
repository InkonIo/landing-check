"use client"

import { useTranslation } from '@/lib/i18n/LanguageContext'

const Requisites = () => {
  const { t } = useTranslation()

  const fields = [
    { label: t.requisites.beneficiary, value: 'TOO "Personabest.com"' },
    { label: t.requisites.bin, value: '240540012674' },
    { label: t.requisites.account, value: 'KZ238562203137866534' },
    { label: t.requisites.bank, value: 'АО Банк ЦентрКредит' },
    { label: t.requisites.bik, value: 'KCJBKZKX' },
    { label: t.requisites.kbe, value: '17' },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">{t.requisites.title}</h1>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-4 text-gray-600">
            {fields.map(({ label, value }) => (
              <p key={label}>
                <strong>{label}:</strong> {value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Requisites