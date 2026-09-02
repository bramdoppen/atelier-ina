import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const ctaSchema = z.object({
  label: z.string(),
  link: z.string()
})

const galleryImageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  title: z.string().optional(),
  w: z.number(),
  h: z.number()
})

const sectionSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('pageHeader'),
    heading: z.string(),
    tint: z.string().optional(),
    small: z.boolean().optional()
  }),
  z.object({
    type: z.literal('aboutBlock'),
    heading: z.string().optional(),
    body: z.string(),
    portrait: z.string(),
    portraitAlt: z.string().optional(),
    landscape: z.string(),
    landscapeAlt: z.string().optional()
  }),
  z.object({
    type: z.literal('contentBlock'),
    heading: z.string().optional(),
    body: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    reversed: z.boolean().optional(),
    cta: ctaSchema.optional()
  }),
  z.object({
    type: z.literal('steps'),
    heading: z.string(),
    intro: z.string().optional(),
    steps: z.array(z.string()),
    outro: z.string().optional()
  }),
  z.object({
    type: z.literal('gallery'),
    title: z.string().optional(),
    sub: z.string().optional(),
    images: z.array(galleryImageSchema)
  }),
  z.object({
    type: z.literal('faq'),
    heading: z.string(),
    items: z.array(z.string())
  }),
  z.object({
    type: z.literal('contactDetails'),
    intro: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional()
  })
])

export default defineContentConfig({
  collections: {
    settings: defineCollection({
      type: 'data',
      source: 'settings.yml',
      schema: z.object({
        businessName: z.string(),
        shortName: z.string(),
        phoneDisplay: z.string(),
        phoneTel: z.string(),
        email: z.string().optional(),
        street: z.string(),
        postalCode: z.string(),
        city: z.string(),
        region: z.string(),
        country: z.string(),
        latitude: z.number().optional(),
        longitude: z.number().optional(),
        image: z.string().optional(),
        serviceArea: z.array(z.string()),
        seoDescription: z.string()
      })
    }),
    navigation: defineCollection({
      type: 'data',
      source: 'navigation.yml',
      schema: z.object({
        logoLabel: z.string(),
        items: z.array(
          z.object({
            label: z.string(),
            to: z.string()
          })
        )
      })
    }),
    pages: defineCollection({
      type: 'data',
      source: 'pages/*.yml',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        seo: z.object({
          title: z.string().optional(),
          description: z.string()
        }),
        sections: z.array(sectionSchema)
      })
    }),
    faq: defineCollection({
      type: 'data',
      source: 'faq/*.yml',
      schema: z.object({
        key: z.string(),
        question: z.string(),
        answer: z.string()
      })
    })
  }
})
