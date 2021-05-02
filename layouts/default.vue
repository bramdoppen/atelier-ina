<template>
  <div class="site">
    <Navigation />
    <main>
      <Nuxt />
    </main>
    <footer>
      Kleding op maat - Ina Lubbers
    </footer>
  </div>
</template>

<style>

@custom-media --max48 (max-width: 48em);
@custom-media --min48 (min-width: 48em);

:root {
  --font-sans: "Open Sans", ui-sans-serif, sans-serif;
  --font-serif: "DM Serif Display", sans-serif;
  --darkblue: #3921b1;
  --lightblue: #accbfa;
  --orange: #ee6538;
  --pink: #f8aaee;
}

@font-face {
  font-family: "DM Serif Display";
  src: url("~/assets/fonts/DMSerifDisplay-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Noto Sans";
  src: url("~/assets/fonts/NotoSans.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

html {
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.66;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  width: 100%;
}

.content-holder {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

h1,
h2,
h3,
h4 {
  font-family: var(--font-serif);
  color: var(--darkblue);
  font-weight: 400;
  line-height: 1.27;
}

h2 {
  font-size: 50px;
}

.color-black {
  color: #000;
}

.spacing-sm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.spacing-sm > * {
  margin: 0;
}

.spacing-sm > * + * {
  margin-top: 20px;
}

.spacing-sm > h2 + * {
  margin-top: 15px;
}

.spacing-sm > * + .btn {
  margin-top: 30px;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.l-icon {
  fill: currentColor;
}
</style>
