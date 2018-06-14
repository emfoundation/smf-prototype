<template>
  <section
    class="hero home">
    <div class="columns hero-body home-body p-0">
      <section
        class="column left-col"
        :style="
        background-image:url( {{ leftColContent.backgroundImage }} )">
        <div class="call-to-action wrap">
          <nuxt-link :to="leftColContent.link">
            <div class="home-box">
              <h1 class="title is-2 pb-4 has-text-white has-text-weight-normal">{{ leftColContent.title }}<strong>{{ leftColContent.titleBold }}</strong></h1>
              <p class="subtitle has-text-white">{{ leftColContent.text }}</p>
            </div>
          </nuxt-link>
          <text-circle-button
            :link="leftColContent.link"
            text-colour="light">{{ leftColContent.buttonText }}</text-circle-button>
        </div>
        <div class="circle is-hidden-mobile">
          <div class="subtitle is-4">
            Please <br >Pick
          </div>
        </div>
      </section>

      <section class="column right-col">
        <div class="call-to-action wrap">
          <nuxt-link :to="rightColContent.link" >
            <div class="home-box">
              <h1 class="title is-2 pb-4 has-text-white has-text-weight-normal">{{ rightColContent.title }} <strong>{{ rightColContent.titleBold }}</strong></h1>
              <p class="subtitle has-text-white">{{ rightColContent.text }}</p>
            </div>
          </nuxt-link>
          <text-circle-button
            :link="rightColContent.link"
            text-colour="light"
            circle-colour="secondary"
            class="tablet-pulled-right">{{ rightColContent.buttonText }}</text-circle-button>
        </div>

      </section>

    </div>
  </section>
</template>

<script>
import TextCircleButton from "~/components/UI/buttons/TextCircleButton";

export default {
  components: {
    TextCircleButton
  },
  props: {
    leftColContent: {
      type: Object,
      required: true
    },
    rightColContent: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
// Mobile-first classes
.home {
  background-size: cover;
}
.home-body {
  height: 100%;
}
.left-col,
.right-col {
  display: flex;
  justify-content: center;
  transition: $smf-transition;
  padding-bottom: 0;
  strong {
    font-weight: 900;
  }
}
.left-col {
  background-color: rgba($emf, 0.8);
  padding-top: 8rem !important;
  &:hover {
    background-color: rgba($emf, 0.95);
  }
}
.right-col {
  background-color: rgba($primary, 0.8);
  &:hover {
    background-color: rgba($primary, 0.95);
  }
}

// Tablet size and above
@include tablet() {
  .home {
    height: 100vh;
  }
  .left-col,
  .right-col {
    padding-top: 10rem !important;
    .call-to-action {
      padding-top: 8rem;
    }
  }
  .left-col {
    position: relative;
    .home-box {
      padding-left: 1rem;
      border-left: $smf-border-thin;
    }
  }
  .right-col {
    .home-box {
      padding-right: 1rem;
      border-right: $smf-border-thin;
    }
  }
  .home-box {
    padding-bottom: 2rem;
  }
  .circle {
    $circle-radius: 60px;

    position: absolute;
    background-color: white;
    text-align: center;
    top: 7rem;
    left: calc(
      100% - #{$circle-radius}
    ); // Interpolated variable - see https://github.com/sass/sass/issues/818
    padding-top: $circle-radius / 2;
    @include circle($circle-radius);
  }
  .tablet-pulled-right {
    float: right;
  }
}
</style>
