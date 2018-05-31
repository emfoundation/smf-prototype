<template>
  <div class="column pt-0">
    <div
      :style="{ backgroundImage: 'url(' + answer.thumbnail + ')' }"
      class="answer overlay-light">
      <div class="answer-body pt-6 pr-6 pb-8 pl-6 card">
        <h3 class="is-size-3 mb-2 answer-text answer-title">{{ answer.title }}</h3>
        <p class="mb-5 answer-text">{{ answer.tile_description }}</p>
        <text-circle-button
          :link="{ path: '/answers/' + answer.id, query: { q: $route.params.id }}"
          :is-primary="true"
          :is-small="true">View</text-circle-button>
          <!-- <p>{{ answer.format }}</p> -->
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
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.answer {
  background-size: cover;
}
.answer-body {
  transition: $smf-transition;
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
    background: rgba(222, 222, 222, 0.75);
    &:hover {
      background: rgba(222, 222, 222, 0.9);
    }
  }
}
// .overlay-dark {
//   .answer-body {
//     background: rgba(0, 0, 0, 0.6);
//     &:hover {
//       background: rgba(0, 0, 0, 0.9);
//     }
//   }
//   .arrow {
//     color: white;
//   }
//   .answer-text {
//     color: white;
//   }
// }
</style>
