import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'
import { Locale } from './config'

const messageImports: Record<Locale, () => Promise<{ default: Record<string, unknown> }>> = {
  en: () => import('@/messages/en.json'),
  de: () => import('@/messages/de.json'),
  fr: () => import('@/messages/fr.json'),
  it: () => import('@/messages/it.json'),
  es: () => import('@/messages/es.json'),
  nl: () => import('@/messages/nl.json'),
  be: () => import('@/messages/be.json'),
  at: () => import('@/messages/at.json'),
  tw: () => import('@/messages/tw.json'),
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locale
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale
  }

  const importFn = messageImports[locale] ?? messageImports.en
  const messages = (await importFn()).default

  return { locale, messages }
})
