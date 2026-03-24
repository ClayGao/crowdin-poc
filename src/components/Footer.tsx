import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function Footer() {
  const t = await getTranslations('common.footer')
  const tNav = await getTranslations('common.nav')

  const navLinks = [
    { href: '/' as const, label: tNav('home') },
    { href: '/products' as const, label: tNav('products') },
    { href: '/about' as const, label: tNav('about') },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎸</span>
              <span className="text-xl font-bold">{t('company')}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{t('description')}</p>

            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-300 mb-3">{t('followUs')}</p>
              <div className="flex gap-3">
                {['𝕏', 'f', 'in', '▶'].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center text-sm font-bold transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('privacy')}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">
                {t('terms')}
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {t('newsletter')}
            </h3>
            <form className="flex flex-col gap-3" action="#">
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                {t('subscribe')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
