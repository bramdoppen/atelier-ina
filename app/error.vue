<template>
  <NuxtLayout>
    <div class="container">
      <Header heading="Pagina niet gevonden" small />
      <ContentHolder>
        <ContentBlock
          body="De pagina kon niet gevonden worden."
          image="/images/pexels_ksenia_cherna_75XV8.jpg"
          image-alt="Kleurrijke stoffen voor een workshop"
          :cta="{ label: 'Terug naar homepage', link: '/' }"
        />
      </ContentHolder>
    </div>
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: 'Pagina niet gevonden - Kleding op maat - Ina Lubbers Lensink',
  robots: 'noindex, nofollow'
})
</script>
