<template>
  <section ref="gallery" class="gallery-grid">
    <h2 v-if="title">{{ title }}</h2>
    <p class="sub" v-if="sub">{{ sub }}</p>
    <section class="gallery-container">
      <vue-picture-swipe :items="items"></vue-picture-swipe>
    </section>
  </section>
</template>

<script>
import VuePictureSwipe from "vue-picture-swipe";

export default {
  components: {
    VuePictureSwipe
  },

  props: {
    title: {
      type: String,
      required: false
    },

    sub: {
      type: String,
      required: false
    },

    items: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.gallery-grid {
  display: grid;
}

.sub {
  margin: 20px 0;
}

.gallery-container {
  margin-top: 40px;

  & >>> .my-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
    gap: 20px;

    @media (--max48) {
      gap: 10px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  & >>> .gallery-thumbnail {
    display: flex;
    width: 100%;
    margin: 0;

    & > a {
      display: flex;
      width: 100%;
      margin: 0;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      transition: filter 0.2s ease;

      &:hover {
        filter: brightness(1.1);
      }

      &::before {
        content: "";
        display: block;
        padding-top: 90%;
      }
    }

    & img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      object-fit: cover;
    }
  }
}
</style>
