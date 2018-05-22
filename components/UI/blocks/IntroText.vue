<template>
  <article
    class="intro-container columns mb-0">
    <h3 class="title is-3 column is-one-third has-text-white">
      {{ heading }}
    </h3>
    <p class="column intro-text has-text-white">{{ text }}</p>
  </article>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.intro-container {
  padding: 2rem 3rem;
  background-color: $emf;
  border-bottom: $smf-border;
}
@include tablet() {
  .intro-container {
    padding: 3rem 9rem;
  }
  .intro-text {
    padding-left: 2rem;
  }
}
</style>
