<template>
  <footer class="footer">
    <ContentHolder>
      <address v-if="settings" class="nap">
        <div>{{ settings.shortName }}</div>
        <p class="details">
          <a
            :href="mapsUrl(settings)"
            target="_blank"
            rel="noopener noreferrer"
          >{{ settings.street }}, {{ settings.postalCode }} {{ settings.city }}</a>
          ·
          <a :href="`tel:${settings.phoneTel}`">{{ settings.phoneDisplay }}</a>
        </p>
      </address>
      <div v-else>Kleding op maat - Ina Lubbers</div>
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

.nap {
  font-style: normal;
}

.details {
  margin: 4px 0 0;
  padding: 0;
  font-size: 13px;
  line-height: 1.4;
  color: #9a9a9a;
}

.details a {
  color: inherit;
  text-decoration: none;
}
</style>
