<template>
  <article
    class="wrap mb-4 mt-4">
    <div class="columns">
      <div class="column is-one-third">
        <h3 class="intro-title title is-size-4-mobile is-2 has-text-weight-bold">
          {{ heading }}
        </h3>
        <div class="intro-border is-hidden-tablet"/>
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
.intro-border {
  border-bottom: 4px solid $primary;
  width: 70%;
}
@include tablet() {
  .intro-text {
    p {
      padding-left: 1rem;
      border-left: 2px solid $primary;
    }
  }
}
</style>
