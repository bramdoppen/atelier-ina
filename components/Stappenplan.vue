<template>
  <article ref="container" class="stappenplan">
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
  methods: {
    fadeIn() {
      gsap.fromTo(
        [this.$refs.container, this.$refs.content],
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
.stappenplan {
  background: var(--lightblue);
  color: #265498;
  padding: var(--container-spacing);
  border-radius: 10px;
  opacity: 0;
  position: relative;
  z-index: 1;

  @media (--max48) {
    padding: 30px;
  }

  & > * {
    opacity: 0;
  }
}

.content {
  & h2 {
    color: #618fd4;
  }

  & ol {
    padding-left: 0;
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: min(100%, 800px);
    counter-reset: my-counter;

    @media (--max48) {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    & > li {
      list-style: none;
      display: flex;
      align-items: center;
      margin-top: 20px;
      counter-increment: my-counter;

      @media (--max48) {
        align-items: flex-start;
      }

      &::before {
        content: counter(my-counter);
        margin-right: 20px;
        width: 2em;
        height: 2em;
        font-size: 28px;
        font-family: var(--font-serif);
        border-radius: 50%;
        border: 2px solid #8aade0;
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (--max48) {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
