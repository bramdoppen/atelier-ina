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
  return `${props.intro}

**${s.businessName}**

${s.street}
${s.postalCode} ${s.city}

[${s.phoneDisplay}](tel:${s.phoneTel})`
})
</script>
