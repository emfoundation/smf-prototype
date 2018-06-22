<template>
  <div class="columns is-variable is-1">
    <div class="column pt-0 pb-2">
      <div
        class="overlay-blue answer">
        <div class="answer-body card has-text-white">
          <div>
            <i class="fas fa-quote-left fa-3x"/>
          </div>
          <h3 class="mb-2 quote-text answer-text">
            {{ quote.text }}
          </h3>
          <div class="icon is-large quote-right">
            <i class="fas fa-quote-right fa-3x"/>
          </div>
          <p class="mb-2 answer-text has-text-weight-normal">{{ quote.source }}</p>
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
.answer {
  background-repeat: no-repeat;
  background-size: cover;
}
.answer-body {
  transition: $smf-transition;
  padding: 1.5rem;
}
.answer-text {
  line-height: 40px;
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
.quote-text {
  font-size: 1.75rem;
  font-weight: 900;
}
.quote-right {
  margin-left: 50%;
}
@include tablet() {
  .answer-body {
    padding: 3rem;
  }
  .answer-text {
    margin-left: 3.5rem;
  }
}
</style>
