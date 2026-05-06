import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const VOLVE = {
  violet: '#6E6BB3',
  violetStrong: '#5C5A99',
  lavender: '#C8C6F2',
  lavenderSoft: '#EAE9F4',
  graphite: '#2E2E38',
  textSecondary: '#8E8E97',
  border: '#E1DFF0',
  cardBg: '#FFFFFF',
  pageBg: '#F2F2F7',
  offWhite: '#F7F7FA',
  whatsapp: '#25D366',
  whatsappDark: '#1FAE54',
} as const

const WHATSAPP_BASE = 'https://wa.me/15075775499'
const WHATSAPP_LINKS = {
  es: `${WHATSAPP_BASE}?text=${encodeURIComponent('Hola, me interesa Volvé Empresas para mi equipo.')}`,
  en: `${WHATSAPP_BASE}?text=${encodeURIComponent("Hi, I'm interested in Volvé for Business for my team.")}`,
}

// Updates document.title and meta[name=description] for the duration of this
// page; restores previous values on unmount.
function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const prevDesc = metaDesc?.getAttribute('content') ?? null
    let created = false
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
      created = true
    }
    metaDesc.setAttribute('content', description)

    return () => {
      document.title = prevTitle
      if (created) metaDesc?.remove()
      else if (prevDesc !== null) metaDesc?.setAttribute('content', prevDesc)
    }
  }, [title, description])
}

// ── Icons ──────────────────────────────────────────────────────────
const svgBase = { fill: 'none' as const, viewBox: '0 0 24 24', strokeWidth: 1.7, stroke: 'currentColor' }
type IconProps = { size?: number }

const IconBuilding = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h1.5M9 12h1.5M9 17.25h1.5M13.5 6.75H15M13.5 12H15M13.5 17.25H15"/></svg>
)
const IconUserCircle = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
)
const IconMegaphone = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73s-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"/></svg>
)
const IconSparkles = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/></svg>
)
const IconAcademic = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>
)
const IconHeart = ({ size = 22 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>
)
const IconChartBar = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>
)
const IconUsers = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/></svg>
)
const IconShield = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/></svg>
)
const IconDocument = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/></svg>
)
const IconClipboard = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m-1.5 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z"/></svg>
)
const IconCalendar = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg>
)
const IconBell = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/></svg>
)
const IconLifebuoy = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} {...svgBase}><path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 3.971 4.392 1.5 1.5 0 0 1-.97 2.05 9 9 0 0 1-1.426.348M16.712 4.33A9 9 0 0 0 12 3.001a9 9 0 0 0-4.713 1.328m9.425 0L14.04 6.984m6.643 1.788a9 9 0 0 1 0 6.464m0 0a9 9 0 0 1-3.972 4.392M20.683 15.224l-2.643-2.643M14.04 6.984c-.626-.27-1.319-.424-2.04-.45m0 0c-.722.026-1.414.18-2.04.45m4.08 0L12 9.75m0 6.75-2.04 2.643M12 9.75v6.75m0 0c-.722-.026-1.414-.18-2.04-.45m2.04.45c.722-.026 1.414-.18 2.04-.45M9.96 6.984l2.04 2.766M9.96 17.016l2.04-2.766M9.96 17.016c-.626.27-1.319.424-2.04.45m0 0a9 9 0 0 1-4.713-1.328m0 0A9 9 0 0 1 3 12c0-1.692.467-3.275 1.279-4.622m0 9.244 2.643-2.643M3.279 7.378A9 9 0 0 1 7.287 4.33m0 0L9.96 6.984"/></svg>
)
const IconCheckSm = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={2.6} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>
)
const IconWhatsapp = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
)
const IconArrowRight = ({ size = 14 }: IconProps) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
)

// ── Page ───────────────────────────────────────────────────────────
export default function Empresas() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  useDocumentMeta(
    isEs
      ? 'Volvé Empresas — Seguridad para tu equipo de campo'
      : 'Volvé for Business — Safety for your field team',
    isEs
      ? 'Cumplimiento de duty of care, seguridad laboral y protección para empleadas que trabajan con desconocidos. Inmobiliarias, eventos, modelos, limpieza domiciliaria, enfermería. Desde USD 99/mes.'
      : 'Duty of care compliance, workplace safety, and protection for employees who work with strangers. Real estate, events, modeling, home cleaning, nursing. From USD 99/month.',
  )

  return (
    <main style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      backgroundColor: VOLVE.cardBg, color: VOLVE.graphite,
      overflowX: 'hidden',
    }}>
      <Hero isEs={isEs} />
      <ParaQuienEs isEs={isEs} />
      <QueIncluye isEs={isEs} />
      <ROI isEs={isEs} />
      <Pricing isEs={isEs} />
      <CasosDeUso isEs={isEs} />
      <FAQ isEs={isEs} />
      <Hablamos isEs={isEs} />
    </main>
  )
}

// ── Hero ───────────────────────────────────────────────────────────
function Hero({ isEs }: { isEs: boolean }) {
  return (
    <section style={{
      background: `linear-gradient(150deg, ${VOLVE.lavenderSoft} 0%, #F7F5FF 50%, ${VOLVE.cardBg} 100%)`,
      paddingTop: 64, borderBottom: `1px solid ${VOLVE.border}`,
    }}>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '88px 32px 80px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7,
          background: VOLVE.cardBg, border: `1px solid ${VOLVE.border}`, color: VOLVE.violet,
          padding: '6px 14px', borderRadius: 999,
          fontSize: 13, fontWeight: 600, marginBottom: 24,
        }}>
          <IconBuilding size={14} /> {isEs ? 'Volvé Empresas' : 'Volvé for Business'}
        </div>
        <h1 style={{
          fontSize: 'clamp(2.2rem, 4.4vw, 3.4rem)', fontWeight: 700, letterSpacing: '-0.03em',
          lineHeight: 1.1, margin: '0 0 22px', color: VOLVE.graphite,
        }}>
          {isEs ? 'Protegé a tu equipo en campo.' : 'Protect your field team.'}
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 1.8vw, 18px)', color: VOLVE.textSecondary,
          lineHeight: 1.65, maxWidth: 620, margin: '0 auto 36px',
        }}>
          {isEs
            ? 'Volvé Empresas: cumplimiento de duty of care, control centralizado y tranquilidad para tus empleadas que trabajan con desconocidos. Desde USD 99/mes.'
            : 'Volvé for Business: duty of care compliance, centralized control, and peace of mind for your employees who work with strangers. From USD 99/month.'}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <a
            href={isEs ? WHATSAPP_LINKS.es : WHATSAPP_LINKS.en}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 9,
              background: VOLVE.violet, color: '#fff',
              padding: '14px 26px', borderRadius: 12,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(110,107,179,0.32)',
            }}
          >
            <IconWhatsapp size={16} /> {isEs ? 'Solicitar demo' : 'Request a demo'}
          </a>
          <a
            href="#pricing"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              background: VOLVE.cardBg, color: VOLVE.graphite,
              padding: '14px 26px', borderRadius: 12,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              border: `1.5px solid ${VOLVE.border}`,
            }}
          >
            {isEs ? 'Ver pricing' : 'See pricing'} <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Sección 1: Para quién es ───────────────────────────────────────
function ParaQuienEs({ isEs }: { isEs: boolean }) {
  const verticals = isEs ? [
    { Icon: IconBuilding,   title: 'Inmobiliarias',                   desc: 'Agentes que muestran propiedades a desconocidos en horarios variables.' },
    { Icon: IconUserCircle, title: 'Agencias de modelos',             desc: 'Modelos en castings y producciones con clientes nuevos cada semana.' },
    { Icon: IconMegaphone,  title: 'Productoras de eventos',          desc: 'Personal técnico y staff trabajando en locaciones que cambian cada día.' },
    { Icon: IconSparkles,   title: 'Limpieza domiciliaria',           desc: 'Personal que entra solo a domicilios particulares.' },
    { Icon: IconAcademic,   title: 'Escuelas con clases a domicilio', desc: 'Profesores particulares dando clases en casas de alumnos.' },
    { Icon: IconHeart,      title: 'Enfermería domiciliaria',         desc: 'Enfermeras y cuidadores haciendo turnos en hogares ajenos.' },
  ] : [
    { Icon: IconBuilding,   title: 'Real estate agencies',         desc: 'Agents who show properties to strangers at variable hours.' },
    { Icon: IconUserCircle, title: 'Modeling agencies',            desc: 'Models on castings and productions with new clients every week.' },
    { Icon: IconMegaphone,  title: 'Event production',             desc: 'Technical staff and crew working at locations that change daily.' },
    { Icon: IconSparkles,   title: 'Home cleaning',                desc: 'Workers who enter private homes alone.' },
    { Icon: IconAcademic,   title: 'Schools with at-home classes', desc: "Private tutors teaching at students' homes." },
    { Icon: IconHeart,      title: 'Home nursing',                 desc: "Nurses and caregivers doing shifts at other people's homes." },
  ]

  return (
    <Section bg={VOLVE.pageBg}>
      <SectionHeader
        eyebrow={isEs ? 'Para quién es' : "Who it's for"}
        title={isEs ? 'Equipos donde el riesgo es parte del trabajo.' : 'Teams where risk is part of the job.'}
        subtitle={isEs
          ? 'Volvé Empresas está hecho para verticales con personal en campo y exposición a desconocidos.'
          : 'Volvé for Business is built for verticals with field workers and exposure to strangers.'}
      />
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 16, marginTop: 36,
      }}>
        {verticals.map(({ Icon, title, desc }, i) => (
          <div key={i} style={{
            background: VOLVE.cardBg, borderRadius: 16, padding: '22px 20px',
            border: `1px solid ${VOLVE.border}`,
            boxShadow: '0 4px 12px rgba(110,107,179,0.04)',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: 'rgba(110,107,179,0.10)', color: VOLVE.violet,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 14,
            }}><Icon size={20} /></div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: VOLVE.graphite, margin: '0 0 6px' }}>{title}</h3>
            <p style={{ fontSize: 14, color: VOLVE.textSecondary, lineHeight: 1.55, margin: 0 }}>{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Sección 2: Qué incluye ─────────────────────────────────────────
function QueIncluye({ isEs }: { isEs: boolean }) {
  const features = isEs ? [
    { Icon: IconChartBar,  title: 'Dashboard web del admin',   desc: 'Métricas operacionales del equipo en tiempo real.', soon: true },
    { Icon: IconUsers,     title: 'Onboarding masivo',         desc: 'Sumá a todo el equipo en un solo paso, con CSV o invitación masiva.' },
    { Icon: IconShield,    title: 'Manager como contacto',     desc: 'El responsable del equipo se agrega automáticamente como contacto de emergencia.' },
    { Icon: IconDocument,  title: 'Reporte + Certificado',     desc: 'Reporte mensual de uso + Certificado de Duty of Care emitido por Volvé.' },
    { Icon: IconClipboard, title: 'Audit log exportable',      desc: 'Registro completo de eventos por usuaria, exportable en CSV/JSON.' },
    { Icon: IconCalendar,  title: 'Google Calendar / Outlook', desc: 'Sesiones automáticas a partir de eventos del calendario corporativo.', soon: true },
    { Icon: IconBell,      title: 'Branded experience',        desc: 'Las alertas a contactos de emergencia llevan el logo y nombre de tu empresa.' },
    { Icon: IconLifebuoy,  title: 'SLA + soporte prioritario', desc: 'Uptime garantizado y canal directo con el equipo Volvé.' },
  ] : [
    { Icon: IconChartBar,  title: 'Admin web dashboard',       desc: 'Real-time operational metrics for your team.', soon: true },
    { Icon: IconUsers,     title: 'Bulk team onboarding',      desc: 'Add the whole team in one step via CSV or mass invitation.' },
    { Icon: IconShield,    title: 'Manager as contact',        desc: 'The team lead is automatically added as an emergency contact.' },
    { Icon: IconDocument,  title: 'Report + Certificate',      desc: 'Monthly usage report + Duty of Care Certificate issued by Volvé.' },
    { Icon: IconClipboard, title: 'Exportable audit log',      desc: 'Full event log per employee, exportable as CSV/JSON.' },
    { Icon: IconCalendar,  title: 'Google Calendar / Outlook', desc: 'Automatic sessions from corporate calendar events.', soon: true },
    { Icon: IconBell,      title: 'Branded experience',        desc: "Alerts to emergency contacts carry your company's logo and name." },
    { Icon: IconLifebuoy,  title: 'SLA + priority support',    desc: 'Guaranteed uptime and direct channel with the Volvé team.' },
  ]

  return (
    <Section>
      <SectionHeader
        eyebrow={isEs ? 'Qué incluye' : "What's included"}
        title={isEs ? 'Todo lo del plan personal, más capas operativas.' : 'Everything in the personal plan, plus operational layers.'}
        subtitle={isEs
          ? 'Las funciones que necesitás para cumplir con duty of care sin comprometer la privacidad de tu equipo.'
          : "The features you need to comply with duty of care without compromising your team's privacy."}
      />
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 14, marginTop: 36,
      }}>
        {features.map(({ Icon, title, desc, soon }, i) => (
          <div key={i} style={{
            background: VOLVE.offWhite, borderRadius: 14, padding: '18px 18px',
            border: `1px solid ${VOLVE.border}`,
            display: 'flex', gap: 14,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 9, flexShrink: 0,
              background: 'rgba(110,107,179,0.12)', color: VOLVE.violet,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><Icon size={18} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: VOLVE.graphite, margin: 0 }}>{title}</h3>
                {soon && (
                  <span style={{
                    fontSize: 9.5, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase',
                    color: VOLVE.violet, background: 'rgba(110,107,179,0.12)',
                    padding: '2px 7px', borderRadius: 999,
                  }}>{isEs ? 'Próximamente' : 'Soon'}</span>
                )}
              </div>
              <p style={{ fontSize: 13.5, color: VOLVE.textSecondary, lineHeight: 1.55, margin: 0 }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ── Sección 3: ROI ─────────────────────────────────────────────────
function ROI({ isEs }: { isEs: boolean }) {
  return (
    <Section bg={VOLVE.pageBg}>
      <SectionHeader
        eyebrow={isEs ? 'Por qué pagar 30x más' : 'Why pay 30x more'}
        title={isEs ? 'La pelea más barata que vas a comprar este año.' : "The cheapest fight you'll buy this year."}
        subtitle={isEs
          ? 'Hacé la cuenta. Una sola situación evitada paga décadas de servicio.'
          : 'Do the math. A single prevented incident pays for decades of service.'}
      />
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 16, marginTop: 40, alignItems: 'stretch',
      }}>
        <div style={{
          background: VOLVE.cardBg, borderRadius: 18, padding: '28px 24px',
          border: `1px solid ${VOLVE.border}`,
          boxShadow: '0 12px 32px rgba(110,107,179,0.08)',
        }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: VOLVE.textSecondary, marginBottom: 10 }}>
            {isEs ? 'Costo evitado' : 'Cost prevented'}
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, color: VOLVE.graphite, letterSpacing: -1, lineHeight: 1 }}>
            USD 50.000
          </div>
          <p style={{ fontSize: 14, color: VOLVE.textSecondary, lineHeight: 1.55, margin: '12px 0 0' }}>
            {isEs ? '1 indemnización laboral evitada.' : '1 prevented workplace lawsuit.'}
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #5C5A99 0%, #6E6BB3 100%)', color: '#fff',
          borderRadius: 18, padding: '28px 24px',
          boxShadow: '0 12px 32px rgba(110,107,179,0.30)',
        }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', opacity: 0.78, marginBottom: 10 }}>
            {isEs ? 'Costo de Volvé Empresas' : 'Cost of Volvé for Business'}
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1, lineHeight: 1 }}>
            USD 1.200
          </div>
          <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.55, margin: '12px 0 0' }}>
            {isEs ? '1 año, equipo de 10 personas.' : '1 year, team of 10 people.'}
          </p>
        </div>
      </div>
    </Section>
  )
}

// ── Sección 4: Pricing ─────────────────────────────────────────────
function Pricing({ isEs }: { isEs: boolean }) {
  const tiers = isEs ? [
    {
      name: 'Hasta 10 personas', price: 'USD 99', cadence: '/mes', cta: 'Empezar',
      features: ['Funciones premium para todo el equipo', 'Dashboard del admin', 'Manager como contacto automático', 'Reporte mensual + Certificado Duty of Care'],
    },
    {
      name: 'Hasta 30 personas', price: 'USD 299', cadence: '/mes', cta: 'Empezar', highlight: 'Más popular',
      features: ['Todo lo anterior', 'Audit log exportable', 'Branded experience en alertas', 'Soporte prioritario por email'],
    },
    {
      name: 'Hasta 50 personas', price: 'USD 499', cadence: '/mes', cta: 'Hablar con ventas',
      features: ['Todo lo anterior', 'Onboarding asistido (1 sesión)', 'SLA de uptime acordado', 'Canal Slack/WhatsApp directo'],
    },
    {
      name: 'Más de 50 personas', price: 'Custom', cadence: '', cta: 'Contactar',
      features: ['Pricing custom', 'Onboarding completo', 'Integraciones a medida', 'SLA negociable'],
    },
  ] : [
    {
      name: 'Up to 10 people', price: 'USD 99', cadence: '/mo', cta: 'Get started',
      features: ['Premium features for the whole team', 'Admin dashboard', 'Manager as automatic contact', 'Monthly report + Duty of Care Certificate'],
    },
    {
      name: 'Up to 30 people', price: 'USD 299', cadence: '/mo', cta: 'Get started', highlight: 'Most popular',
      features: ['Everything above', 'Exportable audit log', 'Branded alerts', 'Priority email support'],
    },
    {
      name: 'Up to 50 people', price: 'USD 499', cadence: '/mo', cta: 'Talk to sales',
      features: ['Everything above', 'Assisted onboarding (1 session)', 'Agreed uptime SLA', 'Direct Slack/WhatsApp channel'],
    },
    {
      name: 'More than 50', price: 'Custom', cadence: '', cta: 'Contact us',
      features: ['Custom pricing', 'Full onboarding', 'Custom integrations', 'Negotiable SLA'],
    },
  ]
  const link = isEs ? WHATSAPP_LINKS.es : WHATSAPP_LINKS.en

  return (
    <Section id="pricing">
      <SectionHeader
        eyebrow={isEs ? 'Planes' : 'Plans'}
        title={isEs ? 'Pricing transparente.' : 'Transparent pricing.'}
        subtitle={isEs ? 'Mensual o anual. Sin permanencia.' : 'Monthly or annual. No lock-in.'}
      />
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 16, marginTop: 36, alignItems: 'stretch',
      }}>
        {tiers.map((tier, i) => (
          <div key={i} style={{
            position: 'relative',
            background: tier.highlight ? `linear-gradient(160deg, ${VOLVE.violet} 0%, ${VOLVE.violetStrong} 100%)` : VOLVE.cardBg,
            color: tier.highlight ? '#fff' : VOLVE.graphite,
            borderRadius: 18, padding: '26px 22px',
            border: tier.highlight ? 'none' : `1px solid ${VOLVE.border}`,
            boxShadow: tier.highlight ? '0 16px 40px rgba(110,107,179,0.32)' : '0 4px 14px rgba(110,107,179,0.05)',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            {tier.highlight && (
              <span style={{
                position: 'absolute', top: -10, right: 18,
                fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase',
                background: '#fff', color: VOLVE.violet,
                padding: '4px 10px', borderRadius: 999,
                boxShadow: '0 4px 10px rgba(0,0,0,0.10)',
              }}>{tier.highlight}</span>
            )}
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 600, opacity: tier.highlight ? 0.85 : 1, color: tier.highlight ? '#fff' : VOLVE.textSecondary, margin: '0 0 8px', letterSpacing: 0.2 }}>{tier.name}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1 }}>{tier.price}</span>
                {tier.cadence && <span style={{ fontSize: 14, opacity: 0.75 }}>{tier.cadence}</span>}
              </div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9, flex: 1 }}>
              {tier.features.map((f, j) => (
                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, lineHeight: 1.5, opacity: tier.highlight ? 0.95 : 1 }}>
                  <span style={{ color: tier.highlight ? '#fff' : VOLVE.violet, marginTop: 2, flexShrink: 0 }}><IconCheckSm /></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={link} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'block', textAlign: 'center', padding: '11px 14px',
                borderRadius: 11, fontSize: 13.5, fontWeight: 600, textDecoration: 'none',
                background: tier.highlight ? '#fff' : VOLVE.violet,
                color: tier.highlight ? VOLVE.violet : '#fff',
              }}
            >{tier.cta}</a>
          </div>
        ))}
      </div>

      <p style={{
        fontSize: 12.5, color: VOLVE.textSecondary, lineHeight: 1.6,
        textAlign: 'center', maxWidth: 640, margin: '28px auto 0',
      }}>
        {isEs
          ? 'Los planes B2B se rigen por un Master Service Agreement (MSA) específico, no por los Términos y Condiciones públicos.'
          : 'B2B plans are governed by a specific Master Service Agreement (MSA), not by the public Terms of Service.'}
      </p>
    </Section>
  )
}

// ── Sección 5: Casos de uso ────────────────────────────────────────
function CasosDeUso({ isEs }: { isEs: boolean }) {
  return (
    <Section bg={VOLVE.pageBg}>
      <SectionHeader
        eyebrow={isEs ? 'Casos de uso' : 'Case studies'}
        title={isEs ? 'Equipos que confían en Volvé.' : 'Teams that trust Volvé.'}
      />
      <div style={{
        marginTop: 32, padding: '52px 32px',
        background: VOLVE.cardBg, borderRadius: 18,
        border: `1.5px dashed ${VOLVE.border}`,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 28, marginBottom: 10, opacity: 0.6 }}>💬</div>
        <p style={{ fontSize: 14.5, fontWeight: 600, color: VOLVE.graphite, margin: 0 }}>
          {isEs
            ? 'Pronto vas a ver acá los primeros equipos protegidos por Volvé.'
            : "Soon you'll see here the first teams protected by Volvé."}
        </p>
      </div>
    </Section>
  )
}

// ── Sección 6: FAQ ─────────────────────────────────────────────────
function FAQ({ isEs }: { isEs: boolean }) {
  const items = isEs ? [
    {
      q: '¿Qué ven los admins de mi empresa sobre las empleadas?',
      a: 'Solo metadata operacional: estado de cada sesión (activa, finalizada, alerta disparada), duración, cantidad de sesiones por mes. NO ven la ubicación en tiempo real, NO ven los datos de la persona con quien se reúne la empleada, NO ven el historial de recorridos.',
    },
    {
      q: '¿Cómo se respeta la privacidad de las empleadas?',
      a: 'Cada empleada tiene su cuenta personal y controla qué datos sube. Los admins ven solo metadata agregada, nunca contenido sensible. La empleada usa la app igual que un usuario personal — el plan B2B agrega compliance reporting sin reducir su privacidad.',
    },
    {
      q: '¿Cómo se factura?',
      a: 'Mensual o anual, en USD. Coordinamos el método de pago al firmar el MSA (transferencia internacional, tarjeta corporativa o factura local en pesos para empresas argentinas).',
    },
    {
      q: '¿Cómo es el soporte?',
      a: 'Soporte por email a soporte@volve-app.com para todos los planes. Los tiempos de respuesta y canales prioritarios (Slack/WhatsApp directo) se acuerdan en el MSA según el plan contratado.',
    },
    {
      q: '¿Cómo es el contrato y el SLA?',
      a: 'Master Service Agreement (MSA) específico para B2B, separado de los Términos y Condiciones públicos. Los términos exactos (SLA de uptime, tratamiento de datos, procedimientos de incidente, terminación) se acuerdan al firmar y se ajustan al plan contratado.',
    },
  ] : [
    {
      q: "What do my company's admins see about employees?",
      a: 'Only operational metadata: status of each session (active, ended, alert triggered), duration, sessions per month. They do NOT see real-time location, they do NOT see the data of the person the employee is meeting, they do NOT see route history.',
    },
    {
      q: 'How is employee privacy respected?',
      a: 'Each employee has her own personal account and controls what data she uploads. Admins see only aggregated metadata, never sensitive content. Employees use the app just like personal users — the B2B plan adds compliance reporting without reducing their privacy.',
    },
    {
      q: 'How is billing handled?',
      a: 'Monthly or annual, in USD. The payment method (international wire, corporate card, or local invoice in ARS for Argentine companies) is agreed upon when the MSA is signed.',
    },
    {
      q: 'How does support work?',
      a: 'Email support at soporte@volve-app.com for all plans. Response times and priority channels (direct Slack/WhatsApp) are agreed upon in the MSA based on the contracted plan.',
    },
    {
      q: 'How does the contract and SLA work?',
      a: 'A B2B-specific Master Service Agreement (MSA), separate from the public Terms of Service. Exact terms (uptime SLA, data processing, incident procedures, termination) are agreed at signing and tailored to the contracted plan.',
    },
  ]

  return (
    <Section>
      <SectionHeader
        eyebrow="FAQ"
        title={isEs ? 'Preguntas frecuentes.' : 'Frequently asked questions.'}
      />
      <div style={{
        marginTop: 32, maxWidth: 760, marginInline: 'auto',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        {items.map(({ q, a }, i) => (
          <details key={i} style={{
            background: VOLVE.cardBg, borderRadius: 14,
            border: `1px solid ${VOLVE.border}`,
            padding: '16px 20px',
            boxShadow: '0 2px 8px rgba(110,107,179,0.04)',
          }}>
            <summary style={{
              cursor: 'pointer', listStyle: 'none',
              fontSize: 15, fontWeight: 600, color: VOLVE.graphite, lineHeight: 1.4,
            }}>{q}</summary>
            <p style={{ fontSize: 14, color: VOLVE.textSecondary, lineHeight: 1.65, margin: '10px 0 0' }}>{a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}

// ── Sección 7: ¿Hablamos? ──────────────────────────────────────────
function Hablamos({ isEs }: { isEs: boolean }) {
  const link = isEs ? WHATSAPP_LINKS.es : WHATSAPP_LINKS.en

  return (
    <Section bg={VOLVE.pageBg}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.02em',
          margin: '0 0 14px', color: VOLVE.graphite,
        }}>
          {isEs ? '¿Hablamos?' : "Let's talk."}
        </h2>
        <p style={{ fontSize: 16, color: VOLVE.textSecondary, lineHeight: 1.6, margin: '0 0 32px' }}>
          {isEs
            ? 'Te contactamos rápido por el canal que elijas. Sin formularios largos.'
            : 'Pick a channel and we get back to you. No long forms.'}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <a
            href={link} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: VOLVE.whatsapp, color: '#fff',
              padding: '14px 24px', borderRadius: 14,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(37,211,102,0.32)',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = VOLVE.whatsappDark)}
            onMouseLeave={e => (e.currentTarget.style.background = VOLVE.whatsapp)}
          >
            <IconWhatsapp size={18} />
            <span>WhatsApp Business</span>
          </a>
          <a
            href="mailto:soporte@volve-app.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: VOLVE.cardBg, color: VOLVE.graphite,
              padding: '14px 24px', borderRadius: 14,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
              border: `1.5px solid ${VOLVE.border}`,
            }}
          >
            ✉️ soporte@volve-app.com
          </a>
        </div>
      </div>
    </Section>
  )
}

// ── Helpers ────────────────────────────────────────────────────────
function Section({ id, bg = VOLVE.cardBg, children }: { id?: string; bg?: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ background: bg, padding: '72px 32px', borderTop: `1px solid ${VOLVE.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>{children}</div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
      <div style={{
        display: 'inline-block',
        fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase',
        color: VOLVE.violet, background: 'rgba(110,107,179,0.10)',
        padding: '4px 12px', borderRadius: 999, marginBottom: 16,
      }}>{eyebrow}</div>
      <h2 style={{
        fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.02em',
        margin: '0 0 12px', color: VOLVE.graphite, lineHeight: 1.2,
      }}>{title}</h2>
      {subtitle && (
        <p style={{ fontSize: 15.5, color: VOLVE.textSecondary, lineHeight: 1.65, margin: 0 }}>{subtitle}</p>
      )}
    </div>
  )
}
