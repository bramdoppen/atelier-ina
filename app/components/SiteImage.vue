<template>
  <img v-if="src" :src="src" :alt="alt" />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>
