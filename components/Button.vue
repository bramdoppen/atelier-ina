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
};
</script>

<style scoped>
.btn {
  display: inline-flex;
  padding: 10px 30px;
  text-decoration: none;
  background: transparent;
  border-radius: 3px;
  color: var(--orange);
  font-size: 22px;
  font-weight: 400;
  font-family: var(--font-serif);
  border: 2px solid currentColor;
  transition: filter 0.2s ease;
}

.btn:hover {
  filter: brightness(1.25);
}
</style>
