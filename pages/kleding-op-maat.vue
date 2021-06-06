<template>
  <div class="container">
    <Header :small="true">
      <h1>Kleding op maat</h1>
    </Header>
    <ContentHolder>
      <ContentBlock :reversed="true">
        <template #content>
          <p>
            Ik maak graag een uniek kledingstuk voor je, voor elke gelegenheid,
            op jouw eigen maten. Dit kan voor een feestelijke gelegenheid zijn,
            of een uniek item om dagelijks te dragen.
          </p>
          <p>
            Omdat het kledingstuk precies gemaakt is op jouw maat, is dit ook
            een uitkomst voor klanten voor wie het lastig is om kleding te
            vinden in hun eigen maat.
          </p>
        </template>
        <template #image>
          <img src="~assets/images/compressed/bijgesneden_ina.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
    <ContentHolder>
      <Stappenplan>
        <template #content>
          <h2>Hoe gaat dit in zijn werk?</h2>

          <p>
            Voor het maken van de kleding plannen we meestal drie afspraken in:
          </p>
          <ol>
            <li>
              Tijdens de eerste afspraak wordt het gewenste ontwerp en de
              materiaalkeuze besproken. Ook worden de maten opgenomen. Aan de
              hand hiervan wordt een patroon gemaakt. Met dit patroon maak ik de
              toile, het proefmodel.
            </li>
            <li>
              Tijdens de tweede afspraak wordt dit proefmodel gepast en
              eventueel nog aangepast.
            </li>
            <li>
              Tijdens de derde (pas-)afspraak is het model al in de gewenste
              stof gemaakt en kunnen er nog kleine veranderingen aangebracht
              worden.
            </li>
          </ol>
          <p>
            Wanneer alles naar tevredenheid is en het kledingstuk goed zit,
            wordt het kledingstuk afgemaakt.
          </p>
        </template>
      </Stappenplan>
    </ContentHolder>
    <ContentHolder>
      <PhotoGallery
        title="Impressie"
        sub="Een impressie van op maat gemaakte kleding. Klik op de afbeelding om te vergroten."
        :items="galleryItems"
      />
    </ContentHolder>
    <ContentHolder>
      <ContentBlock>
        <template #content>
          <h2>Neem contact op</h2>
          <p>
            Wil je meer informatie over kleding op maat? Neem dan contact op met
            Ina, dan bespreken wij de mogelijkheden.
          </p>
          <Button link="/contact">
            Neem contact op
          </Button>
        </template>
      </ContentBlock>
    </ContentHolder>
  </div>
</template>

<script>
export default {
  head: {
    title: "Jouw kleding op maat - Kleding op maat - Ina Lubbers Lensink"
  },
  data: () => {
    return {
      galleryItems: [
        {
          src: require("~/assets/images/compressed/afpassen.jpg"),
          thumbnail: require("~/assets/images/compressed/afpassen.jpg"),
          w: 900,
          h: 1200,
          title: "Voorbeeld van het afpassen van een kledingstuk"
        },
        {
          src: require("~/assets/images/compressed/2017_04_08_shoot_bma_r0Nlt.jpg"),
          thumbnail: require("~/assets/images/compressed/2017_04_08_shoot_bma_r0Nlt.jpg"),
          w: 1068,
          h: 1600
        },
        {
          src: require("~/assets/images/compressed/foto_eva.jpg"),
          thumbnail: require("~/assets/images/compressed/foto_eva.jpg"),
          w: 1200,
          h: 1798
        },
        {
          src: require("~/assets/images/compressed/detail_rode_jas.jpg"),
          thumbnail: require("~/assets/images/compressed/detail_rode_jas.jpg"),
          w: 798,
          h: 1200
        },
        {
          src: require("~/assets/images/compressed/colbert_borstzak.jpg"),
          thumbnail: require("~/assets/images/compressed/colbert_borstzak.jpg"),
          w: 900,
          h: 1200,
          title: "Borstzak van een colbert"
        },
        {
          src: require("~/assets/images/compressed/rolstoelcape.jpg"),
          thumbnail: require("~/assets/images/compressed/rolstoelcape.jpg"),
          w: 900,
          h: 1200,
          title: "Een rolstoelcape"
        }
      ]
    };
  }
};
</script>
