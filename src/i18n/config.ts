export const locales = ['en', 'de', 'fr', 'it', 'es', 'nl', 'be', 'at'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

/**
 * Market → language mapping (mirrors Alto architecture)
 * Some markets share a language but have different locale context
 */
export const MARKETS: Record<Locale, { name: string; language: string; flag: string }> = {
  en: { name: 'United States', language: 'en', flag: '🇺🇸' },
  de: { name: 'Germany', language: 'de', flag: '🇩🇪' },
  fr: { name: 'France', language: 'fr', flag: '🇫🇷' },
  it: { name: 'Italy', language: 'it', flag: '🇮🇹' },
  es: { name: 'Spain', language: 'es', flag: '🇪🇸' },
  nl: { name: 'Netherlands', language: 'nl', flag: '🇳🇱' },
  be: { name: 'Belgium', language: 'fr', flag: '🇧🇪' },
  at: { name: 'Austria', language: 'de', flag: '🇦🇹' },
}
