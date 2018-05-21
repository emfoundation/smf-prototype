<template>
  <section class="hero is-dark is-primary banner">
    <div class="hero-body has-text-white pb-0">
      <div class="container has-text-centered">
        <h1 class="title is-size-2-desktop is-capitalized">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
      <div class="container back-container pb-0">
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

.banner {
}
.subtitle {
  margin-top: 20px !important;
  margin-left: 2%;
  margin-right: 2%;
}
.back-container {
  z-index: 5;
}
@include tablet() {
  .subtitle {
    margin: 20px 15%;
  }
}
</style>
