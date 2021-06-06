<template>
  <div class="container">
    <Header :small="true">
      <h1>Contact</h1>
    </Header>
    <ContentHolder>
      <ContentBlock >
        <template #content>
          <p>
            Heb je nog niet gevonden wat je zocht, of wil je meer informatie over naailessen, workshops of kleding op maat? Neem dan gerust contact met mij op.
          </p>
          <p>
            <strong>Ina Lubbers-Lensink - Kleding op Maat</strong><br>
            <br>
            Zilverbekendijk 4<br>
            7122 PX Aalten<br>
            <br>
            0544-377162<br>
          </p>
        </template>
        <template #image>
          <img src="~assets/images/compressed/pexels_cottonbro_461_b5aqV.jpg" />
        </template>
      </ContentBlock>
    </ContentHolder>
  </div>
</template>

<script>
export default {
  head: {
    title: "Contact opnemen met Ina - Kleding op maat - Ina Lubbers Lensink"
  }
};
</script>
