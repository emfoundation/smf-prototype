<template>
  <section class="hero is-dark is-secondary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-size-2-desktop is-capitalized">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ subtitle }}
        </h2>
      </div>
    </div>
    <semicircle-down/>
  </section>
</template>

<script>
import SemicircleDown from "~/components/UI/SemicircleDown.vue";
export default {
  components: {
    SemicircleDown
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
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
.hero {
  position: relative;
  min-height: 30vh;
  margin-bottom: 50px;
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
