<template>
  <section ref="gallery" class="gallery-grid">
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="sub" class="sub">{{ sub }}</p>
    <section class="gallery-container">
      <div ref="pswp" class="my-gallery">
        <figure v-for="(item, index) in items" :key="index" class="gallery-thumbnail">
          <a
            :href="item.src"
            :data-pswp-width="item.w"
            :data-pswp-height="item.h"
            :data-pswp-caption="item.title || ''"
            :aria-label="item.title || item.alt || 'Vergroot afbeelding'"
            target="_blank"
            rel="noreferrer"
          >
            <img :src="item.thumbnail" :alt="item.title || ''" />
          </a>
        </figure>
      </div>
    </section>
  </section>
</template>

<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  sub: {
    type: String,
    required: false,
    default: ''
  },
  items: {
    type: Array,
    required: false,
    default: () => []
  }
})

const pswp = ref(null)
let lightbox

onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: pswp.value,
    children: 'a',
    pswpModule: () => import('photoswipe')
  })
  lightbox.init()
})

onBeforeUnmount(() => {
  lightbox?.destroy()
  lightbox = undefined
})
</script>

<style scoped>
.gallery-grid {
  display: grid;
}

.sub {
  margin: 20px 0;
}

.gallery-container {
  margin-top: 40px;

  & :deep(.my-gallery) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
    gap: 20px;

    @media (--max48) {
      gap: 10px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  & :deep(.gallery-thumbnail) {
    display: flex;
    width: 100%;
    margin: 0;

    & > a {
      display: flex;
      width: 100%;
      margin: 0;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(1.1);
      }

      &::before {
        content: "";
        display: block;
        padding-top: 90%;
      }
    }

    & img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      object-fit: cover;
    }
  }
}
</style>
