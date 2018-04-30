<template>
  <nuxt-link :to="link" class="back has-text-dark has-text-weight-bold">
    <i class="fas fa-lg fa-angle-left"></i>
    <slot>Back</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: ''
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/main.scss';
</style>



