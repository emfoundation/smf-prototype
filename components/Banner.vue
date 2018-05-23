<template>
  <section
    :style="{ backgroundImage: 'url(' + image + ')' }"
    class="hero is-dark is-primary banner">
    <div class="overlay-dark">
      <div
        class="hero-body banner-body has-text-white pb-0 ">
        <div class="container has-text-centered">
          <h1 class="title is-size-1-desktop has-text-weight-bold">
            {{ title }}
          </h1>
          <h2 class="subtitle">
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
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.banner {
  position: relative;
  min-height: 30vh;
  border-bottom: $smf-border;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}
.banner-body {
  height: 100%;
  padding-top: 80px;
}
.overlay-dark {
  background: rgba($primary, 0.6);
  height: 100%;
}
.subtitle {
  margin-top: 20px !important;
  margin-left: 2%;
  margin-right: 2%;
}
.back-alignment {
  margin-left: 1.5rem;
}
@include tablet() {
  .subtitle {
    margin: 20px 15%;
  }
  .back-alignment {
    margin-left: 2.5rem;
  }
}
@include desktop() {
  .back-alignment {
    margin-left: 7.5rem;
  }
}
</style>
