<template>
  <div class="column pt-0">
    <div
      :style="{ backgroundImage: 'url(' + answer.thumbnail + ')' }"
      class="answer overlay-light">
      <div class="answer-body pt-6 pr-6 pb-6 pl-6 card">
        <figure class="format">
          <span class="icon is-medium format-icon-border">
            <i
              :class="'fa-' + getFormatIconName"
              class="fas"/>
          </span>
          <figcaption class="format-text is-size-7 has-text-primary has-text-centered">
            {{ getFormatDisplayName }}
          </figcaption>
        </figure>
        <h3 class="is-size-4 mb-2 has-text-black has-text-weight-bold">{{ answer.title }}</h3>
        <p class="mb-5 answer-text">{{ answer.tile_description }}</p>
        <text-circle-button
          :link="{ path: '/answers/' + answer.id, query: { q: $route.params.id }}"
          :is-primary="true"
          :is-small="true"
          class="answer-link">
          View
        </text-circle-button>
      </div>
    </div>
  </div>
</template>
<script>
import TextCircleButton from "~/components/UI/buttons/TextCircleButton";

export default {
  components: {
    TextCircleButton
  },
  props: {
    answer: {
      type: Object,
      required: true
    }
  },
  computed: {
    getFormatDisplayName() {
      return this.$store.getters.loadedFormats[this.answer.format];
    },
    getFormatIconName() {
      return this.$store.getters.loadedFormatToIcons[this.answer.format];
    }
  }
};
</script>


<style lang="scss" scoped>
.answer {
  background-size: cover;
}
.answer-body {
  transition: $smf-transition;
  @include tablet() {
    height: 400px;
  }
  @include desktop() {
    height: 330px;
  }
}
.answer-link {
  position: absolute;
  bottom: 2rem;
}
.overlay-light {
  .answer-body {
    background: rgba(222, 222, 222, 0.75);
    &:hover {
      background: rgba(222, 222, 222, 0.9);
    }
  }
}
.format {
  margin-bottom: 15px;
}
.format-icon {
  position: relative;
  top: 0.2rem;
  color: $primary;
}
.format-icon-border {
  position: relative;
  top: 0.2rem;
  border: 1px solid $primary;
  border-radius: 50%;
  color: $primary;
}
.format-text {
  display: inline-block;
  margin-left: 7px;
}
</style>
