export default defineNuxtConfig({
  compatibilityDate: '2026-09-02',
  modules: ['@nuxt/eslint', '@nuxt/content', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://www.kledingopmaat-inalubbers.nl',
    name: 'Kleding op maat - Ina Lubbers Lensink',
    description:
      'Wekelijkse naailessen, workshops of op zoek naar kleding op maat? Met veel enthousiasme en kennis van zaken maakt Ina Lubbers van ieder lapje stof iets moois.',
    defaultLocale: 'nl'
  },
  seo: {
    titleTemplate: '%s'
  },
  content: {
    experimental: {
      sqliteConnector: 'native'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl'
      },
      titleTemplate: '%s',
      title: 'Kleding op maat - Ina Lubbers Lensink',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  postcss: {
    plugins: {
      '@csstools/postcss-global-data': {
        files: ['./app/assets/css/media.css']
      },
      'postcss-custom-media': {},
      'postcss-nesting': {}
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/naailessen', '/kleding-op-maat', '/workshops', '/contact']
    }
  }
})
