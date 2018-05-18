<template>
  <section>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"
      :class="(index % 2 == 0 ? 'overlay-light is-light' : 'overlay-dark is-dark')"
      class="hero is-medium learningpath">
      <div class="columns learningpath-body">
        <div class="column">
          <h2 class="title has-text-weight-bold">{{ item.name }}</h2>
        </div>
        <div class="column left-border">
          <p class="mb-4">{{ item.description }}</p>
          <nuxt-link :to="learningpathUrl(item.id)">
            <p class="subtitle">View
              <i class="fas fa-chevron-circle-right fa-lg arrow"/>

            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DarkButton from "~/components/UI/DarkButton";

export default {
  components: {
    DarkButton
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    learningpathUrl(id) {
      return "/learnerjourneys/" + id;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.learningpath {
  overflow: hidden;
  background-size: cover;
}
.learningpath-body {
  transition: 0.5s;
  padding: 3rem 3rem;
}
.overlay-light {
  .learningpath-body {
    background: rgba(222, 222, 222, 0.6);
    &:hover {
      background: rgba(222, 222, 222, 0.9);
    }
  }
}
.overlay-dark {
  .learningpath-body {
    background: rgba(0, 0, 0, 0.6);
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
  .arrow {
    color: white;
  }
}
@include tablet() {
  .learningpath-body {
    padding: 9rem 9rem;
  }
}
</style>
