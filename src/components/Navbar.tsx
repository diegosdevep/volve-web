import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const isEs = i18n.language.startsWith('es')
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)' }}
          >
            <span className="text-white text-sm font-bold">V</span>
          </div>
          <span className="font-bold text-lg text-gray-900 tracking-tight">Volvé</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
            {t('nav.features')}
          </a>
          <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
            {t('nav.howItWorks')}
          </a>
          <a
            href="#download"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90"
            style={{ backgroundColor: '#7C6CFF', boxShadow: '0 2px 12px rgba(124,108,255,0.35)' }}
          >
            {t('nav.download')}
          </a>
        </div>

        {/* Right: language + hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => i18n.changeLanguage(isEs ? 'en' : 'es')}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium"
          >
            {isEs ? 'EN' : 'ES'}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span
              className="block w-5 h-0.5 bg-gray-700 origin-center transition-all duration-200"
              style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-0.5 bg-gray-700 transition-all duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-gray-700 origin-center transition-all duration-200"
              style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 220 : 0 }}
      >
        <div className="border-t border-gray-100 bg-white px-6 py-5 flex flex-col gap-4">
          <a
            href="#features"
            className="text-sm text-gray-700 font-medium hover:text-gray-900"
            onClick={() => setOpen(false)}
          >
            {t('nav.features')}
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-gray-700 font-medium hover:text-gray-900"
            onClick={() => setOpen(false)}
          >
            {t('nav.howItWorks')}
          </a>
          <a
            href="#download"
            className="inline-flex items-center justify-center text-sm font-semibold text-white py-3 rounded-xl"
            style={{ backgroundColor: '#7C6CFF' }}
            onClick={() => setOpen(false)}
          >
            {t('nav.download')}
          </a>
        </div>
      </div>
    </nav>
  )
}
