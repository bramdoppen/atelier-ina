<template>
  <article ref="container" class="grid" :class="{ reversed: reversed }">
    <picture ref="picture">
      <slot name="image" />
    </picture>
    <div ref="content" class="content spacing-sm">
      <slot name="content" />
    </div>
  </article>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  props: {
    reversed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    fadeIn() {
      gsap.fromTo(
        [this.$refs.picture, this.$refs.content],
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "circ.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: this.$refs.container,
            once: true
          }
        }
      );
    }
  },
  mounted() {
    this.fadeIn();
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  grid-auto-flow: row dense;
  gap: var(--container-spacing);
  align-items: center;

  & > * {
    opacity: 0;
  }

  @media (--max48) {
    gap: calc(var(--container-spacing) / 2);
  }
}

@media (--min48) {
  .grid.reversed > *:first-child {
    order: 1;
  }
}

picture {
  background: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  position: relative;

  &::before {
    content: "";
    display: block;
    padding-top: 65%;
  }
}

picture > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
