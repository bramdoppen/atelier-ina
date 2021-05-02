<template>
  <ContentHolder class="header-container">
    <header class="header-bar">
      <NuxtLink to="/" class="logo">
        Kleding op maat - Ina Lubbers
      </NuxtLink>
      <div class="mobile-nav-button">
        <button @click="navOpen = !navOpen" class="navbtn">Open nav</button>
      </div>
      <nav :class="{ 's-nav-open': navOpen }">
        <ul>
          <li>
            <NuxtLink to="/naailessen" class="nav-link">
              <span>Naailessen</span>
              <svg class="l-icon">
                <use href="~/assets/icons.svg#icon-arrow"></use>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/kleding-op-maat" class="nav-link">
              <span>Kleding op maat</span>
              <svg class="l-icon">
                <use href="~/assets/icons.svg#icon-arrow"></use>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/workshops" class="nav-link">
              <span>Workshops</span>
              <svg class="l-icon">
                <use href="~/assets/icons.svg#icon-arrow"></use>
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="nav-link">
              <span>Contact</span>
              <svg class="l-icon">
                <use href="~/assets/icons.svg#icon-arrow"></use>
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </ContentHolder>
</template>

<script>
export default {
  data: () => {
    return {
      navOpen: false
    };
  }
};
</script>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  z-index: 1;
}

.header-bar {
  --spacing: 30px;

  margin-left: calc(var(--spacing) * -1);
  width: calc(100% + (var(--spacing) * 2));
  background: #fff;
  display: grid;
  grid-template-columns: 1fr auto;
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

.navbtn {
  appearance: none;
  border: 0;
  background: transparent;
  width: 80px;
  height: 100%;
  border-left: 1px solid gray;
}

.l-icon {
  display: none;
}

@media (min-width: 48em) {
  .header-container {
    margin-top: 60px;
  }
}

@media (max-width: 48em) {
  .header-bar {
    --spacing: 20px;

    height: 60px;
  }

  .logo,
  nav > ul > li > a {
    padding: 5px 30px;
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

  nav > ul {
    flex-direction: column;
    padding: 0;
  }

  .nav-link {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
  }

  .l-icon {
    display: flex;
    width: 20px;
    height: 20px;
    color: currentColor;
  }
}
</style>
