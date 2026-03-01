import { useTranslation } from 'react-i18next'

// ── Icons ──────────────────────────────────────────────────────────────────────

const IconShield = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
)
const IconClock = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
)
const IconBell = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
)
const IconLock = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
)
const IconMap = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
)
const IconUser = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
)
const IconPhoto = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
)
const IconKey = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 0 1 21.75 8.25Z" />
  </svg>
)
const IconBolt = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
)
const IconCheck = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
)
const IconApple = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

// ── iPhone Mockup ──────────────────────────────────────────────────────────────

function IPhoneMockup() {
  return (
    <div style={{ position: 'relative', width: 232, height: 476, flexShrink: 0 }}>
      <div style={{ position: 'absolute', top: '20%', left: '5%', right: '5%', bottom: '-5%', background: 'radial-gradient(ellipse, rgba(124,108,255,0.22) 0%, transparent 70%)', filter: 'blur(24px)' }} />
      <div style={{ position: 'absolute', inset: 0, borderRadius: 42, background: 'linear-gradient(160deg, #2e2e2e 0%, #1a1a1a 100%)', boxShadow: '0 32px 64px -16px rgba(0,0,0,0.45), 0 12px 28px -8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)' }}>
        <div style={{ position: 'absolute', top: 7, left: 7, right: 7, bottom: 7, borderRadius: 36, overflow: 'hidden', background: 'linear-gradient(160deg, #0c0820 0%, #180e3a 50%, #0d1838 100%)' }}>
          <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 84, height: 25, background: '#000', borderRadius: 16, zIndex: 10 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px 0', fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
            <span>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="rgba(255,255,255,0.55)"><rect x="0" y="5.5" width="2.2" height="4.5" rx="0.5"/><rect x="3.5" y="3.5" width="2.2" height="6.5" rx="0.5"/><rect x="7" y="1.5" width="2.2" height="8.5" rx="0.5"/><rect x="10.5" y="0" width="2.2" height="10" rx="0.5" opacity="0.3"/></svg>
              <svg width="20" height="10" viewBox="0 0 20 10"><rect x="0.5" y="0.5" width="16" height="9" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" fill="none"/><rect x="17" y="2.5" width="2" height="5" rx="1" fill="rgba(255,255,255,0.25)"/><rect x="1.8" y="1.8" width="11" height="6.4" rx="1.2" fill="rgba(255,255,255,0.7)"/></svg>
            </div>
          </div>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', paddingTop: 50 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 10px' }}>
              <div>
                <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sesión activa</div>
                <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.85)', fontWeight: 600, marginTop: 2 }}>Reunión con Diego</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(34,197,94,0.15)', borderRadius: 20, padding: '3px 8px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontSize: 8.5, color: '#22C55E', fontWeight: 700 }}>En vivo</span>
              </div>
            </div>
            <div style={{ padding: '0 14px 10px' }}>
              <div style={{ background: 'rgba(124,108,255,0.1)', border: '1px solid rgba(124,108,255,0.2)', borderRadius: 20, padding: '14px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 4 }}>Tiempo restante</div>
                <div style={{ fontSize: 44, fontWeight: 700, color: '#fff', letterSpacing: -2, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>47:23</div>
                <div style={{ fontSize: 8.5, color: 'rgba(184,174,255,0.4)', marginTop: 4 }}>Se activa a las 22:30</div>
              </div>
            </div>
            <div style={{ padding: '0 14px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: '9px 11px' }}>
                <div style={{ width: 26, height: 26, borderRadius: 7, background: 'rgba(37,99,235,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="12" height="12" fill="none" stroke="#3B82F6" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.3)' }}>Última ubicación</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>San Martín 1234, BA</div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }} />
            <div style={{ padding: '0 14px 22px' }}>
              <div style={{ background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)', borderRadius: 16, padding: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 11.5, fontWeight: 600, color: '#fff' }}>
                <svg width="12" height="12" fill="none" stroke="white" strokeWidth={2.2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
                Desactivar alarma
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', left: -2.5, top: 94, width: 3, height: 26, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }} />
        <div style={{ position: 'absolute', left: -2.5, top: 128, width: 3, height: 48, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }} />
        <div style={{ position: 'absolute', left: -2.5, top: 184, width: 3, height: 48, background: '#3a3a3a', borderRadius: '3px 0 0 3px' }} />
        <div style={{ position: 'absolute', right: -2.5, top: 120, width: 3, height: 64, background: '#3a3a3a', borderRadius: '0 3px 3px 0' }} />
        <div style={{ position: 'absolute', bottom: 9, left: '50%', transform: 'translateX(-50%)', width: 86, height: 3.5, borderRadius: 3, background: 'rgba(255,255,255,0.2)' }} />
      </div>
    </div>
  )
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EDE9FE', color: '#7C6CFF', padding: '5px 14px', borderRadius: 99, fontSize: 12, fontWeight: 600, marginBottom: 16, letterSpacing: '0.02em' }}>
      {children}
    </div>
  )
}

function SectionHeading({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: '#111827', letterSpacing: '-0.02em', marginBottom: 12, textAlign: center ? 'center' : 'left' }}>
      {children}
    </h2>
  )
}

function SectionSubtitle({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.7, textAlign: center ? 'center' : 'left', maxWidth: center ? 520 : undefined, margin: center ? '0 auto' : undefined }}>
      {children}
    </p>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  return (
    <main style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>

      {/* ── HERO ── */}
      <section style={{ background: 'linear-gradient(150deg, #f0eeff 0%, #f7f5ff 40%, #ffffff 100%)', paddingTop: 64 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 32px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EDE9FE', color: '#7C6CFF', padding: '6px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>
                <IconShield size={13} />
                {isEs ? 'App de seguridad personal' : 'Personal safety app'}
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#111827', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: 20 }}>
                {isEs ? 'Tu red de seguridad\ncuando salís solo/a' : 'Your safety net\nwhen you go out alone'}
              </h1>
              <p style={{ fontSize: 17, color: '#6B7280', lineHeight: 1.65, marginBottom: 32, maxWidth: 420 }}>
                {isEs
                  ? 'Configurás una sesión antes de salir. Si no la desactivás a tiempo, tus contactos de confianza reciben una alerta automática con toda la información.'
                  : 'Set up a session before you go out. If you don\'t deactivate it in time, your trusted contacts automatically receive an alert with all the information.'}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
                <a href="#download" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#7C6CFF', color: '#fff', padding: '13px 22px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 18px rgba(124,108,255,0.4)' }}>
                  <IconApple />
                  {isEs ? 'Descargar para iPhone' : 'Download for iPhone'}
                </a>
                <a href="#como-funciona" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#fff', color: '#374151', padding: '13px 22px', borderRadius: 12, fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid #E5E7EB' }}>
                  {isEs ? 'Ver cómo funciona' : 'See how it works'}
                  <svg width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </a>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
                {(isEs
                  ? ['Gratis para descargar', 'Solo para iPhone', 'Sin suscripción']
                  : ['Free to download', 'iPhone only', 'No subscription']
                ).map((label, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280' }}>
                    <span style={{ color: '#22C55E', fontWeight: 700 }}>✓</span>{label}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <IPhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '40px 32px' }}>
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

      {/* ── EL PROBLEMA ── */}
      <section style={{ background: '#FAFAFA', padding: '88px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <SectionLabel>
                {isEs ? '¿Por qué Volvé?' : 'Why Volvé?'}
              </SectionLabel>
              <SectionHeading>
                {isEs ? 'Todos salimos. No todos volvemos.' : 'Everyone goes out. Not everyone comes back.'}
              </SectionHeading>
              <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.8, marginBottom: 24 }}>
                {isEs
                  ? '¿Cuántas veces fuiste a una cita de Tinder, te reuniste con alguien que conociste online, llegaste tarde a casa o entraste a un edificio desconocido sin que nadie supiera dónde estabas?'
                  : 'How many times did you go on a Tinder date, meet someone you met online, get home late, or enter an unknown building without anyone knowing where you were?'}
              </p>
              <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.8, marginBottom: 32 }}>
                {isEs
                  ? 'Volvé es la red de seguridad que todos necesitamos pero nadie tiene. No reemplaza al sistema de emergencias — lo complementa con información real sobre lo que estabas haciendo.'
                  : 'Volvé is the safety net everyone needs but nobody has. It doesn\'t replace emergency services — it complements them with real information about what you were doing.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {(isEs
                  ? ['Citas de apps de encuentros', 'Reuniones con desconocidos', 'Caminos nocturnos solitarios', 'Viajes en transporte desconocido', 'Cualquier situación de riesgo']
                  : ['Dating app meetups', 'Meetings with strangers', 'Lonely nighttime routes', 'Rides with unknown drivers', 'Any risky situation']
                ).map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#7C6CFF' }}>
                      <IconCheck size={13} />
                    </div>
                    <span style={{ fontSize: 15, color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {(isEs ? [
                { icon: '📍', title: 'Ubicación en tiempo real', desc: 'Tus contactos saben dónde estabas cuando todo terminó.' },
                { icon: '👤', title: 'Datos de la persona', desc: 'Nombre, foto, redes sociales de con quién estabas.' },
                { icon: '📸', title: 'Tu vestimenta', desc: 'Fotos de lo que llevabas puesto para facilitarle la tarea a las autoridades.' },
                { icon: '⚡', title: 'Alerta inmediata', desc: 'En segundos, tus contactos saben que necesitás ayuda.' },
              ] : [
                { icon: '📍', title: 'Real-time location', desc: 'Your contacts know where you were when everything ended.' },
                { icon: '👤', title: 'Person\'s details', desc: 'Name, photo, social media of who you were with.' },
                { icon: '📸', title: 'Your outfit', desc: 'Photos of what you were wearing to help authorities.' },
                { icon: '⚡', title: 'Immediate alert', desc: 'In seconds, your contacts know you need help.' },
              ]).map((card, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '20px 18px', border: '1px solid #F3F4F6', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: 24, marginBottom: 10 }}>{card.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 6 }}>{card.title}</div>
                  <div style={{ fontSize: 13, color: '#9CA3AF', lineHeight: 1.5 }}>{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section id="how-it-works" style={{ background: '#fff', padding: '88px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel>{isEs ? 'Paso a paso' : 'Step by step'}</SectionLabel>
            <SectionHeading center>
              {isEs ? 'Así funciona Volvé' : 'How Volvé works'}
            </SectionHeading>
            <SectionSubtitle center>
              {isEs
                ? 'Un flujo simple diseñado para que puedas activarlo en segundos antes de salir.'
                : 'A simple flow designed so you can activate it in seconds before going out.'}
            </SectionSubtitle>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Connecting line */}
            <div style={{ position: 'absolute', left: 27, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, #7C6CFF 0%, #B8AEFF 100%)', opacity: 0.2 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {(isEs ? [
                {
                  num: '1', icon: <IconUser size={18} />, color: '#7C6CFF', bg: '#EDE9FE',
                  title: 'Configurás la sesión',
                  desc: 'Antes de salir, abrís Volvé y cargás con quién vas a estar: nombre, foto, redes sociales, número de teléfono. Agregás los lugares a los que vas a ir y la hora estimada de regreso.',
                },
                {
                  num: '2', icon: <IconClock size={18} />, color: '#D97706', bg: '#FEF3C7',
                  title: 'Empieza la cuenta regresiva',
                  desc: 'La app activa un temporizador. Podés minimizarla y seguir usando tu teléfono con normalidad. Recibirás una notificación 5 minutos antes de que se acabe el tiempo para que puedas desactivar a tiempo.',
                },
                {
                  num: '3', icon: <IconPhoto size={18} />, color: '#9333EA', bg: '#F3E8FF',
                  title: 'Agregás tu vestimenta',
                  desc: 'Sacás una foto de lo que llevás puesto. En caso de emergencia, esto le facilita enormemente la búsqueda a las autoridades y a tus contactos.',
                },
                {
                  num: '4', icon: <IconLock size={18} />, color: '#16A34A', bg: '#DCFCE7',
                  title: 'Desactivás con tu código seguro',
                  desc: 'Cuando llegás bien, ingresás tu código numérico personal. La sesión se cierra, se registra en tu historial y no se envía ninguna alerta. Todo en paz.',
                },
                {
                  num: '5', icon: <IconBell size={18} />, color: '#EF4444', bg: '#FEE2E2',
                  title: 'Si no desactivás... alertamos',
                  desc: 'Si el tiempo se acaba y no ingresaste tu código, Volvé envía automáticamente una alerta a todos tus contactos de emergencia con tu última ubicación GPS, los datos de la persona, fotos y tu vestimenta.',
                },
              ] : [
                {
                  num: '1', icon: <IconUser size={18} />, color: '#7C6CFF', bg: '#EDE9FE',
                  title: 'Set up your session',
                  desc: 'Before going out, open Volvé and enter who you\'ll be with: name, photo, social media, phone number. Add the places you\'re going and your estimated return time.',
                },
                {
                  num: '2', icon: <IconClock size={18} />, color: '#D97706', bg: '#FEF3C7',
                  title: 'Countdown starts',
                  desc: 'The app activates a timer. You can minimize it and keep using your phone normally. You\'ll get a notification 5 minutes before time runs out so you can deactivate in time.',
                },
                {
                  num: '3', icon: <IconPhoto size={18} />, color: '#9333EA', bg: '#F3E8FF',
                  title: 'Add your outfit',
                  desc: 'Take a photo of what you\'re wearing. In an emergency, this greatly helps authorities and your contacts with the search.',
                },
                {
                  num: '4', icon: <IconLock size={18} />, color: '#16A34A', bg: '#DCFCE7',
                  title: 'Deactivate with your safe code',
                  desc: 'When you get home safely, enter your personal numeric code. The session closes, is recorded in your history, and no alert is sent. All good.',
                },
                {
                  num: '5', icon: <IconBell size={18} />, color: '#EF4444', bg: '#FEE2E2',
                  title: 'If you don\'t deactivate... we alert',
                  desc: 'If time runs out and you haven\'t entered your code, Volvé automatically sends an alert to all your emergency contacts with your last GPS location, the person\'s details, photos, and your outfit.',
                },
              ]).map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 20, paddingBottom: i < 4 ? 32 : 0 }}>
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
                    <div style={{ width: 54, height: 54, borderRadius: '50%', background: step.bg, color: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, zIndex: 1, boxShadow: `0 0 0 4px #fff` }}>
                      {step.icon}
                    </div>
                  </div>
                  <div style={{ paddingTop: 10, paddingBottom: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: step.color, background: step.bg, padding: '2px 8px', borderRadius: 6 }}>PASO {step.num}</span>
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: '#111827', marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ INFO SE CAPTURA ── */}
      <section style={{ background: '#F8F7FF', padding: '88px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel>{isEs ? 'La alerta' : 'The alert'}</SectionLabel>
            <SectionHeading center>
              {isEs ? '¿Qué reciben tus contactos cuando se dispara la alarma?' : 'What do your contacts receive when the alarm triggers?'}
            </SectionHeading>
            <SectionSubtitle center>
              {isEs
                ? 'Un email y/o SMS con toda la información relevante para que puedan actuar de inmediato.'
                : 'An email and/or SMS with all the relevant information so they can act immediately.'}
            </SectionSubtitle>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {(isEs ? [
              { icon: <IconUser size={20} />, color: '#7C6CFF', bg: '#EDE9FE', title: 'Datos de la persona', desc: 'Nombre completo, foto, número de teléfono, Instagram, Twitter/X y cualquier otro dato que hayas cargado sobre quien te acompañaba.' },
              { icon: <IconPhoto size={20} />, color: '#9333EA', bg: '#F3E8FF', title: 'Tu vestimenta', desc: 'La foto que sacaste antes de salir mostrando exactamente qué llevabas puesto. Fundamental para una búsqueda rápida.' },
              { icon: <IconMap size={20} />, color: '#2563EB', bg: '#DBEAFE', title: 'Última ubicación GPS', desc: 'Las coordenadas exactas de tu última posición conocida, con enlace directo a Google Maps para que puedan ir al lugar.' },
              { icon: <IconClock size={20} />, color: '#D97706', bg: '#FEF3C7', title: 'Recorrido completo', desc: 'Todos los lugares que registraste durante la sesión: desde dónde empezaste hasta el último punto conocido.' },
              { icon: <IconBell size={20} />, color: '#EF4444', bg: '#FEE2E2', title: 'Hora y duración', desc: 'Cuándo empezó la sesión, hasta cuándo tenía que durar y cuánto tiempo pasó desde que debías haber llegado.' },
              { icon: <IconShield size={20} />, color: '#16A34A', bg: '#DCFCE7', title: 'Qué deben hacer', desc: 'El mensaje incluye instrucciones claras: intentar contactarte, llamar al 911 con la información provista, y actuar rápido.' },
            ] : [
              { icon: <IconUser size={20} />, color: '#7C6CFF', bg: '#EDE9FE', title: 'Person\'s details', desc: 'Full name, photo, phone number, Instagram, Twitter/X and any other info you entered about who you were with.' },
              { icon: <IconPhoto size={20} />, color: '#9333EA', bg: '#F3E8FF', title: 'Your outfit', desc: 'The photo you took before leaving showing exactly what you were wearing. Essential for a quick search.' },
              { icon: <IconMap size={20} />, color: '#2563EB', bg: '#DBEAFE', title: 'Last GPS location', desc: 'Exact coordinates of your last known position, with a direct link to Google Maps so they can go to the location.' },
              { icon: <IconClock size={20} />, color: '#D97706', bg: '#FEF3C7', title: 'Full route', desc: 'All the places you recorded during the session: from where you started to the last known point.' },
              { icon: <IconBell size={20} />, color: '#EF4444', bg: '#FEE2E2', title: 'Time and duration', desc: 'When the session started, how long it was supposed to last, and how much time has passed since you should have returned.' },
              { icon: <IconShield size={20} />, color: '#16A34A', bg: '#DCFCE7', title: 'What to do', desc: 'The message includes clear instructions: try to contact you, call 911 with the provided information, and act fast.' },
            ]).map((item, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 18, padding: '24px 20px', border: '1px solid #EDE9FE', boxShadow: '0 2px 12px rgba(124,108,255,0.05)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓDIGO DE COACCIÓN ── */}
      <section style={{ background: '#fff', padding: '88px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <SectionLabel>
                <IconKey size={13} />
                {isEs ? 'Seguridad avanzada' : 'Advanced security'}
              </SectionLabel>
              <SectionHeading>
                {isEs ? 'El código de coacción: tu última línea de defensa' : 'The duress code: your last line of defense'}
              </SectionHeading>
              <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.8, marginBottom: 24 }}>
                {isEs
                  ? 'Volvé tiene dos códigos: el código seguro (tu código normal) y el código de coacción. Si alguien te está obligando a desactivar la alarma, usás el código de coacción.'
                  : 'Volvé has two codes: the safe code (your normal code) and the duress code. If someone is forcing you to deactivate the alarm, you use the duress code.'}
              </p>
              <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.8, marginBottom: 32 }}>
                {isEs
                  ? 'Visualmente, la alarma parece desactivarse con normalidad. Pero en segundo plano, Volvé envía la alerta de emergencia silenciosamente a todos tus contactos.'
                  : 'Visually, the alarm appears to deactivate normally. But in the background, Volvé silently sends the emergency alert to all your contacts.'}
              </p>
              <div style={{ background: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: 14, padding: '16px 20px', marginBottom: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#92400E', marginBottom: 6 }}>
                  {isEs ? '⚠️ Importante' : '⚠️ Important'}
                </div>
                <div style={{ fontSize: 13, color: '#78350F', lineHeight: 1.6 }}>
                  {isEs
                    ? 'El código de coacción es opcional. Si lo configurás, debe ser diferente a tu código seguro.'
                    : 'The duress code is optional. If you set it up, it must be different from your safe code.'}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Code comparison */}
              <div style={{ background: '#F8F7FF', borderRadius: 20, padding: 24, border: '1px solid #EDE9FE' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#7C6CFF', marginBottom: 20, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {isEs ? 'Ejemplo' : 'Example'}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div style={{ background: '#fff', borderRadius: 14, padding: '16px 14px', border: '2px solid #DCFCE7', textAlign: 'center' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#16A34A', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {isEs ? '✓ Código seguro' : '✓ Safe code'}
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: '#111827', letterSpacing: 6, fontVariantNumeric: 'tabular-nums' }}>1234</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 8 }}>{isEs ? 'Cierra normalmente' : 'Closes normally'}</div>
                  </div>
                  <div style={{ background: '#fff', borderRadius: 14, padding: '16px 14px', border: '2px solid #FEE2E2', textAlign: 'center' }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#EF4444', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {isEs ? '⚡ Coacción' : '⚡ Duress'}
                    </div>
                    <div style={{ fontSize: 28, fontWeight: 700, color: '#111827', letterSpacing: 6, fontVariantNumeric: 'tabular-nums' }}>5678</div>
                    <div style={{ fontSize: 11, color: '#9CA3AF', marginTop: 8 }}>{isEs ? 'Alerta silenciosa' : 'Silent alert'}</div>
                  </div>
                </div>
                <div style={{ marginTop: 16, padding: '12px 14px', background: '#FEF2F2', borderRadius: 10, fontSize: 12, color: '#991B1B', lineHeight: 1.5 }}>
                  {isEs
                    ? '🔴 Ingresás 5678 → La app se ve normal → En 3 segundos, tus contactos reciben la alerta de emergencia'
                    : '🔴 You enter 5678 → App looks normal → In 3 seconds, your contacts receive the emergency alert'}
                </div>
              </div>
              <div style={{ background: '#EDE9FE', borderRadius: 14, padding: '16px 20px' }}>
                <div style={{ fontSize: 13, color: '#4C1D95', lineHeight: 1.6 }}>
                  {isEs
                    ? '🔒 Los códigos nunca se guardan en la nube — solo en el Keychain seguro de tu iPhone. Ni siquiera Volvé los conoce.'
                    : '🔒 Codes are never stored in the cloud — only in your iPhone\'s secure Keychain. Not even Volvé knows them.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTÓN DE PÁNICO ── */}
      <section style={{ background: '#FFF8F8', padding: '88px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div style={{ order: 1 }}>
              {/* Visual panic button */}
              <div style={{ background: '#fff', borderRadius: 24, padding: 32, border: '1px solid #FEE2E2', boxShadow: '0 8px 32px rgba(239,68,68,0.08)', textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #EF4444, #DC2626)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px rgba(239,68,68,0.35)' }}>
                  <IconBolt size={32} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 8 }}>
                  {isEs ? 'Mantené presionado 3 segundos' : 'Hold for 3 seconds'}
                </div>
                <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 20 }}>
                  {isEs ? 'Para evitar activaciones accidentales' : 'To avoid accidental activations'}
                </div>
                <div style={{ background: '#FFF1F1', border: '1px solid #FEE2E2', borderRadius: 12, padding: '12px 16px' }}>
                  <div style={{ height: 6, background: '#F3F4F6', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, #EF4444, #F87171)', borderRadius: 3 }} />
                  </div>
                  <div style={{ fontSize: 11, color: '#EF4444', fontWeight: 600, marginTop: 8 }}>2.1 {isEs ? 'seg...' : 'sec...'}</div>
                </div>
              </div>
            </div>
            <div>
              <SectionLabel>
                <IconBolt size={13} />
                {isEs ? 'Emergencia inmediata' : 'Immediate emergency'}
              </SectionLabel>
              <SectionHeading>
                {isEs ? 'El botón de pánico: alerta instantánea sin configuración' : 'Panic button: instant alert without setup'}
              </SectionHeading>
              <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.8, marginBottom: 24 }}>
                {isEs
                  ? 'No siempre hay tiempo para configurar una sesión completa. El botón de pánico te permite disparar una alerta de emergencia inmediata con un solo gesto: mantener presionado 3 segundos.'
                  : 'There isn\'t always time to set up a full session. The panic button lets you trigger an immediate emergency alert with one gesture: hold for 3 seconds.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {(isEs ? [
                  { icon: '📍', text: 'Captura tu ubicación GPS actual automáticamente' },
                  { icon: '📧', text: 'Envía email y SMS a tus contactos principales' },
                  { icon: '🔴', text: 'No necesita una sesión activa previa' },
                  { icon: '👁', text: 'Comparte ubicación en tiempo real después del disparo' },
                  { icon: '🔇', text: 'Funciona aunque el teléfono esté en silencio' },
                ] : [
                  { icon: '📍', text: 'Automatically captures your current GPS location' },
                  { icon: '📧', text: 'Sends email and SMS to your primary contacts' },
                  { icon: '🔴', text: 'Doesn\'t require an active session' },
                  { icon: '👁', text: 'Shares real-time location after triggering' },
                  { icon: '🔇', text: 'Works even if your phone is on silent' },
                ]).map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ fontSize: 15, color: '#374151', lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNCIONALIDADES ── */}
      <section id="features" style={{ background: '#F8F7FF', padding: '88px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel>{isEs ? 'Funcionalidades' : 'Features'}</SectionLabel>
            <SectionHeading center>
              {isEs ? 'Todo lo que incluye Volvé' : 'Everything included in Volvé'}
            </SectionHeading>
            <SectionSubtitle center>
              {isEs
                ? 'Diseñado con cada detalle para que nada quede al azar.'
                : 'Designed with every detail so nothing is left to chance.'}
            </SectionSubtitle>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {(isEs ? [
              { icon: <IconClock size={20} />, bg: '#FEF3C7', color: '#D97706', title: 'Temporizador de seguridad', desc: 'Configurás una hora de regreso. Si no desactivás a tiempo, la alarma se dispara automáticamente.' },
              { icon: <IconUser size={20} />, bg: '#EDE9FE', color: '#7C6CFF', title: 'Perfil de la persona', desc: 'Nombre, foto, redes sociales, teléfono. Todo lo que alguien necesita saber sobre con quién estabas.' },
              { icon: <IconPhoto size={20} />, bg: '#F3E8FF', color: '#9333EA', title: 'Fotos de vestimenta', desc: 'Registrás qué llevabas puesto. En una búsqueda, los primeros minutos son los más importantes.' },
              { icon: <IconMap size={20} />, bg: '#DBEAFE', color: '#2563EB', title: 'Múltiples ubicaciones', desc: 'Agregás todos los lugares que visitarás. Tu recorrido completo queda registrado.' },
              { icon: <IconBell size={20} />, bg: '#DCFCE7', color: '#16A34A', title: 'Alerta por email y SMS', desc: 'Tus contactos reciben la información por ambos canales para máxima cobertura.' },
              { icon: <IconKey size={20} />, bg: '#FEE2E2', color: '#EF4444', title: 'Código de coacción', desc: 'Un código alternativo que parece desactivar pero envía la alerta silenciosamente.' },
              { icon: <IconBolt size={20} />, bg: '#FEF9C3', color: '#CA8A04', title: 'Botón de pánico', desc: 'Alerta inmediata con un toque sostenido. Sin configuración previa necesaria.' },
              { icon: <IconShield size={20} />, bg: '#EDE9FE', color: '#7C6CFF', title: 'Historial de sesiones', desc: 'Registro completo de todas tus sesiones para hacer seguimiento de tu actividad.' },
              { icon: <IconLock size={20} />, bg: '#DCFCE7', color: '#16A34A', title: 'Keychain seguro', desc: 'Tus códigos se guardan en el Keychain de iOS, nunca en la nube. Máxima privacidad.' },
            ] : [
              { icon: <IconClock size={20} />, bg: '#FEF3C7', color: '#D97706', title: 'Safety timer', desc: 'You set a return time. If you don\'t deactivate in time, the alarm triggers automatically.' },
              { icon: <IconUser size={20} />, bg: '#EDE9FE', color: '#7C6CFF', title: 'Person\'s profile', desc: 'Name, photo, social media, phone. Everything someone needs to know about who you were with.' },
              { icon: <IconPhoto size={20} />, bg: '#F3E8FF', color: '#9333EA', title: 'Outfit photos', desc: 'Record what you were wearing. In a search, the first minutes are the most important.' },
              { icon: <IconMap size={20} />, bg: '#DBEAFE', color: '#2563EB', title: 'Multiple locations', desc: 'Add all the places you\'ll visit. Your complete route is recorded.' },
              { icon: <IconBell size={20} />, bg: '#DCFCE7', color: '#16A34A', title: 'Email and SMS alert', desc: 'Your contacts receive the information through both channels for maximum coverage.' },
              { icon: <IconKey size={20} />, bg: '#FEE2E2', color: '#EF4444', title: 'Duress code', desc: 'An alternate code that appears to deactivate but silently sends the alert.' },
              { icon: <IconBolt size={20} />, bg: '#FEF9C3', color: '#CA8A04', title: 'Panic button', desc: 'Immediate alert with a long press. No prior setup required.' },
              { icon: <IconShield size={20} />, bg: '#EDE9FE', color: '#7C6CFF', title: 'Session history', desc: 'Complete record of all your sessions to track your activity.' },
              { icon: <IconLock size={20} />, bg: '#DCFCE7', color: '#16A34A', title: 'Secure Keychain', desc: 'Your codes are stored in iOS Keychain, never in the cloud. Maximum privacy.' },
            ]).map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 18, padding: '22px 20px', border: '1.5px solid #E9E6FF', boxShadow: '0 2px 12px rgba(124,108,255,0.05)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: f.bg, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIVACIDAD ── */}
      <section style={{ background: '#fff', padding: '88px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <SectionLabel>
                <IconLock size={13} />
                {isEs ? 'Privacidad y seguridad' : 'Privacy & security'}
              </SectionLabel>
              <SectionHeading>
                {isEs ? 'Tu información es tuya y solo tuya' : 'Your information belongs to you and only you'}
              </SectionHeading>
              <p style={{ fontSize: 16, color: '#6B7280', lineHeight: 1.8, marginBottom: 32 }}>
                {isEs
                  ? 'Diseñamos Volvé pensando en la privacidad desde el principio. No vendemos datos, no mostramos anuncios, y lo más sensible — tus códigos — nunca sale de tu dispositivo.'
                  : 'We designed Volvé with privacy from the start. We don\'t sell data, don\'t show ads, and the most sensitive part — your codes — never leaves your device.'}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {(isEs ? [
                  { icon: '🔐', title: 'Códigos en el Keychain de iOS', desc: 'Tu código seguro y de coacción se almacenan en el Keychain encriptado del sistema, nunca en Firestore ni en ningún servidor.' },
                  { icon: '📡', title: 'Ubicación solo cuando importa', desc: 'Tu GPS solo se comparte cuando se activa una alerta real. No hay rastreo permanente ni en segundo plano.' },
                  { icon: '🗄️', title: 'Datos en Firestore protegidos', desc: 'Cada documento en Firestore tiene reglas de seguridad que solo permiten acceso al usuario propietario.' },
                  { icon: '🚫', title: 'Sin anuncios, sin venta de datos', desc: 'Volvé es gratuita. No financiamos la app con publicidad ni con la venta de información de nuestros usuarios.' },
                ] : [
                  { icon: '🔐', title: 'Codes in iOS Keychain', desc: 'Your safe and duress codes are stored in the system\'s encrypted Keychain, never in Firestore or any server.' },
                  { icon: '📡', title: 'Location only when it matters', desc: 'Your GPS is only shared when a real alert is activated. No permanent or background tracking.' },
                  { icon: '🗄️', title: 'Protected Firestore data', desc: 'Each Firestore document has security rules that only allow access to the owner user.' },
                  { icon: '🚫', title: 'No ads, no data selling', desc: 'Volvé is free. We don\'t fund the app through advertising or selling user information.' },
                ]).map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 0', borderTop: i > 0 ? '1px solid #F3F4F6' : 'none' }}>
                    <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#F8F7FF', borderRadius: 24, padding: 32, border: '1px solid #EDE9FE' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#7C6CFF', marginBottom: 20 }}>
                {isEs ? '¿Dónde vive cada dato?' : 'Where does each piece of data live?'}
              </div>
              {(isEs ? [
                { label: 'Código seguro', location: 'Keychain iOS', safe: true },
                { label: 'Código de coacción', location: 'Keychain iOS', safe: true },
                { label: 'Datos de sesiones', location: 'Firestore (cifrado)', safe: true },
                { label: 'Contactos de emergencia', location: 'Firestore (cifrado)', safe: true },
                { label: 'Fotos de contactos', location: 'Firebase Storage', safe: true },
                { label: 'Ubicación GPS', location: 'Solo al disparar alerta', safe: true },
                { label: 'Tu contraseña', location: 'Firebase Auth', safe: true },
              ] : [
                { label: 'Safe code', location: 'iOS Keychain', safe: true },
                { label: 'Duress code', location: 'iOS Keychain', safe: true },
                { label: 'Session data', location: 'Firestore (encrypted)', safe: true },
                { label: 'Emergency contacts', location: 'Firestore (encrypted)', safe: true },
                { label: 'Contact photos', location: 'Firebase Storage', safe: true },
                { label: 'GPS location', location: 'Only when alert fires', safe: true },
                { label: 'Your password', location: 'Firebase Auth', safe: true },
              ]).map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderTop: i > 0 ? '1px solid #EDE9FE' : 'none' }}>
                  <span style={{ fontSize: 13, color: '#374151' }}>{row.label}</span>
                  <span style={{ fontSize: 12, background: '#DCFCE7', color: '#166534', padding: '3px 10px', borderRadius: 6, fontWeight: 500 }}>{row.location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#F8F7FF', padding: '88px 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading center>
              {isEs ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </SectionHeading>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {(isEs ? [
              { q: '¿Volvé es completamente gratis?', a: 'Sí. Volvé es gratuita para descargar y usar. No hay suscripción, no hay compras dentro de la app. El modelo de negocio está basado en el costo de infraestructura que absorbemos.' },
              { q: '¿Funciona sin conexión a internet?', a: 'El temporizador y el código de desactivación funcionan sin internet. Pero para enviar la alerta a tus contactos (email y SMS) sí necesitás conexión. Te recomendamos asegurarte de tener datos antes de activar una sesión.' },
              { q: '¿Qué pasa si me olvidé de desactivar y estoy bien?', a: 'Si el tiempo se acaba y estás bien, la alerta se envía igual. Por eso es importante activar la sesión con un tiempo realista y extenderla si necesitás más tiempo. Podés extender hasta 3 veces de 15 minutos.' },
              { q: '¿Puedo usar Volvé si cambié de teléfono?', a: 'Sí, pero tus códigos no migran automáticamente porque están en el Keychain del dispositivo anterior. Tendrás que volver a configurar tu código seguro (y el de coacción si lo tenías) en el nuevo iPhone.' },
              { q: '¿Volvé funciona en Android?', a: 'Por ahora solo está disponible para iPhone. Estamos evaluando el desarrollo de la versión para Android según la demanda.' },
              { q: '¿Mis contactos de emergencia necesitan tener la app?', a: 'No. Tus contactos reciben la alerta por email y/o SMS. No necesitan tener Volvé instalada ni ninguna otra app.' },
              { q: '¿Cuántos contactos de emergencia puedo tener?', a: 'Podés agregar todos los contactos que quieras, organizados en grupos (familia, amigos, favoritos). Al crear una sesión, elegís cuáles incluir en esa alerta específica.' },
              { q: '¿Es seguro cargar los datos de la persona con quien me veo?', a: 'Los datos se guardan en Firestore con reglas de seguridad que solo te permiten acceso a vos. No los compartimos con nadie. Solo se envían cuando se dispara una alerta y solo a tus contactos de emergencia.' },
            ] : [
              { q: 'Is Volvé completely free?', a: 'Yes. Volvé is free to download and use. No subscription, no in-app purchases. The business model is based on the infrastructure costs we absorb.' },
              { q: 'Does it work without internet?', a: 'The timer and deactivation code work without internet. But to send the alert to your contacts (email and SMS) you need a connection. We recommend making sure you have data before activating a session.' },
              { q: 'What if I forgot to deactivate and I\'m fine?', a: 'If time runs out and you\'re fine, the alert is sent anyway. That\'s why it\'s important to activate the session with a realistic time and extend it if you need more. You can extend up to 3 times by 15 minutes.' },
              { q: 'Can I use Volvé if I changed phones?', a: 'Yes, but your codes don\'t migrate automatically because they\'re in the previous device\'s Keychain. You\'ll need to reconfigure your safe code (and duress code if you had one) on the new iPhone.' },
              { q: 'Does Volvé work on Android?', a: 'Currently only available for iPhone. We\'re evaluating Android development based on demand.' },
              { q: 'Do my emergency contacts need the app?', a: 'No. Your contacts receive the alert via email and/or SMS. They don\'t need to have Volvé installed or any other app.' },
              { q: 'How many emergency contacts can I have?', a: 'You can add as many contacts as you want, organized in groups (family, friends, favorites). When creating a session, you choose which ones to include in that specific alert.' },
              { q: 'Is it safe to enter information about the person I\'m meeting?', a: 'Data is stored in Firestore with security rules that only allow you access. We don\'t share it with anyone. It\'s only sent when an alert fires and only to your emergency contacts.' },
            ]).map((faq, i) => (
              <div key={i} style={{ borderTop: '1px solid #E5E7EB', padding: '24px 0' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 10 }}>{faq.q}</div>
                <div style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>{faq.a}</div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #E5E7EB' }} />
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section id="download" style={{ background: 'linear-gradient(135deg, #6758f0 0%, #7C6CFF 60%, #a89bff 100%)', padding: '88px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', padding: '6px 14px', borderRadius: 99, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 22 }}>
            {isEs ? 'Disponible para iPhone. Gratis.' : 'Available for iPhone. Free.'}
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 14 }}>
            {isEs ? 'Empezá a protegerte hoy' : 'Start protecting yourself today'}
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: 36 }}>
            {isEs
              ? 'Tardás menos de 5 minutos en configurarla. La próxima vez que salgas, salís con una red de seguridad.'
              : 'It takes less than 5 minutes to set up. Next time you go out, you go out with a safety net.'}
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 11, background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.28)', color: '#fff', padding: '14px 28px', borderRadius: 14, fontSize: 15, fontWeight: 600 }}>
            <IconApple />
            {isEs ? 'App Store — Próximamente' : 'App Store — Coming soon'}
          </div>
        </div>
      </section>

    </main>
  )
}
