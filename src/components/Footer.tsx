import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #7C6CFF, #B8AEFF)' }}>
            <span className="text-white text-xs font-bold">V</span>
          </div>
          <span className="text-white font-semibold">Volvé</span>
          <span className="text-gray-600 ml-2 text-sm">{t('footer.tagline')}</span>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
          <Link to="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
        </div>

        <p className="text-sm text-gray-600">{t('footer.rights')}</p>
      </div>
    </footer>
  )
}
