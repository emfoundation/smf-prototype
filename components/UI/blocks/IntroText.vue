<template>
  <article
    class="intro-container mb-0">
    <div class="columns">
      <div class="column is-one-third">
        <h3 class="title is-2 has-text-weight-bold">
          {{ heading }}
        </h3>
      </div>
      <div class="column intro-text">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
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
}
@include tablet() {
  .intro-container {
    padding: 3rem 9rem;
  }
  .intro-text {
    p {
      padding-left: 1rem;
      border-left: 2px solid $primary;
    }
  }
}
</style>
