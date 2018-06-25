<template>
  <section
    :style="{ backgroundImage: 'url(' + image + ')' }"
    class="hero is-dark banner">
    <div class="overlay-dark">
      <div
        class="hero-body banner-body has-text-white">
        <div class="banner-container container has-text-centered">
          <h1 class="title is-size-1-desktop has-text-weight-bold">
            {{ title }}
          </h1>
          <h2 class="subtitle is-5 is-size-6-mobile">
            {{ subtitle }}
          </h2>
        </div>
        <div class="back-alignment">
          <back-link
            :link="backTo" />
        </div>
      </div>
    </div>
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
    image: {
      type: String,
      default: ""
    },
    backTo: {
      type: String,
      default: ""
    }
  }
};
</script>


<style lang="scss" scoped>
.banner {
  position: relative;
  min-height: 40vh;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
  margin-bottom: 5px;
}
.banner-body {
  height: 100%;
  padding-top: 80px;
}
.overlay-dark {
  background: rgba($emf, 0.9);
  min-height: inherit;
}
.subtitle {
  margin: 30px 2%;
  margin-top: 20px !important;
}
.banner-container {
  padding: 0;
}
@include tablet() {
  .banner {
    min-height: 315px;
  }
  .banner-container {
    padding: 0.75rem;
  }
  .subtitle {
    margin: 35px 1.5rem;
  }
  .back-alignment {
    margin-left: 2.5rem;
  }
}
@include desktop() {
  .back-alignment {
    margin-left: 4.5rem;
  }
}
@include fullhd() {
  .back-alignment {
    margin-left: 7.5rem;
  }
}
</style>
