<template>
  <section class="hero is-dark is-dark">
    <div class="hero-body pb-0">
      <div class="container has-text-centered">
        <h1 class="title is-size-2-desktop is-capitalized">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
      <div class="container pb-0">
        <back-link :link="backTo"/>
      </div>
    </div>
  </section>
</template>

<script>
import BackLink from "~/components/UI/BackLink";

export default {
  components: {
    BackLink
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ""
    },
    backTo: {
      type: String,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.is-secondary {
  background-color: $secondary !important;
}
.subtitle {
  margin-top: 20px !important;
  margin-left: 2%;
  margin-right: 2%;
}
@include tablet() {
  .subtitle {
    margin: 20px 15%;
  }
}
</style>
