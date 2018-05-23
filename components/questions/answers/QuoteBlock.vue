<template>
  <div class="columns is-variable is-1">
    <div class="column pt-0">
      <div
        :style="{ backgroundImage: 'url(' + quote.thumbnail + ')' }"
        class="overlay-dark answer">
        <div class="pt-6 pr-6 pb-8 pl-6 card answer-body">
          <h3 class="is-size-4 has-text-weight-bold is-italic mb-2 answer-text">"{{ quote.quote }}"</h3>
          <p class="mb-2 answer-text">- {{ quote.author }}</p>
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

.answer-body {
  height: 300px;
  transition: $smf-transition;
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
