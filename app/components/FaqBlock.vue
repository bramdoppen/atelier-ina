<template>
  <section v-if="resolved.length" class="faq spacing-sm">
    <h2>{{ heading }}</h2>
    <div class="faq-list">
      <details v-for="item in resolved" :key="item.id" class="faq-item">
        <summary>{{ item.question }}</summary>
        <MarkdownBody :value="item.answer" />
      </details>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: String,
    default: 'Veelgestelde vragen'
  },
  items: {
    type: Array,
    default: () => []
  }
})

const { data: faqs } = await useAsyncData('faq', () => queryCollection('faq').all())

const resolved = computed(() => {
  const list = faqs.value || []
  return props.items
    .map((id) => list.find((faq) => faq.key === id))
    .filter(Boolean)
})
</script>

<style scoped>
.faq-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  width: 100%;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 16px 20px;
}

.faq-item summary {
  cursor: pointer;
  font-family: var(--font-serif);
  font-size: 22px;
  color: var(--darkblue);
  list-style: none;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item :deep(p) {
  margin-top: 12px;
}
</style>
