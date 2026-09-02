<template>
  <ContentBlock
    :body="body"
    :image="image"
    :image-alt="imageAlt"
  />
</template>

<script setup>
const props = defineProps({
  intro: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    default: ''
  }
})

const { data: settings } = await useAsyncData('settings', () =>
  queryCollection('settings').first()
)

const body = computed(() => {
  const s = settings.value
  if (!s) return props.intro
  const address = `${s.street}, ${s.postalCode} ${s.city}`
  return `${props.intro}

**${s.businessName}**

[${address}](${mapsUrl(s)})

[${s.phoneDisplay}](tel:${s.phoneTel})`
})
</script>
