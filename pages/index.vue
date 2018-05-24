<template>
  <section
    :style="{ backgroundImage: 'url(' + image + ')' }"
    class="hero home">
    <div class="columns hero-body home-body p-0">

      <section class="column learner">
        <div class="call-to-action wrap">
          <nuxt-link to="/learning-paths">
            <div class="home-box">
              <h1 class="title is-2 pb-4 has-text-white has-text-weight-normal">Let us <strong>Guide You</strong></h1>
              <p class="subtitle has-text-white">Use our bespoke guided learning paths to learn challenging subjects curated by professionals.</p>
            </div>
          </nuxt-link>
          <text-circle-button
            text-colour="light"
            link="/learning-paths">Yes Please</text-circle-button>
        </div>
        <div class="circle is-hidden-mobile">
          <div class="subtitle is-4">
            Please <br >Pick
          </div>
        </div>
      </section>

      <section class="column question">
        <div class="call-to-action wrap">
          <nuxt-link to="/questions" >
            <div class="home-box">
              <h1 class="title is-2 pb-4 has-text-white has-text-weight-normal">Explore for <strong>Yourself</strong></h1>
              <p class="subtitle has-text-white">Find out what you want to know by choosing the questions that interest you the most.</p>
            </div>
          </nuxt-link>
          <text-circle-button
            text-colour="light"
            circle-colour="secondary"
            link="/questions"
            class="tablet-pulled-right">Explore</text-circle-button>
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
  data: function() {
    return {
      image: "https://placeimg.com/1000/1000/arch"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

// Mobile-first classes
.home {
  background-size: cover;
}
.home-body {
  height: 100%;
}
.learner,
.question {
  display: flex;
  justify-content: center;
  transition: $smf-transition;
  padding-bottom: 0;
  strong {
    font-weight: 900;
  }
}
.learner {
  background-color: rgba($emf, 0.8);
  padding-top: 8rem !important;
  &:hover {
    background-color: rgba($emf, 0.95);
  }
}
.question {
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
  .learner,
  .question {
    padding-top: 10rem !important;
    .call-to-action {
      padding-top: 8rem;
    }
  }
  .learner {
    position: relative;
    .home-box {
      padding-left: 1rem;
      border-left: $smf-border-thin;
    }
  }
  .question {
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
