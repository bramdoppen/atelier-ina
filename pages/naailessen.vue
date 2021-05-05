<template>
  <div class="container">
    <Header :small="true">
      <h1>Naailessen</h1>
    </Header>
    <ContentHolder>
      <ContentBlock :reversed="true">
        <template #content>
          <p>
            Ik maak graag een uniek kledingstuk voor je, voor elke gelegenheid,
            op jouw eigen maten. Dit kan voor een feestelijke gelegenheid zijn,
            of een uniek item om dagelijks te dragen. Omdat het kledingstuk
            precies gemaakt is op jouw maat, is dit ook een uitkomst voor
            klanten voor wie het lastig is om kleding te vinden in hun eigen
            maat.
          </p>
        </template>
        <template #image>
          <img src="~assets/images/pexels-ksenia-chernaya-3965557.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
    <ContentHolder>
      <ContentBlock>
        <template #content>
          <h2>Hoe gaat dit in zijn werk?</h2>
          <p>
            Voor het maken van de kleding plannen we meestal drie afspraken in.
            Tijdens de eerste afspraak wordt het gewenste ontwerp en de
            materiaalkeuze besproken. Ook worden de maten opgenomen. Aan de hand
            hiervan wordt een patroon gemaakt. Met dit patroon maak ik de toile,
            het proefmodel. Tijdens de tweede afspraak wordt dit proefmodel
            gepast en eventueel nog aangepast. Tijdens de derde (pas-)afspraak
            is het model al in de gewenste stof gemaakt en kunnen er nog kleine
            veranderingen aangebracht worden. Wanneer alles naar tevredenheid is
            en het kledingstuk goed zit, wordt het kledingstuk afgemaakt.
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
