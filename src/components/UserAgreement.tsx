"use client"

import { useTranslation } from '@/lib/i18n/LanguageContext'
import { userAgreementTranslations } from '@/lib/i18n/legal/userAgreement'
import { LegalSection } from '@/lib/i18n/legal/privacyPolicy'

const SubsectionBlock = ({ sub }: { sub: NonNullable<LegalSection['subsections']>[number] }) => (
  <div className="pl-6 border-l-4 border-gray-200 hover:border-blue-500 transition-colors duration-200">
    {sub.heading && (
      <h3 className="text-xl font-medium mb-4 text-gray-800">{sub.heading}</h3>
    )}
    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
      {sub.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      {sub.list && (
        sub.listStyle === 'disc'
          ? <ul className="list-disc pl-6 space-y-2">{sub.list.map((item, i) => <li key={i}>{item}</li>)}</ul>
          : <ol className="list-decimal pl-6 space-y-4">{sub.list.map((item, i) => <li key={i}>{item}</li>)}</ol>
      )}
    </div>
  </div>
)

const UserAgreement = () => {
  const { locale } = useTranslation()
  const t = userAgreementTranslations[locale]

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center break-words">
          {t.title}
        </h1>

        <div className="space-y-16">
          {/* Intro */}
          <div className="prose max-w-none text-gray-700 bg-white rounded-xl shadow-sm p-4 sm:p-8">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900">{t.intro.heading}</h2>
            <p className="text-lg leading-relaxed">{t.intro.text}</p>
          </div>

          {/* Main sections */}
          <div className="space-y-16 bg-white rounded-xl shadow-sm p-8">
            {t.sections.map((section) => (
              <div key={section.id} className="border-t first:border-t-0 pt-8">
                <h2 className="text-2xl font-semibold mb-8 text-gray-900">{section.heading}</h2>
                {section.paragraphs && section.paragraphs.length > 0 && (
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-8">
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

export default UserAgreement