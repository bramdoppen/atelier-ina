<template>
  <article class="grid" :class="{ reversed: reversed }">
    <div class="content spacing-sm">
      <slot name="content" />
    </div>
    <picture>
      <slot name="image" />
    </picture>
  </article>
</template>

<script>
export default {
  props: {
    reversed: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  grid-auto-flow: row dense;
  gap: 80px;
  align-items: center;
}

@media (min-width: 48em) {
  .grid.reversed > *:first-child {
    order: 1;
  }
}

picture {
  height: 500px;
  background: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
}

picture > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
