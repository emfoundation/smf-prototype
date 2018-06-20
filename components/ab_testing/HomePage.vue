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
        </div>
      </section>

      <section
        :style="{ backgroundImage: 'url(' + rightColContent.backgroundImage + ')' }"
        class="column right-col">
        <div class="overlay">
          <div class="call-to-action wrap">
            <nuxt-link :to="rightColContent.link" >
              <div class="home-box has-text-right-tablet">
                <h1 class="title is-2 pb-4 has-text-white has-text-weight-normal">{{ rightColContent.title }} <strong>{{ rightColContent.titleBold }}</strong></h1>
                <p class="subtitle has-text-white">{{ rightColContent.text }}</p>
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
.home-body {
  height: 100%;
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
  .overlay {
    background-color: rgba($emf, 0.8);
    padding-top: 4rem !important;
    &:hover {
      background-color: rgba($emf, 0.95);
    }
  }
}
.right-col {
  .overlay {
    background-color: rgba($primary, 0.8);
    &:hover {
      background-color: rgba($primary, 0.95);
    }
  }
}

// Tablet size and above
@include tablet() {
  .home {
    min-height: 100vh;
    // margin-bottom: 2rem;
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
