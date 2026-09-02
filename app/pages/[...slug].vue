<template>
  <div v-if="page" class="container">
    <SectionRenderer :sections="page.sections" />
  </div>
</template>

<script setup>
const route = useRoute()
const slug = computed(() => (route.path === '/' ? '/' : route.path))

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
  ogDescription: seoDescription
})

defineOgImageComponent('Ina', {
  title: seoTitle,
  description: seoDescription
})

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
    nodes.push({
      '@type': ['LocalBusiness', 'ProfessionalService'],
      name: s.businessName,
      url: 'https://www.kledingopmaat-inalubbers.nl',
      telephone: s.phoneTel,
      address: {
        '@type': 'PostalAddress',
        streetAddress: s.street,
        postalCode: s.postalCode,
        addressLocality: s.city,
        addressRegion: s.region,
        addressCountry: s.country
      },
      areaServed: s.serviceArea
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
