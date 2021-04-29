<template>
  <NuxtLink :to="link" class="btn">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  padding: 20px;
  background: var(--orange);
}
</style>
