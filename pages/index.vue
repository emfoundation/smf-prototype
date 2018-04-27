<template>
  <section class="hero">
    <div class="columns is-gapless hero-body">

      <section class="column learner">
        <div class="call-to-action">
            <h1 class="title has-text-secondary">Learning Paths</h1>
            <p class="subtitle has-text-black">Use our curated learning paths to learn challenging subjects guided by professionals</p>
            <nuxt-link to="/learnerjourneys" class="button is-dark">
              <p>View</p>
              <i class="fas fa-lg fa-angle-right"></i>
            </nuxt-link>           
        </div>
      </section>

      <section class="column topic">
        <div class="call-to-action">
            <h1 class="title has-text-white">Browse by topic</h1>
            <p class="subtitle has-text-white">Use our curated learning paths to learn challenging subjects guided by professionals</p>
            <nuxt-link to="/topics" class="button">
              View   
              <i class="fas fa-lg fa-angle-right"></i>
            </nuxt-link>           
        </div>
     
      </section>
    
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '~/assets/scss/main.scss';

  // Mobile-first classes
  .title {
    padding-bottom: 1rem;
  }
  .learner {
    height: 200px;
  }
  .topic {
    background-color: $secondary;
  }
  .learner, .topic {
    height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-body {
    padding: 0;
  }
  .call-to-action {
    padding: 5%;
  }
  .button {
    border-radius: 30px;
    padding: 25px;
    .is-dark {
      background-color: $secondary;
      color: $white;
    }
    i {
      margin-left: 10px;
    }
  }

// Tablet size and above 
@include tablet() {
  .learner, .topic {
    height: 90vh;
  }
  .call-to-action {
    padding: 30%;
  }
}
</style>
