<template>
  <section>
    <div
      v-for="(item, index) in items"
      :key="item.id"
      :style="{ backgroundImage: 'url(' + item.thumbnail + ')' }"
      :class="(index % 2 == 0 ? 'overlay-light is-light' : 'overlay-dark is-dark')"
      class="hero is-medium question">
      <div class="columns question-body">
        <div class="column">
          <h2 class="title has-text-weight-bold">{{ item.name }}</h2>
        </div>
        <div class="column left-border">
          <p class="mb-4">{{ item.description }}</p>
          <!-- <dark-button :url="questionUrl(item.name)" /> -->
          <nuxt-link :to="questionUrl(item.name)">
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
    questionUrl(name) {
      name = this.$options.filters.kebab(name);
      return "/questions/" + name;
    }
  }
};
</script>

<style lang="scss" scoped>
.question {
  overflow: hidden;
}
.question-body {
  padding: 9rem 9rem;
}
.overlay-light {
  .question-body {
    background: rgba(222, 222, 222, 0.8);
    &:hover {
      background: rgba(222, 222, 222, 0.9);
    }
  }
}
.overlay-dark {
  .question-body {
    background: rgba(0, 0, 0, 0.8);
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
  .arrow {
    color: white;
  }
}
</style>
