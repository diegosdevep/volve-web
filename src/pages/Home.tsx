import { useTranslation } from 'react-i18next'

// ── Icons ─────────────────────────────────────────────────────────────────────

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
    <div style={{ position: 'relative', width: 232, height: 476, flexShrink: 0 }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '5%', right: '5%', bottom: '-5%',
        background: 'radial-gradient(ellipse, rgba(124,108,255,0.22) 0%, transparent 70%)',
        filter: 'blur(24px)',
      }} />

      {/* Outer frame */}
      <div style={{
        position: 'absolute', inset: 0,
        borderRadius: 42,
        background: 'linear-gradient(160deg, #2e2e2e 0%, #1a1a1a 100%)',
        boxShadow: '0 32px 64px -16px rgba(0,0,0,0.45), 0 12px 28px -8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}>

        {/* Screen */}
        <div style={{
          position: 'absolute', top: 7, left: 7, right: 7, bottom: 7,
          borderRadius: 36, overflow: 'hidden',
          background: 'linear-gradient(160deg, #0c0820 0%, #180e3a 50%, #0d1838 100%)',
        }}>
          {/* Dynamic island */}
          <div style={{
            position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
            width: 84, height: 25, background: '#000', borderRadius: 16, zIndex: 10,
          }} />

          {/* Status bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px 0', fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
            <span>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="rgba(255,255,255,0.55)">
                <rect x="0" y="5.5" width="2.2" height="4.5" rx="0.5"/>
                <rect x="3.5" y="3.5" width="2.2" height="6.5" rx="0.5"/>
                <rect x="7" y="1.5" width="2.2" height="8.5" rx="0.5"/>
                <rect x="10.5" y="0" width="2.2" height="10" rx="0.5" opacity="0.3"/>
              </svg>
              <svg width="20" height="10" viewBox="0 0 20 10">
                <rect x="0.5" y="0.5" width="16" height="9" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"/>
                <rect x="17" y="2.5" width="2" height="5" rx="1" fill="rgba(255,255,255,0.25)"/>
                <rect x="1.8" y="1.8" width="11" height="6.4" rx="1.2" fill="rgba(255,255,255,0.7)"/>
              </svg>
            </div>
          </div>

          {/* App UI */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', paddingTop: 50 }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 10px' }}>
              <div>
                <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sesión activa</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginTop: 2 }}>Reunión con Diego</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(34,197,94,0.15)', borderRadius: 20, padding: '3px 8px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }}/>
                <span style={{ fontSize: 8.5, color: '#22C55E', fontWeight: 700 }}>En vivo</span>
              </div>
            </div>

            {/* Timer */}
            <div style={{ padding: '0 14px 10px' }}>
              <div style={{ background: 'rgba(124,108,255,0.1)', border: '1px solid rgba(124,108,255,0.2)', borderRadius: 20, padding: '14px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 4 }}>Tiempo restante</div>
                <div style={{ fontSize: 44, fontWeight: 700, color: '#fff', letterSpacing: -2, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>47:23</div>
                <div style={{ fontSize: 8.5, color: 'rgba(184,174,255,0.4)', marginTop: 4 }}>Se activa a las 22:30</div>
              </div>
            </div>

            {/* Location */}
            <div style={{ padding: '0 14px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: '9px 11px' }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" fill="none" stroke="#3B82F6" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.3)' }}>Última ubicación</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>San Martín 1234, BA</div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}/>

            {/* Disarm button */}
            <div style={{ padding: '0 14px 22px' }}>
              <div style={{ background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)', borderRadius: 16, padding: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: '#fff' }}>
                <svg width="12" height="12" fill="none" stroke="white" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
                </svg>
                Desactivar alarma
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div style={{ position: 'absolute', left: -2.5, top: 94, width: 3, height: 26, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }}/>
        <div style={{ position: 'absolute', left: -2.5, top: 128, width: 3, height: 48, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }}/>
        <div style={{ position: 'absolute', left: -2.5, top: 184, width: 3, height: 48, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }}/>
        <div style={{ position: 'absolute', right: -2.5, top: 120, width: 3, height: 64, background: '#3a3a3a', borderRadius: '0 3px 3px 0' }}/>
        <div style={{ position: 'absolute', bottom: 9, left: '50%', transform: 'translateX(-50%)', width: 86, height: 3.5, borderRadius: 3, background: 'rgba(255,255,255,0.2)' }}/>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const { t, i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')
  const features = t('features.items', { returnObjects: true }) as { title: string; description: string }[]
  const steps = t('howItWorks.steps', { returnObjects: true }) as { step: string; title: string; description: string }[]

  const trust = isEs
    ? ['Gratis para descargar', 'Solo para iPhone', 'Sin suscripción']
    : ['Free to download', 'iPhone only', 'No subscription']

  return (
    <main style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(150deg, #f0eeff 0%, #f7f5ff 40%, #ffffff 100%)', paddingTop: 64 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 32px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>

            {/* Left */}
            <div>
              {/* Badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EDE9FE', color: '#7C6CFF', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                {t('hero.badge')}
              </div>

              {/* H1 */}
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#111827', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 20, whiteSpace: 'pre-line' }}>
                {t('hero.title')}
              </h1>

              {/* Subtitle */}
              <p style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.65, marginBottom: 32, maxWidth: 420 }}>
                {t('hero.subtitle')}
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
                <a
                  href="#download"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#7C6CFF', color: '#fff', padding: '13px 22px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 18px rgba(124,108,255,0.4)' }}
                >
                  <IconApple />
                  {t('hero.downloadIos')}
                </a>
                <a
                  href="#how-it-works"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#fff', color: '#374151', padding: '13px 22px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid #E5E7EB' }}
                >
                  {t('hero.learnMore')}
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                  </svg>
                </a>
              </div>

              {/* Trust */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
                {trust.map((label, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280' }}>
                    <span style={{ color: '#22C55E', fontWeight: 700 }}>✓</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: phone */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <IPhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '40px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
            {[
              { value: '5 min', label: isEs ? 'Para configurar' : 'To set up' },
              { value: '100%', label: isEs ? 'Privado' : 'Private' },
              { value: isEs ? 'Gratis' : 'Free', label: isEs ? 'Para descargar' : 'To download' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0 16px', borderLeft: i > 0 ? '1px solid #F3F4F6' : 'none' }}>
                <div style={{ fontSize: 26, fontWeight: 700, color: '#7C6CFF', marginBottom: 4 }}>{stat.value}</div>
                <div style={{ fontSize: 11, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ background: '#F8F7FF', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', marginBottom: 10 }}>
              {t('features.title')}
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280', maxWidth: 440, margin: '0 auto' }}>{t('features.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {features.map((feature, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 18, padding: '22px 20px', border: '1.5px solid #E9E6FF', boxShadow: '0 2px 12px rgba(124,108,255,0.06)' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: iconStyles[i]?.bg, color: iconStyles[i]?.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, flexShrink: 0 }}>
                  {featureIcons[i]}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 7 }}>{feature.title}</h3>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', marginBottom: 10 }}>
              {t('howItWorks.title')}
            </h2>
            <p style={{ fontSize: 16, color: '#6B7280' }}>{t('howItWorks.subtitle')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, position: 'relative' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 12px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 18, boxShadow: '0 4px 16px rgba(124,108,255,0.3)', flexShrink: 0 }}>
                  {step.step}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.6 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download ── */}
      <section id="download" style={{ background: 'linear-gradient(135deg, #6758f0 0%, #7C6CFF 60%, #a89bff 100%)', padding: '88px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', padding: '6px 14px', borderRadius: 99, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 22 }}>
            {isEs ? 'Disponible para iPhone' : 'Available for iPhone'}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            {t('download.title')}
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 36 }}>
            {t('download.subtitle')}
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.28)', color: '#fff', padding: '14px 28px', borderRadius: 14, fontSize: 15, fontWeight: 600 }}>
            <IconApple />
            {t('download.comingSoon')}
          </div>
        </div>
      </section>
    </main>
  )
}
