<template>
  <div class="search has-background-emf">
    <section class="search-content wrap">
      <div class="search-heading">
        <h2 class="title is-1 has-text-white"><span class="has-text-primary has-text-weight-normal">Thanks</span> for your interest</h2>
      </div>
      <h3 class="title is-3 has-text-weight-normal has-text-white">Search coming soon</h3>
      <div
        class="title button is-rounded is-outlined is-4 has-text-weight-normal"
        @click="goBack">Take me back!
      </div>

    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.go("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: white;
  background-color: #495062;
  border-width: 2px;
  &:hover {
    color: black !important;
    background-color: white;
    border-color: white;
  }
}
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
