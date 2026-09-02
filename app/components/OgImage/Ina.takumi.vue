<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    style="display: flex; flex-direction: column; justify-content: center; width: 100%; height: 100%; background: #3921b1; color: #fff; padding: 80px;"
  >
    <div style="display: flex; font-size: 28px; opacity: 0.8;">
      Kleding op maat — Ina Lubbers
    </div>
    <div style="display: flex; font-size: 64px; line-height: 1.15; margin-top: 24px;">
      {{ title }}
    </div>
    <div
      v-if="description"
      style="display: flex; font-size: 28px; line-height: 1.4; margin-top: 28px; opacity: 0.9;"
    >
      {{ description }}
    </div>
  </div>
</template>
