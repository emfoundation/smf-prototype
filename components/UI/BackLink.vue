<template>
  <nuxt-link
    :to="link"
    class="back has-text-white has-text-weight-light has-background-dark">
    <i class="fas fa-lg fa-angle-left"/>
    <slot>Back</slot>
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
@import "~/assets/scss/main.scss";
.back {
  width: 80px;
  padding: 5px 10px;
  margin-left: 5rem;
}
</style>
