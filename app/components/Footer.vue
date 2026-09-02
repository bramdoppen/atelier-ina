<template>
  <footer class="footer">
    <ContentHolder>
      <div class="footer-grid">
        <div>{{ settings?.shortName || 'Kleding op maat - Ina Lubbers' }}</div>
      </div>
    </ContentHolder>
  </footer>
</template>

<script setup>
const { data: settings } = await useAsyncData('settings', () =>
  queryCollection('settings').first()
)
</script>

<style scoped>
.footer {
  background: #f5f5f5;
  padding: 40px 0;
}

.footer-grid {
  display: grid;
  gap: var(--container-spacing);
}
</style>
