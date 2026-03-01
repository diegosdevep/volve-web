import { useTranslation } from 'react-i18next'

const FEATURES = [
  { icon: '⏱️' },
  { icon: '🆘' },
  { icon: '🔐' },
  { icon: '📍' },
  { icon: '📲' },
  { icon: '🔒' },
]

export default function Home() {
  const { t } = useTranslation()
  const features = t('features.items', { returnObjects: true }) as { title: string; description: string }[]
  const steps = t('howItWorks.steps', { returnObjects: true }) as { step: string; title: string; description: string }[]

  return (
    <main>
      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16" style={{ background: 'linear-gradient(160deg, #f5f3ff 0%, #ffffff 60%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: '#ede9fe', color: '#7C6CFF' }}>
            {t('hero.badge')}
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6" style={{ whiteSpace: 'pre-line' }}>
            {t('hero.title')}
          </h1>

          <p className="text-xl text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#7C6CFF' }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              {t('hero.downloadIos')}
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3.5 rounded-2xl text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 transition-colors"
            >
              {t('hero.learnMore')} →
            </a>
          </div>

          {/* Phone mockup placeholder */}
          <div className="mt-20 mx-auto w-64 h-[500px] rounded-[40px] shadow-2xl flex items-center justify-center" style={{ background: 'linear-gradient(160deg, #7C6CFF, #B8AEFF)' }}>
            <div className="text-white text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <div className="text-2xl font-bold">Volvé</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
            <p className="text-lg text-gray-500">{t('features.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="text-3xl mb-4">{FEATURES[i]?.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24 px-6" style={{ backgroundColor: '#f5f3ff' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('howItWorks.title')}</h2>
            <p className="text-lg text-gray-500">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ backgroundColor: '#7C6CFF' }}>
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download ── */}
      <section id="download" className="py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-6">🛡️</div>
          <h2 className="text-4xl font-bold text-white mb-4">{t('download.title')}</h2>
          <p className="text-white/80 text-lg mb-10">{t('download.subtitle')}</p>

          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/20 border border-white/30 text-white font-semibold text-lg cursor-default">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            {t('download.comingSoon')}
          </div>
        </div>
      </section>
    </main>
  )
}
