import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)' }}
              >
                <span className="text-white text-sm font-bold">V</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Volvé</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">Legal</div>
            <div className="flex flex-col gap-3">
              <Link to="/privacy" className="text-sm hover:text-white transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/terms" className="text-sm hover:text-white transition-colors">
                {t('footer.terms')}
              </Link>
            </div>
          </div>

          {/* Emergencies */}
          <div>
            <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Emergencias
            </div>
            <div className="flex flex-col gap-3">
              <a href="tel:911" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                <span className="text-gray-600">🇦🇷</span> 911
              </a>
              <a href="tel:112" className="text-sm hover:text-white transition-colors flex items-center gap-2">
                <span className="text-gray-600">🌐</span> 112
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">{t('footer.rights')}</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <span>Hecho con</span>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="#EF4444">
              <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
            </svg>
            <span>en Argentina</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
