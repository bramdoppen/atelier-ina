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
import { gsap } from "gsap";

export default {
  props: {
    small: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    animateHeaderText() {
      const headerText = this.$refs.grid.querySelector("h1");
      gsap.fromTo(
        headerText,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1, ease: "circ.inOut" }
      );
    }
  },
  mounted() {
    this.animateHeaderText();
  }
};
</script>

<style scoped>
.container {
  --container-spacing: 160px;

  width: 100%;
  padding-top: var(--container-spacing);
  padding-bottom: var(--container-spacing);

  @media (--max48) {
    --container-spacing: 40px;
  }

  &.small {
    --container-spacing: 80px;

    @media (--max48) {
      --container-spacing: 20px;
    }
  }
}

.content-holder {
  max-width: 1320px;
  width: calc(100% - 40px);
  margin: 0 auto;
}

.grid {
  @media (--min48) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 80px;
    overflow: hidden;
  }
}

.grid > * {
  opacity: 0;
}

h1 {
  font-size: 73px;
  color: var(--darkblue);

  @media (--min48) {
    grid-column: 2 / span 6;
  }

  @media (--max48) {
    font-size: 30px;
  }
}

span.tint {
  color: var(--lightblue);
}
</style>
