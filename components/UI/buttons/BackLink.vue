<template>
  <nuxt-link :to="link">
    <div class="back-container has-background-white">
      <div class="back-button has-text-dark has-text-weight-light ">
        <i class="fas fa-lg fa-angle-left mr-2"/>
        <slot>Back</slot>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.back-container {
  position: absolute;
  bottom: 0;
  width: 100px;
  padding: 0.75rem;
  text-align: center;
  transition: $smf-transition;
  background-color: white;
}
.back-container:hover {
  transition: $smf-transition;
  background-color: darkgrey !important;
}
</style>
