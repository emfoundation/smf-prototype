<template>
  <section
    class="hero home">
    <div class="columns is-gapless hero-body home-body p-0">
      <section
        :style="{ backgroundImage: 'url(' + leftColContent.backgroundImage + ')' }"
        class="column left-col">
        <div class="overlay">
          <div class="call-to-action wrap">
            <nuxt-link :to="leftColContent.link">
              <div class="home-box">
                <h1 class="home-title title is-size-2-tablet pb-4 has-text-white has-text-weight-normal">{{ leftColContent.title }}<strong>{{ leftColContent.titleBold }}</strong></h1>
                <p class="subtitle is-size-6-mobile has-text-white">{{ leftColContent.text }}</p>
              </div>
            </nuxt-link>
            <text-circle-button
              :link="leftColContent.link"
              text-colour="light">{{ leftColContent.buttonText }}</text-circle-button>
          </div>
          <div class="pick-circle is-hidden-mobile">
            <div class="subtitle is-size-6-mobile is-size-4-tablet">
              Please<br >choose
            </div>
          </div>
        </div>
      </section>

      <section
        :style="{ backgroundImage: 'url(' + rightColContent.backgroundImage + ')' }"
        class="column right-col">
        <div class="overlay">
          <div class="call-to-action wrap">
            <nuxt-link :to="rightColContent.link" >
              <div class="home-box has-text-right-tablet">
                <h1 class="home-title title is-size-2-tablet pb-4 has-text-white has-text-weight-normal">{{ rightColContent.title }} <strong>{{ rightColContent.titleBold }}</strong></h1>
                <p class="subtitle is-size-6-mobile has-text-white">{{ rightColContent.text }}</p>
              </div>
            </nuxt-link>
            <text-circle-button
              :link="rightColContent.link"
              text-colour="light"
              circle-colour="secondary"
              class="tablet-pulled-right">{{ rightColContent.buttonText }}</text-circle-button>
            <div class="clear-float"/>
          </div>
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
  min-height: 50vh;
}
.home-body {
  height: 100%;
}
.home-title {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}
.column {
  background-size: cover;
}
.home-box {
  margin-bottom: 1rem;
}
.left-col,
.right-col {
  display: flex;
  justify-content: center;
  padding-bottom: 0;
  strong {
    font-weight: 900;
  }
  .overlay {
    transition: $smf-transition;
  }
}
.left-col {
  position: relative;
  .overlay {
    background-color: rgba($emf, 0.8);
    padding-top: 4rem !important;
    &:hover {
      background-color: rgba($emf, 0.95);
    }
  }
  .call-to-action {
    padding-bottom: 3rem;
    padding-top: 1rem;
  }
}
.right-col {
  .overlay {
    background-color: rgba($primary, 0.8);
    &:hover {
      background-color: rgba($primary, 0.95);
    }
  }
  .call-to-action {
    // padding-top: 3rem;
  }
}

// .pick-circle {
//   $circle-radius: 35px;

//   position: absolute;
//   background-color: white;
//   text-align: center;
//   bottom: -$circle-radius + 5px;
//   left: calc(
//     50% - #{$circle-radius}
//   ); // Interpolated variable - see https://github.com/sass/sass/issues/818
//   padding-top: $circle-radius / 2;
//   @include circle($circle-radius);
// }

// Tablet size and above
@include tablet() {
  .home {
    min-height: 100vh;
    // margin-bottom: 2rem;
  }
  .home-title {
    margin-bottom: 2rem;
  }
  .column {
    padding: 0;
  }
  .left-col,
  .right-col {
    .overlay {
      padding-top: 10rem !important;
    }
    .call-to-action {
      padding-top: 5rem;
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
    margin-bottom: 2rem;
  }
  .pick-circle {
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
