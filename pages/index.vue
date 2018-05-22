<template>
  <section class="hero home">
    <div class="circle is-hidden-mobile">
      <div class="subtitle is-4">
        Please <br >Pick
      </div>
    </div>
    <div class="columns hero-body home-body p-0">

      <section class="column learner">
        <div class="call-to-action">
          <div class="content">
            <h1 class="title is-2 pb-4 has-text-white">Let us <strong>Guide You</strong></h1>
            <p class="subtitle has-text-white">Use our bespoke guided learning paths to learn challenging subjects curated by professionals.</p>
          </div>
          <text-circle-button
            link="/learning-paths">Yes Please</text-circle-button>
        </div>
      </section>

      <section class="column question">
        <div class="call-to-action">
          <div class="content">
            <h1 class="title is-2 pb-4 has-text-white">Explore for <strong>Yourself</strong></h1>
            <p class="subtitle has-text-white">Find out what you want to know by choosing the questions that interest you the most.</p>
          </div>
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

// Mobile-first classes

.home-body {
  height: 100%;
}
.learner,
.question {
  display: flex;
  justify-content: center;
  strong {
    font-weight: 900;
  }
}
.learner {
  background-color: $emf;
  padding-top: 8rem !important;
}
.question {
  background-color: $primary;
}
.call-to-action {
  padding: 3rem 3rem;
}
.call-to-action-button {
  border-radius: 30px;
  padding: 25px;
  .is-dark {
    background-color: $secondary;
    color: white;
  }
  i {
    margin-left: 10px;
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
    .content {
      padding-left: 1rem;
      border-left: $smf-border-thin;
    }
  }
  .question {
    .content {
      padding-right: 1rem;
      border-right: 2px solid white;
    }
  }
  .call-to-action {
    padding: 3rem 6rem;
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
