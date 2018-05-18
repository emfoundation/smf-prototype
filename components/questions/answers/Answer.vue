<template>
  <div class="column pt-0">
    <div
      :style="{ backgroundImage: 'url(' + answer.thumbnail + ')' }"
      :class="(answer.id % 2 == 0 ? 'overlay-light is-light' : 'overlay-dark is-dark')"
      class="answer">
      <div class="answer-body pt-6 pr-6 pb-8 pl-6 card">
        <h3 class="is-size-3 mb-2 answer-text answer-title">{{ answer.name }}</h3>
        <p class="mb-2 answer-text">{{ answer.description }}</p>
        <nuxt-link
          :to="{ path: '/assets/' + answer.id, query: { q: $route.params.id }}"
          class="is-pulled-right">
          <p class="subtitle">
            <i class="fas fa-chevron-circle-right fa-lg arrow"/>
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    answer: {
      type: Object,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.answer {
  background-size: cover;
}
.answer-body {
  transition: 0.5s;
  height: 350px;
  @include tablet() {
    height: 400px;
  }
  @include desktop() {
    height: 300px;
  }
}
.answer-text {
  color: black;
}
.answer-title {
  font-weight: 900;
}
.overlay-light {
  .answer-body {
    background: rgba(222, 222, 222, 0.6);
    &:hover {
      background: rgba(222, 222, 222, 0.9);
    }
  }
}
.overlay-dark {
  .answer-body {
    background: rgba(0, 0, 0, 0.6);
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
  }
  .arrow {
    color: white;
  }
  .answer-text {
    color: white;
  }
}
</style>
