<template>
  <section
    class="hero is-dark is-primary banner">
    <div
      class="hero-body has-text-white pb-0">
      <div class="container has-text-centered">
        <h1 class="title is-size-1-desktop has-text-weight-bold">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
    <!-- <div class="back-container pb-0"> -->
    <back-link
      :link="backTo"
      class="back-container" />
      <!-- </div> -->
  </section>
</template>

<script>
import BackLink from "~/components/UI/buttons/BackLink";

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
  min-height: 30vh;
  padding-top: 30px;
  border-bottom: 5px solid white;
}
.subtitle {
  margin-top: 20px !important;
  margin-left: 2%;
  margin-right: 2%;
}
.back-container {
  margin-left: 3rem;
}
@include tablet() {
  .subtitle {
    margin: 20px 15%;
  }
  .back-container {
    margin-left: 9rem;
  }
}
</style>
