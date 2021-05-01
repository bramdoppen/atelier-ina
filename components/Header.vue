<template>
  <header class="container" :class="{ small: small }">
    <div class="content-holder">
      <div ref="grid" class="grid">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
// import { gsap } from 'gsap'

export default {
  props: {
    small: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    wrapWords (str, tmpl) {
      return str.replace(/\w+/g, tmpl || "<span>$&</span>");
    },
    animateHeaderText () {
      console.log(this.$refs.grid);
      const headerText = this.$refs.grid.querySelector("h1").textContent;
      // const split = new this.$splitText(this.$refs.grid.querySelector("h1"));
      // console.log(split);
      console.log(this.wrapWords("Hallo dit is bram"));
      console.log(this.wrapWords(headerText));
      // gsap.fromTo(this.$refs.grid.children(), { y: 10, opacity: 0 }, { y: 0, opacity: 1, ease: 'expo.out' })
    }
  },
  mounted () {
    this.animateHeaderText();
  }
};
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

  & > * {
    opacity: 0;
  }
}

h1 {
  grid-column: 2 / span 6;
  font-size: 73px;
  color: var(--darkblue);
}

span.tint {
  color: var(--lightblue);
}
</style>
