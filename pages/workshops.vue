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
          <img src="~assets/images/compressed/pexels_ksenia_cherna_75XV8.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
  </div>
</template>

<script>
export default {
  head: {
    title: "Workshops en groepslessen - Kleding op maat - Ina Lubbers Lensink"
  }
};
</script>
