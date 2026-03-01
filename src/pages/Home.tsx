import { useTranslation } from 'react-i18next'

// ── SVG Icons ────────────────────────────────────────────────────────────────

const IconClock = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)
const IconBolt = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
)
const IconShield = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
)
const IconMapPin = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
)
const IconBell = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
)
const IconLock = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
)
const IconApple = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const featureIcons = [<IconClock />, <IconBolt />, <IconShield />, <IconMapPin />, <IconBell />, <IconLock />]

const iconStyles = [
  { bg: '#EDE9FE', color: '#7C6CFF' },
  { bg: '#FEE2E2', color: '#EF4444' },
  { bg: '#FEF3C7', color: '#D97706' },
  { bg: '#DBEAFE', color: '#2563EB' },
  { bg: '#DCFCE7', color: '#16A34A' },
  { bg: '#F3E8FF', color: '#9333EA' },
]

// ── iPhone mockup ─────────────────────────────────────────────────────────────

function IPhoneMockup() {
  return (
    <div className="relative select-none" style={{ width: 252, height: 516 }}>

      {/* Glow under phone */}
      <div
        className="absolute"
        style={{
          inset: '20% 10%',
          background: 'radial-gradient(ellipse, rgba(124,108,255,0.3) 0%, transparent 70%)',
          filter: 'blur(32px)',
          transform: 'translateY(40px)',
          zIndex: 0,
        }}
      />

      {/* Phone frame */}
      <div
        className="absolute inset-0 rounded-[46px] overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #2d2d2d 0%, #181818 100%)',
          boxShadow:
            '0 50px 80px -20px rgba(0,0,0,0.4), 0 20px 40px -10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)',
          zIndex: 1,
        }}
      >
        {/* Screen */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: 8, left: 8, right: 8, bottom: 8,
            borderRadius: 40,
            background: 'linear-gradient(160deg, #0d0920 0%, #190e3d 50%, #0e1a40 100%)',
          }}
        >
          {/* Dynamic Island */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: 11, width: 92, height: 28, background: '#000', borderRadius: 20, zIndex: 10 }}
          />

          {/* Status bar */}
          <div
            className="absolute top-0 left-0 right-0 flex justify-between items-center px-6"
            style={{ paddingTop: 14, paddingBottom: 4, fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}
          >
            <span>9:41</span>
            <div className="flex items-center gap-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {/* Signal bars */}
              <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
                <rect x="0" y="7" width="3" height="5" rx="0.8" />
                <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.8" />
                <rect x="9" y="2" width="3" height="10" rx="0.8" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.8" opacity="0.35" />
              </svg>
              {/* Battery */}
              <svg width="25" height="12" viewBox="0 0 25 12">
                <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
                <rect x="22" y="3.5" width="2.5" height="5" rx="1" fill="rgba(255,255,255,0.3)"/>
                <rect x="2" y="2" width="15" height="8" rx="1.5" fill="rgba(255,255,255,0.7)"/>
              </svg>
            </div>
          </div>

          {/* App UI */}
          <div className="absolute inset-0 flex flex-col" style={{ paddingTop: 56 }}>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pb-3">
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Sesión activa
                </div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginTop: 2 }}>
                  Reunión con Diego
                </div>
              </div>
              <div
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
                style={{ background: 'rgba(34,197,94,0.15)' }}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontSize: 10, color: '#22C55E', fontWeight: 600 }}>En vivo</span>
              </div>
            </div>

            {/* Timer card */}
            <div className="px-4 mb-3">
              <div
                className="rounded-3xl flex flex-col items-center justify-center py-6"
                style={{ background: 'rgba(124,108,255,0.1)', border: '1px solid rgba(124,108,255,0.2)' }}
              >
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 500, marginBottom: 6 }}>
                  Tiempo restante
                </div>
                <div style={{ fontSize: 50, fontWeight: 700, color: '#fff', letterSpacing: '-2.5px', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                  47:23
                </div>
                <div style={{ fontSize: 10, color: 'rgba(184,174,255,0.5)', marginTop: 6 }}>
                  Se activa a las 22:30
                </div>
              </div>
            </div>

            {/* Location row */}
            <div className="px-4 mb-3">
              <div
                className="flex items-center gap-3 px-3 py-2.5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(37,99,235,0.2)' }}
                >
                  <svg width="14" height="14" fill="none" stroke="#3B82F6" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Última ubicación</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>San Martín 1234, BA</div>
                </div>
              </div>
            </div>

            <div className="flex-1" />

            {/* Disarm button */}
            <div className="px-4 pb-8">
              <div
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #7C6CFF 0%, #B8AEFF 100%)' }}
              >
                <svg width="15" height="15" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                Desactivar alarma
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute" style={{ left: -2.5, top: 104, width: 3, height: 30, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }} />
        <div className="absolute" style={{ left: -2.5, top: 142, width: 3, height: 56, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }} />
        <div className="absolute" style={{ left: -2.5, top: 206, width: 3, height: 56, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }} />
        <div className="absolute" style={{ right: -2.5, top: 134, width: 3, height: 72, background: '#3a3a3a', borderRadius: '0 3px 3px 0' }} />

        {/* Home indicator */}
        <div
          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: 100, height: 4, background: 'rgba(255,255,255,0.22)' }}
        />
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function Home() {
  const { t, i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')
  const features = t('features.items', { returnObjects: true }) as { title: string; description: string }[]
  const steps = t('howItWorks.steps', { returnObjects: true }) as { step: string; title: string; description: string }[]

  const trust = isEs
    ? ['Gratis para descargar', 'Solo para iPhone', 'Sin suscripción']
    : ['Free to download', 'iPhone only', 'No subscription']

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="min-h-screen flex items-center pt-16 px-6"
        style={{ background: 'linear-gradient(150deg, #f5f3ff 0%, #faf9ff 45%, #ffffff 100%)' }}
      >
        <div className="max-w-6xl mx-auto w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: copy */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8 text-sm font-semibold"
                style={{ background: '#EDE9FE', color: '#7C6CFF' }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                {t('hero.badge')}
              </div>

              {/* Heading */}
              <h1
                className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-none mb-6"
                style={{ letterSpacing: '-0.035em', whiteSpace: 'pre-line' }}
              >
                {t('hero.title')}
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                {t('hero.subtitle')}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#7C6CFF',
                    boxShadow: '0 4px 24px rgba(124,108,255,0.4)',
                  }}
                >
                  <IconApple />
                  {t('hero.downloadIos')}
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  {t('hero.learnMore')}
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-5">
                {trust.map((label, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm text-gray-500">
                    <span className="font-bold" style={{ color: '#22C55E' }}>✓</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: phone */}
            <div className="flex justify-center lg:justify-end">
              <IPhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '5 min', label: isEs ? 'Para configurar' : 'To set up' },
              { value: '100%', label: isEs ? 'Privado' : 'Private' },
              { value: isEs ? 'Gratis' : 'Free', label: isEs ? 'Para descargar' : 'To download' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold mb-1" style={{ color: '#7C6CFF' }}>{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.025em' }}
            >
              {t('features.title')}
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">{t('features.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: iconStyles[i]?.bg }}
                >
                  <div style={{ color: iconStyles[i]?.color }}>
                    {featureIcons[i]}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ letterSpacing: '-0.025em' }}
            >
              {t('howItWorks.title')}
            </h2>
            <p className="text-lg text-gray-500">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute"
              style={{
                top: 32,
                left: 'calc(16.67% + 32px)',
                right: 'calc(16.67% + 32px)',
                height: 1,
                background: 'linear-gradient(90deg, #DDD6FE, #7C6CFF 50%, #DDD6FE)',
              }}
            />

            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-6 relative">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6 relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)',
                    boxShadow: '0 4px 20px rgba(124,108,255,0.35)',
                  }}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section
        id="download"
        className="py-28 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #6758f0 0%, #7C6CFF 50%, #a89bff 100%)' }}
      >
        <div className="max-w-xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-semibold"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)' }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            {isEs ? 'Disponible para iPhone' : 'Available for iPhone'}
          </div>

          <h2
            className="text-4xl font-bold text-white mb-4"
            style={{ letterSpacing: '-0.025em' }}
          >
            {t('download.title')}
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">{t('download.subtitle')}</p>

          <div
            className="inline-flex items-center gap-3.5 px-8 py-4 rounded-2xl font-semibold text-base cursor-default"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1.5px solid rgba(255,255,255,0.3)',
              color: 'white',
              backdropFilter: 'blur(8px)',
            }}
          >
            <IconApple />
            {t('download.comingSoon')}
          </div>
        </div>
      </section>
    </main>
  )
}
