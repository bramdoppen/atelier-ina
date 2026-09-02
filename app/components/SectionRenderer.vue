<template>
  <div>
    <template v-for="(section, index) in sections" :key="index">
      <Header
        v-if="section.type === 'pageHeader'"
        :heading="section.heading"
        :tint="section.tint"
        :small="section.small"
      />
      <ContentHolder v-else>
        <OverIna
          v-if="section.type === 'aboutBlock'"
          :heading="section.heading"
          :body="section.body"
          :portrait="section.portrait"
          :portrait-alt="section.portraitAlt"
          :landscape="section.landscape"
          :landscape-alt="section.landscapeAlt"
        />
        <ContentBlock
          v-else-if="section.type === 'contentBlock'"
          :heading="section.heading"
          :body="section.body"
          :image="section.image"
          :image-alt="section.imageAlt"
          :reversed="section.reversed"
          :cta="section.cta"
        />
        <Stappenplan
          v-else-if="section.type === 'steps'"
          :heading="section.heading"
          :intro="section.intro"
          :steps="section.steps"
          :outro="section.outro"
        />
        <PhotoGallery
          v-else-if="section.type === 'gallery'"
          :title="section.title"
          :sub="section.sub"
          :items="galleryItems(section.images)"
        />
        <FaqBlock
          v-else-if="section.type === 'faq'"
          :heading="section.heading"
          :items="section.items"
        />
        <ContactDetails
          v-else-if="section.type === 'contactDetails'"
          :intro="section.intro"
          :image="section.image"
          :image-alt="section.imageAlt"
        />
      </ContentHolder>
    </template>
  </div>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    default: () => []
  }
})

const galleryItems = (images = []) =>
  images.map((image) => ({
    src: image.src,
    thumbnail: image.src,
    w: image.w,
    h: image.h,
    title: image.title || image.alt || '',
    alt: image.alt || image.title || ''
  }))
</script>
