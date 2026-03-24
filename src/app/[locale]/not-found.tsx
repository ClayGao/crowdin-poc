import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function NotFound() {
  const t = await getTranslations('errors.notFound')
  const tCommon = await getTranslations('common')

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-5xl font-bold text-gray-900 mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('title')}</h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{t('description')}</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
        >
          {tCommon('buttons.backToHome')}
        </Link>
      </div>
    </div>
  )
}
