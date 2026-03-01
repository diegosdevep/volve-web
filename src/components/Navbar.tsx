import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)' }}>
            <span className="text-white text-sm font-bold">V</span>
          </div>
          <span className="font-bold text-lg text-gray-900">Volvé</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t('nav.features')}</a>
          <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{t('nav.howItWorks')}</a>
          <a href="#download" className="text-sm font-semibold text-white px-4 py-2 rounded-full transition-opacity hover:opacity-90" style={{ backgroundColor: '#7C6CFF' }}>
            {t('nav.download')}
          </a>
        </div>

        {/* Language toggle */}
        <button
          onClick={() => i18n.changeLanguage(isEs ? 'en' : 'es')}
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
        >
          {isEs ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  )
}
