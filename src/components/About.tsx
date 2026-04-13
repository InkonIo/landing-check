"use client"

import { useTranslation } from '@/lib/i18n/LanguageContext'

const About = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-indigo-900 text-center mb-12">
            {t.about.title}
          </h2>
          <div className="space-y-12">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                {t.about.mission.title}
              </h3>
              <p className="text-indigo-900/70 text-lg">
                {t.about.mission.text}
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
                {t.about.values.title}
              </h3>
              <p className="text-indigo-900/70 text-lg">
                {t.about.values.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About