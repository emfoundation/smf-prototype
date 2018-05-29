<template>
  <div class="columns is-variable is-1">
    <div class="column pt-0">
      <!-- :style="{ backgroundImage: 'url(' + quote.thumbnail + ')' }" -->
      <div
        class="overlay-blue answer">
        <div class="pt-6 pr-6 pb-8 pl-6 card answer-body">
          <h3 class="is-size-4 has-text-weight-bold is-italic mb-2 answer-text">"{{ quote.text }}"</h3>
          <p class="mb-2 answer-text">{{ quote.source }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
.answer {
  background-repeat: no-repeat;
}
.answer-body {
  height: 300px;
  transition: $smf-transition;
}
.overlay-blue {
  .answer-body {
    background: rgba($primary, 0.9);
  }
  .arrow {
    color: white;
  }
  .answer-text {
    color: white;
  }
}
.quote-mark {
  font-size: 100px;
  font-weight: 900;
  font-style: italic;
}
</style>
