import { getTranslations } from 'next-intl/server'

const PRODUCT_EMOJIS: Record<string, string> = {
  spark40: '🔊',
  sparkMini: '📦',
  sparkGo: '✨',
  biasFx2: '🎛️',
  biasAmp2: '🎚️',
  riff: '🔌',
}

const PRODUCT_COLORS: Record<string, string> = {
  spark40: 'bg-orange-50 border-orange-200',
  sparkMini: 'bg-blue-50 border-blue-200',
  sparkGo: 'bg-green-50 border-green-200',
  biasFx2: 'bg-purple-50 border-purple-200',
  biasAmp2: 'bg-yellow-50 border-yellow-200',
  riff: 'bg-red-50 border-red-200',
}

const BADGE_COLORS: Record<string, string> = {
  'Best Seller': 'bg-orange-500 text-white',
  'New': 'bg-green-500 text-white',
  'Compact': 'bg-blue-500 text-white',
  'Top Rated': 'bg-purple-500 text-white',
  'Essential': 'bg-red-500 text-white',
}

const productKeys = ['spark40', 'sparkMini', 'sparkGo', 'biasFx2', 'biasAmp2', 'riff'] as const

export default async function ProductsPage() {
  const t = await getTranslations('products')
  const tCommon = await getTranslations('common')

  const filterTabs = [
    { key: 'all' },
    { key: 'amps' },
    { key: 'pedals' },
    { key: 'software' },
    { key: 'accessories' },
  ] as const

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('pageTitle')}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{t('pageDescription')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Filter + Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map(({ key }) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  key === 'all'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                {t(`filter.${key}`)}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 whitespace-nowrap font-medium">
              {t('sort.label')}:
            </label>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300">
              <option value="featured">{t('sort.featured')}</option>
              <option value="priceLow">{t('sort.priceLow')}</option>
              <option value="priceHigh">{t('sort.priceHigh')}</option>
              <option value="newest">{t('sort.newest')}</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productKeys.map((key) => {
            const badge = t(`items.${key}.badge`)
            return (
              <div
                key={key}
                className={`rounded-xl border-2 p-6 flex flex-col hover:shadow-lg transition-shadow ${PRODUCT_COLORS[key] ?? 'bg-white border-gray-200'}`}
              >
                {/* Product Image Placeholder */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-5xl">{PRODUCT_EMOJIS[key]}</div>
                  {badge && (
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${BADGE_COLORS[badge] ?? 'bg-gray-200 text-gray-700'}`}
                    >
                      {badge}
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`items.${key}.name`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  {t(`items.${key}.description`)}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-900">
                    {t(`items.${key}.price`)}
                  </span>
                  <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors">
                    {tCommon('buttons.addToCart')}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results Message (hidden by default, shown via JS) */}
        <p className="hidden text-center text-gray-500 py-12 text-lg">
          {t('noResults')}
        </p>
      </div>
    </div>
  )
}
