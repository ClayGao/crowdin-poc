'use client'

import { useTranslations } from 'next-intl'
import { Link, useRouter, usePathname } from '@/i18n/navigation'
import { locales, MARKETS } from '@/i18n/config'
import { useState } from 'react'

export default function Header() {
  const t = useTranslations('common')
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const navLinks = [
    { href: '/' as const, label: t('nav.home') },
    { href: '/products' as const, label: t('nav.products') },
    { href: '/about' as const, label: t('nav.about') },
  ]

  function handleLocaleChange(locale: string) {
    router.push(pathname, { locale })
    setLangOpen(false)
  }

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-orange-400 transition-colors">
          <span className="text-2xl">🎸</span>
          <span>Positive Grid</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              aria-label={t('languageSwitcher.label')}
              className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
            >
              <span>🌐</span>
              <span className="hidden sm:inline text-gray-300">{t('languageSwitcher.label')}</span>
              <svg
                className={`w-3 h-3 text-gray-400 transition-transform ${langOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-50">
                <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {t('languageSwitcher.currentMarket')}
                </p>
                {locales.map((locale) => {
                  const market = MARKETS[locale]
                  return (
                    <button
                      key={locale}
                      onClick={() => handleLocaleChange(locale)}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      <span>{market.flag}</span>
                      <span>{market.name}</span>
                      <span className="ml-auto text-xs text-gray-400 uppercase">{locale}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-800 px-4 py-3 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
