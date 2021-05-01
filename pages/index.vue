<template>
  <div class="container">
    <Header>
      <h1>Naailes, workshops en kleding op maat: <strong>Ina Lubbers</strong></h1>
    </Header>
    <ContentHolder>
      <OverIna>
        <h2>Over Ina</h2>
        <p>
          In het Achterhoekse Aalten geeft Ina Lubbers al jaren naailessen aan
          mensen die graag zelf kleding maken.
        </p>
        <p>
          Al tijdens haar jeugd altijd in de weer met lapjes, stofjes en garens
          is haar hobby uitgegroeid tot een echte Modevakschool, sinds 1998. Met
          veel enthousiasme en kennis van zaken maakt Ina van ieder lapje stof
          iets moois.
        </p>
      </OverIna>
    </ContentHolder>
    <ContentHolder>
      <ContentBlock>
        <template #content>
          <h2>Wekelijkse naailessen</h2>
          <p>
            Met veel energie geeft Ina Lubbers elke week les in het Achterhoekse
            Aalten. Haar atelier staat precies op de grens tussen Lichtenvoorde
            en Aalten in.
          </p>
          <Button link="/naailessen">
            Meer informatie
          </Button>
        </template>
        <template #image>
          <img src="~assets/images/pexels-ksenia-chernaya-3965557.jpg">
        </template>
      </ContentBlock>
    </ContentHolder>
    <ContentHolder>
      <ContentBlock :reversed="true">
        <template #content>
          <h2>Kleding op maat</h2>
          <p>
            Met veel energie geeft Ina Lubbers elke week les in het Achterhoekse
            Aalten. Haar atelier staat precies op de grens tussen Lichtenvoorde
            en Aalten in.
          </p>
          <Button link="/kleding-op-maat">
            Meer informatie
          </Button>
        </template>
        <template #image>
          <img src="~assets/images/pexels-ksenia-chernaya-3965557.jpg">
        </template>
      </ContentBlock>
    </ContentHolder>
    <ContentHolder>
      <ContentBlock>
        <template #content>
          <h2>Workshops</h2>
          <p>
            Met veel energie geeft Ina Lubbers elke week les in het Achterhoekse
            Aalten. Haar atelier staat precies op de grens tussen Lichtenvoorde
            en Aalten in.
          </p>
          <Button link="/workshops">
            Meer informatie
          </Button>
        </template>
        <template #image>
          <img src="~assets/images/pexels-ksenia-chernaya-3965557.jpg">
        </template>
      </ContentBlock>
    </ContentHolder>
  </div>
</template>

<script>
export default {};
</script>
