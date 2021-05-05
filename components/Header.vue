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
  --space: calc(var(--container-spacing) * 2);

  width: 100%;
  padding-top: var(--space);
  padding-bottom: var(--space);

  @media (--max48) {
    --space: var(--container-spacing);
  }

  &.small {
    --space: var(--container-spacing);
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
    gap: var(--container-spacing);
    overflow: hidden;
  }
}

.grid > * {
  opacity: 0;
}

h1 {
  color: var(--darkblue);

  @media (--min48) {
    grid-column: 2 / span 6;
  }
}

span.tint {
  color: var(--lightblue);
}
</style>
