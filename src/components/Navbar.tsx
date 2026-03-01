import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      backgroundColor: 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #F3F4F6',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 32px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>V</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 17, color: '#111827', letterSpacing: '-0.3px' }}>Volvé</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          <a
            href="#features"
            style={{ fontSize: 14, color: '#4B5563', textDecoration: 'none', fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111827')}
            onMouseLeave={e => (e.currentTarget.style.color = '#4B5563')}
          >
            {t('nav.features')}
          </a>
          <a
            href="#how-it-works"
            style={{ fontSize: 14, color: '#4B5563', textDecoration: 'none', fontWeight: 500 }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111827')}
            onMouseLeave={e => (e.currentTarget.style.color = '#4B5563')}
          >
            {t('nav.howItWorks')}
          </a>
          <a
            href="#download"
            style={{
              fontSize: 14, fontWeight: 600, color: '#fff',
              padding: '9px 22px', borderRadius: 999, textDecoration: 'none',
              backgroundColor: '#7C6CFF',
              boxShadow: '0 2px 12px rgba(124,108,255,0.35)',
              transition: 'opacity 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {t('nav.download')}
          </a>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Language toggle */}
          <button
            onClick={() => i18n.changeLanguage(isEs ? 'en' : 'es')}
            style={{
              fontSize: 13, fontWeight: 500, color: '#6B7280',
              background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px',
              borderRadius: 6,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111827')}
            onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
          >
            {isEs ? 'EN' : 'ES'}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
            style={{
              display: 'none',
              flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              width: 36, height: 36, gap: 5,
              background: 'none', border: 'none', cursor: 'pointer', padding: 4,
            }}
            className="hamburger-btn"
          >
            <span style={{
              display: 'block', width: 20, height: 2, backgroundColor: '#374151', borderRadius: 2,
              transformOrigin: 'center',
              transform: mobileOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              transition: 'transform 0.2s',
            }} />
            <span style={{
              display: 'block', width: 20, height: 2, backgroundColor: '#374151', borderRadius: 2,
              opacity: mobileOpen ? 0 : 1, transition: 'opacity 0.2s',
            }} />
            <span style={{
              display: 'block', width: 20, height: 2, backgroundColor: '#374151', borderRadius: 2,
              transformOrigin: 'center',
              transform: mobileOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              transition: 'transform 0.2s',
            }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: 'hidden', maxHeight: mobileOpen ? 220 : 0,
        transition: 'max-height 0.3s ease',
      }} className="mobile-menu">
        <div style={{
          borderTop: '1px solid #F3F4F6', backgroundColor: '#fff',
          padding: '20px 32px', display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <a href="#features" style={{ fontSize: 14, color: '#374151', fontWeight: 500, textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
            {t('nav.features')}
          </a>
          <a href="#how-it-works" style={{ fontSize: 14, color: '#374151', fontWeight: 500, textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>
            {t('nav.howItWorks')}
          </a>
          <a
            href="#download"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 600, color: '#fff',
              padding: '12px', borderRadius: 12, textDecoration: 'none',
              backgroundColor: '#7C6CFF',
            }}
            onClick={() => setMobileOpen(false)}
          >
            {t('nav.download')}
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
