<template>
  <article ref="container" class="grid" :class="{ reversed }">
    <picture v-if="image" ref="picture">
      <SiteImage :src="image" :alt="imageAlt" />
    </picture>
    <div
      ref="content"
      class="content spacing-sm"
      :class="{ 'set-max': !image }"
    >
      <h2 v-if="heading">{{ heading }}</h2>
      <MarkdownBody :value="body" />
      <Button v-if="cta" :link="cta.link">{{ cta.label }}</Button>
    </div>
  </article>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

defineProps({
  reversed: {
    type: Boolean,
    default: false
  },
  heading: {
    type: String,
    default: ''
  },
  body: {
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
  },
  cta: {
    type: Object,
    default: null
  }
})

const container = ref(null)
const picture = ref(null)
const content = ref(null)

onMounted(() => {
  const triggers = [content.value]
  if (picture.value) {
    triggers.push(picture.value)
  }
  gsap.fromTo(
    triggers,
    {
      opacity: 0,
      y: 20
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'circ.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: container.value,
        once: true
      }
    }
  )
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  grid-auto-flow: row dense;
  gap: var(--container-spacing);
  align-items: center;

  @media (--max48) {
    gap: calc(var(--container-spacing) / 2);
  }
}

@media (--min48) {
  .grid.reversed > *:first-child {
    order: 1;
  }
}

picture {
  background: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  position: relative;

  &::before {
    content: "";
    display: block;
    padding-top: 65%;
  }
}

picture > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content.set-max {
  @media (--min48) {
    max-width: 50%;
  }
}

.content :deep(p + p) {
  margin-top: 20px;
}
</style>
