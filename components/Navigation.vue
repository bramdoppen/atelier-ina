<template>
  <ContentHolder class="header-container">
    <header class="header-bar">
      <NuxtLink to="/" class="logo">
        Kleding op maat - Ina Lubbers
      </NuxtLink>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/naailessen">
              Naailessen
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/kleding-op-maat">
              Kleding op maat
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/workshops">
              Workshops
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </ContentHolder>
</template>

<style scoped>
.header-container {
  margin-top: 60px;
  position: sticky;
  top: 0;
}

.header-bar {
  margin-left: -30px;
  width: calc(100% + 60px);
  background: #fff;
  display: grid;
  grid-template-columns: auto 1fr;
}

nav {
  justify-self: end;
}

.logo,
nav > ul > li > a {
  display: flex;
  padding: 20px 30px;
  font-family: var(--font-serif);
  font-weight: 400;
  color: #000;
  text-decoration: none;
  font-size: 20px;
}

nav > ul {
  display: flex;
  list-style: none;
}

nav > ul > li > a {
  color: var(--darkblue);
}

nav > ul > li > a:hover {
  color: var(--pink);
}
</style>
