<template>
  <MDC v-if="value" :value="value" />
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true
  }
})
</script>
