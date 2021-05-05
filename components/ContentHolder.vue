<template>
  <section class="container">
    <div class="content-holder">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
}

.content-holder {
  max-width: 1320px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

.container + .container {
  margin-top: var(--container-spacing);
}

@media (--max48) {
  header.container + .container {
    margin-top: 0;
  }
}
</style>
