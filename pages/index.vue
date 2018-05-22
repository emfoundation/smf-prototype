<template>
  <section class="hero">
    <div class="columns is-gapless hero-body p-0">

      <section class="column learner">
        <div class="call-to-action">
          <div class="content">
            <h1 class="title is-2 pb-4 has-text-white">Let us <strong>Guide You</strong></h1>
            <p class="subtitle has-text-white">Use our bespoke guided learning paths to learn challenging subjects curated by professionals.</p>
          </div>
          <nuxt-link
            to="/learning-paths"
            class="button call-to-action-button">
            <p>View</p>
            <i class="fas fa-lg fa-angle-right"/>
          </nuxt-link>
        </div>
      </section>

      <section class="column question">
        <div class="call-to-action">
          <div class="content">
            <h1 class="title is-2 pb-4 has-text-white">Explore for <strong>Yourself</strong></h1>
            <p class="subtitle has-text-white">Find out what you want to know by choosing the questions that interest you the most.</p>
          </div>
          <nuxt-link
            to="/questions"
            class="button call-to-action-button is-dark">
            View
            <i class="fas fa-lg fa-angle-right"/>
          </nuxt-link>
        </div>

      </section>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

// Mobile-first classes
.learner {
  height: 200px;
  background-color: $emf;
}
.question {
  background-color: $primary;
}
.learner,
.question {
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  strong {
    font-weight: 900;
  }
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
  .learner,
  .question {
    height: 90vh;
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
}
</style>
