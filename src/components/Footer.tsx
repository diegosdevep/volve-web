import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer style={{ backgroundColor: '#090910', color: '#9CA3AF' }}>

      {/* Main content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 32px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 40,
        }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{
                width: 34, height: 34,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>V</span>
              </div>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 17, letterSpacing: '-0.3px' }}>Volvé</span>
            </div>
            <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7, maxWidth: 220 }}>
              {t('footer.tagline')}
            </p>
          </div>

          {/* Legal */}
          <div>
            <div style={{
              fontSize: 10, fontWeight: 600, color: '#4B5563',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16,
            }}>
              Legal
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link
                to="/privacy"
                style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms"
                style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>

          {/* Emergencies */}
          <div>
            <div style={{
              fontSize: 10, fontWeight: 600, color: '#4B5563',
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16,
            }}>
              Emergencias
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="tel:911"
                style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
              >
                <span>🇦🇷</span>
                <span>911 — Argentina</span>
              </a>
              <a
                href="tel:112"
                style={{ fontSize: 14, color: '#9CA3AF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9CA3AF')}
              >
                <span>🌐</span>
                <span>112 — Internacional</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1F2937' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', padding: '18px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 8,
        }}>
          <p style={{ fontSize: 12, color: '#4B5563', margin: 0 }}>{t('footer.rights')}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#4B5563' }}>
            <span>Hecho con</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#EF4444">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
            </svg>
            <span>en Argentina</span>
          </div>
        </div>
      </div>

    </footer>
  )
}
