import { getTranslations } from 'next-intl/server'

const teamKeys = ['ceo', 'cto', 'design'] as const
const teamEmojis: Record<string, string> = {
  ceo: '👩‍💼',
  cto: '👨‍💻',
  design: '🎨',
}

const stats = [
  { valueKey: 'musicians', labelKey: 'musiciansLabel', emoji: '🎸' },
  { valueKey: 'countries', labelKey: 'countriesLabel', emoji: '🌍' },
  { valueKey: 'tones', labelKey: 'tonesLabel', emoji: '🎵' },
  { valueKey: 'awards', labelKey: 'awardsLabel', emoji: '🏆' },
] as const

export default async function AboutPage() {
  const t = await getTranslations('about')
  const tCommon = await getTranslations('common')

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('pageTitle')}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{t('pageDescription')}</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-4xl">📖</div>
            <h2 className="text-3xl font-bold text-gray-900">{t('story.title')}</h2>
          </div>
          <div className="prose prose-lg max-w-none space-y-5 text-gray-700 leading-relaxed">
            <p>{t('story.paragraph1')}</p>
            <p>{t('story.paragraph2')}</p>
            <p>{t('story.paragraph3')}</p>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-14 px-4 bg-orange-500 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ valueKey, labelKey, emoji }) => (
              <div key={valueKey}>
                <div className="text-3xl mb-2">{emoji}</div>
                <div className="text-3xl font-bold mb-1">{t(`stats.${valueKey}`)}</div>
                <div className="text-sm text-orange-100">{t(`stats.${labelKey}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('team.title')}</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">{t('team.description')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamKeys.map((key) => (
              <div
                key={key}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-6xl mb-4">{teamEmojis[key]}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{t(`team.${key}.name`)}</h3>
                <p className="text-sm font-medium text-orange-500 mb-4">{t(`team.${key}.role`)}</p>
                <p className="text-gray-600 leading-relaxed">{t(`team.${key}.bio`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4">✉️</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-gray-600">{t('contact.description')}</p>
          </div>
          <form className="space-y-5" action="#">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t('contact.nameLabel')}
                </label>
                <input
                  type="text"
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t('contact.subjectLabel')}
              </label>
              <input
                type="text"
                placeholder={t('contact.subjectPlaceholder')}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {t('contact.messageLabel')}
              </label>
              <textarea
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-900 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              {t('contact.submit')}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
