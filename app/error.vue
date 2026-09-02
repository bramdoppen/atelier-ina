<template>
  <div class="container">
    <Header heading="Pagina niet gevonden" small />
    <ContentHolder>
      <ContentBlock
        body="De pagina kon niet gevonden worden."
        image="/images/pexels_ksenia_cherna_75XV8.jpg"
        image-alt=""
        :cta="{ label: 'Terug naar homepage', link: '/' }"
      />
    </ContentHolder>
  </div>
</template>

<script setup>
useHead({
  title: 'Pagina niet gevonden - Kleding op maat - Ina Lubbers Lensink'
})
</script>
