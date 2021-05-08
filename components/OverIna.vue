<template>
  <article class="grid">
    <div class="content spacing-sm">
      <slot />
    </div>
    <div class="image-portrait image-holder">
      <img src="~assets/images/compressed/afpassen.JPG" />
    </div>
    <div class="image-landscape image-holder">
      <img src="~assets/images/compressed/rits.JPG" />
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(8, 1fr);
  gap: 80px;
  margin-bottom: 120px;
}

.image-holder {
  position: relative;
}

.image-holder > img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.image-portrait {
  overflow: hidden;
}

.image-landscape {
  overflow: hidden;
}

@media (min-width: 48em) {
  .image-portrait {
    padding-top: 180%;
    max-height: 800px;
    width: 100%;
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }

  .image-landscape {
    padding-top: 40%;
    grid-column: 4 / 9;
  }

  .content {
    grid-column: 4 / 9;
    grid-row: 2;
    align-self: end;
  }
}

@media (max-width: 48em) {
  .grid {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
