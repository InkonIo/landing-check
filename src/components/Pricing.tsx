"use client"

import { useTranslation } from '@/lib/i18n/LanguageContext'

const additionalIcons = [
  <svg key="0" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="1" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="2" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="3" className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>,
]

const Pricing = () => {
  const { t } = useTranslation()

  return (
    <section id="status-features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-4 text-gray-900">
          {t.pricing.title}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t.pricing.subtitle}
        </p>

        <div className="overflow-x-auto mb-24">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.pricing.table.status}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.pricing.table.price}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.pricing.table.evaluations}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t.pricing.table.rating}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {t.pricing.statuses.map((status, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{status.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{status.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{status.evaluations}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{status.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.pricing.additionalInfo.map((info, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-10 border border-gray-200 flex flex-col items-start">
              <div className="w-14 h-14 flex items-center justify-center mb-8 bg-white rounded-full shadow-sm">
                {additionalIcons[index]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {info.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing