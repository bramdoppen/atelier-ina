<template>
  <header class="container" :class="{ small }">
    <div class="content-holder">
      <div ref="grid" class="grid">
        <h1>
          {{ heading }}<span v-if="tint" class="tint"> {{ tint }}</span>
        </h1>
      </div>
    </div>
    <img src="~/assets/images/style-element/one.svg" class="style-element one" alt="" />
    <img
      src="~/assets/images/style-element/two.svg"
      class="style-element two right"
      alt=""
    />
  </header>
</template>

<script setup>
import { gsap } from 'gsap'

defineProps({
  heading: {
    type: String,
    required: true
  },
  tint: {
    type: String,
    default: ''
  },
  small: {
    type: Boolean,
    default: false
  }
})

const grid = ref(null)

onMounted(() => {
  const headerText = grid.value?.querySelector('h1')
  if (!headerText) return
  gsap.fromTo(
    headerText,
    { x: 20, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.4, ease: 'circ.out' }
  )
})
</script>

<style scoped>
.container {
  --space: calc(var(--container-spacing) * 2);

  width: 100%;
  padding-top: var(--space);
  padding-bottom: var(--space);
  position: relative;

  @media (--max48) {
    --space: var(--container-spacing);
  }

  &.small {
    --space: var(--container-spacing);
  }
}

.content-holder {
  max-width: 1320px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

.grid {
  @media (--min48) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: var(--container-spacing);
    overflow: hidden;
  }
}

h1 {
  color: var(--darkblue);

  @media (--min48) {
    grid-column: 2 / span 6;
  }
}

span.tint {
  color: var(--blue);
}

.style-element {
  position: absolute;
  left: auto;
  top: 250px;
  right: 60%;

  @media (--max48) {
    top: 160px;
    right: 80%;
  }

  &.one {
    height: 1340px;
    width: 750px;
    transform: rotate(30deg);
    transform-origin: top left;

    @media (--max48) {
      height: calc(1340px / 4);
      width: calc(750px / 4);
      top: 0;
      right: -77px;
      transform: rotate(-25deg);
      transform-origin: top right;
    }
  }

  &.two {
    height: 500px;
    width: 500px;

    @media (--max48) {
      height: 290px;
      width: 200px;
    }
  }

  &.right {
    top: 620px;
    right: 0;

    @media (--max48) {
      top: 120px;
      left: 0;
      right: auto;
    }
  }
}
</style>
