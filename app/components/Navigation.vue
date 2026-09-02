<template>
  <ContentHolder class="header-container">
    <header class="header-bar">
      <NuxtLink to="/" class="logo">
        {{ navigation?.logoLabel || 'Kleding op maat - Ina Lubbers' }}
      </NuxtLink>
      <nav :class="{ 's-nav-open': navOpen }">
        <ul>
          <li v-for="item in navigation?.items || []" :key="item.to">
            <NuxtLink :to="item.to" class="nav-link">
              <span>{{ item.label }}</span>
              <svg class="l-icon">
                <use href="/icons.svg#icon-arrow"></use>
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="mobile-nav-button">
        <button
          class="navbtn"
          :class="{ 's-open': navOpen }"
          type="button"
          @click="navOpen = !navOpen"
        >
          <svg v-show="!navOpen" class="l-icon">
            <use href="/icons.svg#icon-menu"></use>
          </svg>
          <span v-show="!navOpen">Menu</span>
          <svg v-show="navOpen" class="l-icon">
            <use href="/icons.svg#icon-close"></use>
          </svg>
          <span v-show="navOpen">Sluiten</span>
        </button>
      </div>
    </header>
  </ContentHolder>
</template>

<script setup>
const navOpen = ref(false)
const route = useRoute()

const { data: navigation } = await useAsyncData('navigation', () =>
  queryCollection('navigation').first()
)

watch(
  () => route.fullPath,
  () => {
    navOpen.value = false
  }
)
</script>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  z-index: 100;

  @media (min-width: 48em) {
    margin-top: 60px;
  }
}

.header-bar {
  --spacing: 30px;

  margin-left: calc(var(--spacing) * -1);
  width: calc(100% + (var(--spacing) * 2));
  background: #fff;
  display: grid;
  grid-template-columns: 1fr auto;

  @media (--max48) {
    border: 1px solid #eee;
  }
}

nav {
  justify-self: end;
}

.logo,
nav > ul > li > a {
  display: flex;
  align-items: center;
  font-family: var(--font-serif);
  font-weight: 400;
  color: #000;
  text-decoration: none;
  font-size: 20px;
  padding: 10px var(--spacing);

  @media (--min48) {
    padding: 20px 30px;
  }
}

nav > ul {
  display: flex;
  list-style: none;

  @media (--max48) {
    padding: 20px 0 0;
    flex-direction: column;
  }
}

.nav-link {
  color: var(--darkblue);

  &:hover,
  &.router-link-active {
    color: var(--pink);
  }

  @media (--min48) {
    & .l-icon {
      display: none;
    }
  }

  @media (--max48) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    font-size: 22px;
    padding: 15px var(--spacing);
  }
}

.navbtn {
  appearance: none;
  border: 0;
  background: transparent;
  width: 60px;
  height: 100%;
  font-size: 12px;
  font-family: var(--font-serif);
  border-left: 1px solid #eee;
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
  padding: 12px;

  @media (--min48) {
    display: none;
  }
}

@media (max-width: 48em) {
  .header-bar {
    --spacing: 20px;

    height: 60px;
  }

  .logo {
    font-size: 16px;
  }

  nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    display: none;
  }

  nav.s-nav-open {
    display: block;
  }

  .l-icon {
    display: flex;
    width: 20px;
    height: 20px;
    color: currentcolor;
  }
}
</style>
