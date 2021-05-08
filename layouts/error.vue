
<template>
  <div class="container">
    <Header :small="true">
      <h1 v-if="error.statusCode === 404">Pagina niet gevonden</h1>
      <h1 v-else>Error</h1>
    </Header>
    <ContentHolder>
      <ContentBlock>
        <template #content>
          <p>
            De pagina kon niet gevonden worden
          </p>
          <Button link="/">
            Terug naar homepage
          </Button>
        </template>
        <template #image>
          <img src="~assets/images/compressed/pexels_ksenia_cherna_75XV8.jpg">
        </template>
      </ContentBlock>
    </ContentHolder>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
};
</script>
