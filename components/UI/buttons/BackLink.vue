<template>
  <div v-if="link">
    <nuxt-link :to="link">
      <div class="back-container has-background-white">
        <div class="back-button has-text-weight-light ">
          <i class="fas fa-lg fa-angle-left mr-2"/>
          <slot>Back</slot>
        </div>
      </div>
    </nuxt-link>
  </div>
  <div
    v-else
    class="back-container has-background-white"
    @click="goBack()">
    <div class="back-button has-text-weight-light">
      <i class="fas fa-lg fa-angle-left mr-2"/>
      <slot>Back</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ""
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.go("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.back-container {
  position: absolute;
  bottom: -1px;
  width: 100px;
  padding: 0.75rem;
  text-align: center;
  transition: $smf-transition;
  background-color: white;
  color: black;
}
.back-container:hover {
  transition: $smf-transition;
  color: $primary;
  cursor: pointer;
}
@include tablet() {
  .back-container {
    bottom: 0;
  }
}
</style>
