<template>
  <div class="container">
    <Header :small="true">
      <h1>Workshops</h1>
    </Header>
    <ContentHolder>
      <ContentBlock :reversed="true">
        <template #content>
          <p>
            Zoek je een inspirerende workshop of een gastles? Dan ben je bij Ina aan het juiste adres.
            Uiteraard zijn er veel mogelijkheden. Samen komen we tot een passend programma.
          </p>
        </template>
        <template #image>
          <img src="~assets/images/pexels-ksenia-chernaya-3965557.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
  </div>
</template>

<script>
export default {
  head() {
    // Set Meta Tags for this Page
  }
};
</script>
