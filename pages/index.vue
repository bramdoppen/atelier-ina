<template>
  <div class="container">
    <Header>
      <h1>
        Naailes, workshops en kleding op maat:
        <span class="tint">Ina Lubbers</span>
      </h1>
    </Header>
    <ContentHolder>
      <OverIna>
        <h2 class="color-black">Over Ina Lubbers</h2>
        <p>
          In het Achterhoekse Aalten geeft Ina Lubbers al jaren naailessen aan
          mensen die graag zelf kleding willen maken.
        </p>
        <p>
          Al tijdens haar jeugd altijd in de weer met lapjes, stoffen en garens
          is haar hobby uitgegroeid tot een echte Modevakschool, sinds 1998. Met
          veel enthousiasme en kennis van zaken maakt Ina van ieder lapje stof
          iets moois.
        </p>
        <p>
          Door middel van verschillende cursussen en bijscholingen breidt ze
          haar kennis steeds verder uit.
        </p>
      </OverIna>
    </ContentHolder>
    <ContentHolder>
      <ContentBlock :reversed="true">
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
          <img src="~assets/images/compressed/pexels_evelina_zhu_5_DW90k.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
    <ContentHolder>
      <ContentBlock>
        <template #content>
          <h2>Kleding op maat</h2>
          <p>
            Een uniek kledingstuk voor een feestelijke gelegenheid, of omdat het lastig is om kleding te vinden in jouw eigen maat? Ik maak graag een passend kledingstuk voor jou!
          </p>
          <Button link="/kleding-op-maat">
            Meer informatie
          </Button>
        </template>
        <template #image>
          <img src="~assets/images/compressed/pexels_cottonbro_462_SCtgN.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
    <ContentHolder>
      <ContentBlock :reversed="true">
        <template #content>
          <h2>Workshops</h2>
          <p>
            Zoek je een inspirerende workshop of een gastles? Dan ben je bij Ina aan het juiste adres.
          </p>
          <Button link="/workshops">
            Meer informatie
          </Button>
        </template>
        <template #image>
          <img src="~assets/images/compressed/pexels_ksenia_cherna_75XV8.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
  </div>
</template>

<script>
export default {};
</script>
