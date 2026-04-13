"use client"

import { useTranslation } from '@/lib/i18n/LanguageContext'
import { privacyPolicyTranslations } from '@/lib/i18n/legal/privacyPolicy'
import { LegalSection } from '@/lib/i18n/legal/privacyPolicy'

const SubsectionBlock = ({ sub }: { sub: NonNullable<LegalSection['subsections']>[number] }) => (
  <div className="pl-6 border-l-4 border-gray-200 hover:border-blue-500 transition-colors duration-200">
    {sub.heading && (
      <h3 className="text-xl font-medium mb-4 text-gray-800">{sub.heading}</h3>
    )}
    <div className="prose max-w-none text-gray-600 leading-relaxed space-y-4">
      {sub.subheadings?.map((sh, i) => (
        <div key={i}>
          <h4 className="text-lg font-medium mb-2">{sh.title}</h4>
          <p>{sh.text}</p>
        </div>
      ))}
      {sub.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      {sub.list && (
        sub.listStyle === 'disc'
          ? <ul className="list-disc pl-6 space-y-2">{sub.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
          : <ol className="list-decimal pl-6 space-y-2">{sub.list.map((item, i) => <li key={i}>{item}</li>)}</ol>
      )}
    </div>
  </div>
)

const PrivacyPolicy = () => {
  const { locale } = useTranslation()
  const t = privacyPolicyTranslations[locale]

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center break-words">
          {t.title}
        </h1>

        <div className="space-y-16">
          {/* Intro */}
          <div className="prose max-w-none text-gray-600 bg-white rounded-xl shadow-sm p-4 sm:p-8">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">{t.intro.heading}</h2>
            {t.intro.paragraphs.map((p, i) => (
              <p key={i} className={`text-lg leading-relaxed ${i < t.intro.paragraphs.length - 1 ? 'mb-4' : 'mb-0'}`}>{p}</p>
            ))}
          </div>

          {/* Main sections */}
          <div className="space-y-16 bg-white rounded-xl shadow-sm p-8">
            {/* Services */}
            <div className="first:border-t-0 border-t border-gray-100 pt-8">
              <h2 className="text-2xl font-semibold mb-8 text-gray-900">{t.services.heading}</h2>
              <div className="prose max-w-none text-gray-600 space-y-4 leading-relaxed">
                {t.services.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            {/* Dynamic sections */}
            {t.sections.map((section) => (
              <div key={section.id} className="border-t pt-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">{section.heading}</h2>
                {section.paragraphs && section.paragraphs.length > 0 && (
                  <div className="prose max-w-none text-gray-600 leading-relaxed mb-8">
                    {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                )}
                {section.subsections && (
                  <div className="space-y-8">
                    {section.subsections.map((sub) => (
                      <SubsectionBlock key={sub.id} sub={sub} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy