<template>
  <header class="container" :class="{ small: small }">
    <div class="content-holder">
      <div class="grid">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  padding-top: 160px;
  padding-bottom: 160px;
}

.container.small {
  padding-top: 80px;
  padding-bottom: 80px;
}

.content-holder {
  max-width: 1320px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 80px;
}

h1 {
  grid-column: 2 / span 6;
  font-size: 73px;
  color: var(--darkblue);
}

span {
  color: var(--lightblue);
}
</style>
