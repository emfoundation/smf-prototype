<template>
  <nuxt-link
    :to="link"
    class="back has-text-dark has-text-weight-light has-background-white">
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
.back {
  width: 80px;
  padding: 5px 10px;
  z-index: 1;
}
</style>
