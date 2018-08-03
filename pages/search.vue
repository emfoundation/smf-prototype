<template>
  <div class="search has-background-emf">
    <section class="search-content wrap">
      <div class="search-heading">
        <h2 class="title is-1 has-text-white"><span class="has-text-primary has-text-weight-normal">Thanks</span> for your interest</h2>
      </div>
      <h3 class="title is-3 has-text-weight-normal has-text-white">Search coming soon</h3>
      <back-button label="Take me back!"/>

    </section>
  </div>
</template>

<script>
import BackButton from "~/components/UI/buttons/BackButton";

export default {
  components: {
    BackButton
  }
};
</script>

<style lang="scss" scoped>
.search {
  min-height: 100vh;
}
.search-content {
  text-align: center;
  padding-top: 10rem;
  @include tablet() {
    padding-top: 15rem;
    margin-left: 10%;
    width: 80%;
  }
  @include desktop() {
    margin-left: 15%;
    width: 70%;
  }
  .search-heading {
    border-bottom: 1px white solid;
    padding-bottom: 1.5rem;
    margin-bottom: 2rem;
  }
}
</style>
