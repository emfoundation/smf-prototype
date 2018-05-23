<template>
  <section
    :style="{ backgroundImage: 'url(' + image + ')' }"
    class="hero home">
    <div class="circle is-hidden-mobile">
      <div class="subtitle is-4">
        Please <br >Pick
      </div>
    </div>
    <div class="columns hero-body home-body p-0">

      <section class="column learner">
        <div class="call-to-action wrap">
          <nuxt-link to="/learning-paths">
            <div class="home-box">
              <h1 class="title is-2 pb-4 has-text-white">Let us <strong>Guide You</strong></h1>
              <p class="subtitle has-text-white">Use our bespoke guided learning paths to learn challenging subjects curated by professionals.</p>
            </div>
          </nuxt-link>
          <text-circle-button
            link="/learning-paths">Yes Please</text-circle-button>
        </div>
      </section>

      <section class="column question">
        <div class="call-to-action wrap">
          <nuxt-link to="/questions" >
            <div class="home-box">
              <h1 class="title is-2 pb-4 has-text-white">Explore for <strong>Yourself</strong></h1>
              <p class="subtitle has-text-white">Find out what you want to know by choosing the questions that interest you the most.</p>
            </div>
          </nuxt-link>
          <text-circle-button
            :is-primary-colour="false"
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
    position: absolute;
    left: calc(50vw - 75px);
    top: 15vh;
    width: 130px;
    height: 130px;
    border-radius: 65px;
    background-color: white;
    text-align: center;
    padding-top: 35px;
  }
  .tablet-pulled-right {
    float: right;
  }
}
</style>
