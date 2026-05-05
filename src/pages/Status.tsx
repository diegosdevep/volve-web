import { useTranslation } from 'react-i18next'

export default function Status() {
  const { i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#F2F2F7',
    }}>
      <div style={{
        textAlign: 'center', maxWidth: 480,
        background: '#FFFFFF', borderRadius: 16, padding: '44px 32px',
        border: '1px solid #E1DFF0',
        boxShadow: '0 12px 32px rgba(110,107,179,0.08)',
      }}>
        <div style={{ fontSize: 44, marginBottom: 16 }}>📊</div>
        <h1 style={{
          fontSize: 24, fontWeight: 700, color: '#2E2E38',
          margin: '0 0 12px', letterSpacing: '-0.3px',
        }}>
          {isEs ? 'Estado del servicio' : 'Service status'}
        </h1>
        <p style={{
          fontSize: 15, color: '#8E8E97',
          lineHeight: 1.65, margin: 0,
        }}>
          {isEs
            ? 'Pronto vas a poder ver aquí el uptime en tiempo real de cada componente de Volvé.'
            : 'Real-time uptime monitoring for each Volvé component is coming soon.'}
        </p>
      </div>
    </div>
  )
}
