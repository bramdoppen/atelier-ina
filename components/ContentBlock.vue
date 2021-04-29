<template>
  <article class="grid" :class="{ reversed: reversed }">
    <div class="content">
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
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "content image";
  gap: 80px;
  align-items: center;
}

.grid.reversed {
  grid-template-areas: "image content";
}

@media (max-width: 48em) {
  .grid,
  .grid.reversed {
    grid-template-columns: 1fr;
    grid-template-areas: "image" " content";
  }
}

.content {
  display: grid;
  justify-items: start;
  gap: 20px;
  grid-area: content;
}

picture {
  height: 500px;
  background: #f5f5f5;
  border-radius: 10px;
  grid-area: image;
  overflow: hidden;
}

picture > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
