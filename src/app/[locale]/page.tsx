import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function HomePage() {
  const t = await getTranslations('home')
  const tCommon = await getTranslations('common')

  const features = [
    { key: 'tone', emoji: '🎸' },
    { key: 'portable', emoji: '🎒' },
    { key: 'community', emoji: '🌍' },
    { key: 'software', emoji: '💻' },
  ] as const

  const testimonials = [
    { key: 'guitarist', emoji: '🎵' },
    { key: 'producer', emoji: '🎧' },
    { key: 'teacher', emoji: '🎓' },
  ] as const

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🎸</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
            >
              {t('hero.cta')}
            </Link>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 text-lg">
              {t('hero.secondaryCta')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('features.sectionTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              {t('features.sectionSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ key, emoji }) => (
              <div
                key={key}
                className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('testimonials.sectionTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ key, emoji }) => (
              <div
                key={key}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  &ldquo;{t(`testimonials.items.${key}.quote`)}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">
                    {t(`testimonials.items.${key}.author`)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t(`testimonials.items.${key}.role`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-orange-500">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('newsletter.title')}</h2>
          <p className="text-lg text-orange-100 mb-8">{t('newsletter.description')}</p>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="px-5 py-3 rounded-lg text-gray-900 flex-1 max-w-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-7 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
            >
              {t('newsletter.cta')}
            </button>
          </form>
          <p className="mt-4 text-sm text-orange-100">{t('newsletter.disclaimer')}</p>
        </div>
      </section>
    </>
  )
}
