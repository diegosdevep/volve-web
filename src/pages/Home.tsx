import { useTranslation } from 'react-i18next'

// ── SVG Icons (tamaño fijo para consistencia) ─────────────────────────────────

const IconClock = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)
const IconBolt = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
)
const IconShield = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
)
const IconMapPin = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
)
const IconBell = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
)
const IconLock = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
)
const IconApple = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
    <div className="relative select-none mx-auto" style={{ width: 240, height: 490 }}>

      {/* Glow */}
      <div style={{
        position: 'absolute',
        inset: '15% 5%',
        background: 'radial-gradient(ellipse, rgba(124,108,255,0.25) 0%, transparent 70%)',
        filter: 'blur(28px)',
        transform: 'translateY(30px)',
        zIndex: 0,
      }} />

      {/* Frame */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: 44,
        background: 'linear-gradient(145deg, #2a2a2a 0%, #191919 100%)',
        boxShadow: '0 40px 70px -15px rgba(0,0,0,0.4), 0 15px 35px -10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.09)',
        zIndex: 1,
      }}>

        {/* Screen */}
        <div style={{
          position: 'absolute', top: 7, left: 7, right: 7, bottom: 7,
          borderRadius: 38,
          overflow: 'hidden',
          background: 'linear-gradient(160deg, #0d0920 0%, #180e3a 50%, #0e1a3e 100%)',
        }}>

          {/* Dynamic Island */}
          <div style={{
            position: 'absolute', top: 11,
            left: '50%', transform: 'translateX(-50%)',
            width: 88, height: 26,
            background: '#000', borderRadius: 18, zIndex: 10,
          }} />

          {/* Status bar */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '14px 20px 4px',
            fontSize: 11, color: 'rgba(255,255,255,0.65)', fontWeight: 600,
          }}>
            <span>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="rgba(255,255,255,0.55)">
                <rect x="0" y="6" width="2.5" height="5" rx="0.6"/>
                <rect x="4" y="4" width="2.5" height="7" rx="0.6"/>
                <rect x="8" y="2" width="2.5" height="9" rx="0.6"/>
                <rect x="12" y="0" width="2.5" height="11" rx="0.6" opacity="0.35"/>
              </svg>
              <svg width="22" height="11" viewBox="0 0 22 11">
                <rect x="0.5" y="0.5" width="18" height="10" rx="2.2" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9" fill="none"/>
                <rect x="19" y="3" width="2.2" height="5" rx="1" fill="rgba(255,255,255,0.3)"/>
                <rect x="1.8" y="1.8" width="12" height="7.4" rx="1.4" fill="rgba(255,255,255,0.75)"/>
              </svg>
            </div>
          </div>

          {/* App content */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', paddingTop: 54 }}>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px 10px' }}>
              <div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sesión activa</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginTop: 2 }}>Reunión con Diego</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(34,197,94,0.15)', borderRadius: 20, padding: '4px 9px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }}/>
                <span style={{ fontSize: 9, color: '#22C55E', fontWeight: 700 }}>En vivo</span>
              </div>
            </div>

            {/* Timer */}
            <div style={{ padding: '0 16px 12px' }}>
              <div style={{ background: 'rgba(124,108,255,0.1)', border: '1px solid rgba(124,108,255,0.2)', borderRadius: 22, padding: '18px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 5 }}>Tiempo restante</div>
                <div style={{ fontSize: 46, fontWeight: 700, color: '#fff', letterSpacing: -2, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>47:23</div>
                <div style={{ fontSize: 9, color: 'rgba(184,174,255,0.45)', marginTop: 5 }}>Se activa a las 22:30</div>
              </div>
            </div>

            {/* Location */}
            <div style={{ padding: '0 16px 10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: '10px 12px' }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" fill="none" stroke="#3B82F6" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>Última ubicación</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>San Martín 1234, BA</div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }} />

            {/* Button */}
            <div style={{ padding: '0 16px 28px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)',
                borderRadius: 18, padding: '12px 16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                fontSize: 12, fontWeight: 600, color: '#fff',
              }}>
                <svg width="13" height="13" fill="none" stroke="white" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                </svg>
                Desactivar alarma
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{ position: 'absolute', left: -2.5, top: 100, width: 3, height: 28, background: '#383838', borderRadius: '3px 0 0 3px' }}/>
        <div style={{ position: 'absolute', left: -2.5, top: 136, width: 3, height: 52, background: '#383838', borderRadius: '3px 0 0 3px' }}/>
        <div style={{ position: 'absolute', left: -2.5, top: 196, width: 3, height: 52, background: '#383838', borderRadius: '3px 0 0 3px' }}/>
        <div style={{ position: 'absolute', right: -2.5, top: 126, width: 3, height: 68, background: '#383838', borderRadius: '0 3px 3px 0' }}/>

        {/* Home indicator */}
        <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', width: 90, height: 4, borderRadius: 4, background: 'rgba(255,255,255,0.2)' }}/>
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
        style={{ background: 'linear-gradient(150deg, #f0eeff 0%, #f8f7ff 40%, #ffffff 100%)' }}
        className="pt-16"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 text-sm font-semibold"
                style={{ background: '#EDE9FE', color: '#7C6CFF' }}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                {t('hero.badge')}
              </div>

              <h1
                className="font-bold text-gray-900 mb-5 leading-tight"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
                  letterSpacing: '-0.03em',
                  whiteSpace: 'pre-line',
                }}
              >
                {t('hero.title')}
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 mx-auto lg:mx-0" style={{ maxWidth: 420 }}>
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-7 justify-center lg:justify-start">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: '#7C6CFF', boxShadow: '0 4px 20px rgba(124,108,255,0.38)' }}
                >
                  <IconApple />
                  {t('hero.downloadIos')}
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                >
                  {t('hero.learnMore')}
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {trust.map((label, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-sm text-gray-500">
                    <span className="font-bold text-green-500">✓</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: phone */}
            <div className="flex justify-center items-center py-8 lg:py-0">
              <IPhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="grid grid-cols-3 gap-6 text-center divide-x divide-gray-100">
            {[
              { value: '5 min', label: isEs ? 'Para configurar' : 'To set up' },
              { value: '100%', label: isEs ? 'Privado' : 'Private' },
              { value: isEs ? 'Gratis' : 'Free', label: isEs ? 'Para descargar' : 'To download' },
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <div className="text-2xl font-bold mb-1" style={{ color: '#7C6CFF' }}>{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-20 px-6" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
              {t('features.title')}
            </h2>
            <p className="text-base text-gray-500 max-w-lg mx-auto">{t('features.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-all"
              >
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: 40, height: 40,
                    borderRadius: 10,
                    backgroundColor: iconStyles[i]?.bg,
                    color: iconStyles[i]?.color,
                    flexShrink: 0,
                  }}
                >
                  {featureIcons[i]}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
              {t('howItWorks.title')}
            </h2>
            <p className="text-base text-gray-500">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Connector (solo md+) */}
            <div
              className="hidden md:block absolute"
              style={{
                top: 28, left: '22%', right: '22%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, #C4B5FD, #7C6CFF, #C4B5FD, transparent)',
              }}
            />

            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-4 relative">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5 relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)',
                    boxShadow: '0 4px 16px rgba(124,108,255,0.3)',
                    fontSize: 18,
                  }}
                >
                  {step.step}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section
        id="download"
        className="py-24 px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #6758f0 0%, #7C6CFF 60%, #a89bff 100%)' }}
      >
        <div className="max-w-lg mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-wide"
            style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}
          >
            {isEs ? 'Disponible para iPhone' : 'Available for iPhone'}
          </div>

          <h2 className="text-3xl font-bold text-white mb-3" style={{ letterSpacing: '-0.02em' }}>
            {t('download.title')}
          </h2>
          <p className="text-white/70 text-base mb-9 leading-relaxed">{t('download.subtitle')}</p>

          <div
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-semibold text-sm"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1.5px solid rgba(255,255,255,0.28)',
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
