<template>
  <div v-if="page" class="container">
    <SectionRenderer :sections="page.sections" />
  </div>
</template>

<script setup>
const route = useRoute()
const site = useSiteConfig()
const slug = computed(() => {
  const path = route.path
  if (path === '/') return '/'
  return path.replace(/\/+$/, '')
})

const { data: page } = await useAsyncData(
  () => `page-${slug.value}`,
  () => queryCollection('pages').where('slug', '=', slug.value).first()
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Pagina niet gevonden'
  })
}

const { data: settings } = await useAsyncData('settings', () =>
  queryCollection('settings').first()
)

const { data: faqs } = await useAsyncData('faq', () => queryCollection('faq').all())

const seoTitle = computed(
  () => page.value?.seo?.title || page.value?.title || settings.value?.shortName
)
const seoDescription = computed(
  () => page.value?.seo?.description || settings.value?.seoDescription
)

useSeoMeta({
  title: seoTitle,
  description: seoDescription,
  ogTitle: seoTitle,
  ogDescription: seoDescription,
  ogLocale: 'nl_NL'
})

defineOgImageComponent('Ina', {
  title: seoTitle,
  description: seoDescription
})

const origin = computed(() => String(site.url || '').replace(/\/$/, ''))

const absoluteUrl = (path) => {
  const base = origin.value
  if (!path || path === '/') return `${base}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized.endsWith('/') ? normalized : `${normalized}/`}`
}

const faqIds = computed(() =>
  (page.value?.sections || [])
    .filter((section) => section.type === 'faq')
    .flatMap((section) => section.items || [])
)

const pageFaqs = computed(() => {
  const list = faqs.value || []
  return faqIds.value
    .map((id) => list.find((faq) => faq.key === id))
    .filter(Boolean)
})

useSchemaOrg(() => {
  const nodes = []
  const s = settings.value
  if (s) {
    const business = {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      name: s.businessName,
      url: `${origin.value}/`,
      telephone: s.phoneTel,
      address: {
        '@type': 'PostalAddress',
        streetAddress: s.street,
        postalCode: s.postalCode,
        addressLocality: s.city,
        addressRegion: s.region,
        addressCountry: s.country
      },
      areaServed: s.serviceArea,
      hasMap: mapsUrl(s)
    }
    if (s.image) {
      const imageUrl = `${origin.value}${s.image}`
      business.image = imageUrl
      business.logo = imageUrl
    }
    if (s.latitude != null && s.longitude != null) {
      business.geo = {
        '@type': 'GeoCoordinates',
        latitude: s.latitude,
        longitude: s.longitude
      }
    }
    nodes.push(business)
  }
  if (page.value) {
    const crumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${origin.value}/`
      }
    ]
    if (slug.value !== '/') {
      crumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: page.value.title,
        item: absoluteUrl(slug.value)
      })
    }
    nodes.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs
    })
  }
  if (pageFaqs.value.length) {
    nodes.push({
      '@type': 'FAQPage',
      mainEntity: pageFaqs.value.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    })
  }
  return nodes
})
</script>
