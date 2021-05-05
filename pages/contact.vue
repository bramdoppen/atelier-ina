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
            Ina Lubbers-Lensink - Kleding op Maat<br>
            <br>
            Zilverbekendijk 4<br>
            7122 PX Aalten<br>
            <br>
            0544-377162
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
