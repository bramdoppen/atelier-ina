<template>
  <div class="container">
    <Header :small="true">
      <h1>Naailessen</h1>
    </Header>
    <ContentHolder>
      <ContentBlock :reversed="true">
        <template #content>
          <p>
            De lessen zijn voor beginners en gevorderden en duren twee uur.<br>
            Iedereen werkt op zijn eigen niveau en tempo en de groepen bestaan
            uit maximaal vijf personen. Naaimachines, lockmachine en
            strijkapparatuur zijn aanwezig, maar de cursisten mogen natuurlijk
            ook hun eigen naaimachine meenemen. De lessen worden gegeven op
            maandagmiddag, dinsdagmorgen, dinsdagavond, woensdagavond en
            donderdagavond.
          </p>
        </template>
        <template #image>
          <img src="~assets/images/compressed/pexels_cottonbro_373_Equin.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
  </div>
</template>

<script>
export default {
  head: {
    title: "Naailessen - Kleding op maat - Ina Lubbers Lensink"
  }
};
</script>
