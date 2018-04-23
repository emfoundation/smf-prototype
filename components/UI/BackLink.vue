<template>
  <nuxt-link :to="link" class="back has-text-dark has-text-weight-bold">
    <i class="fas fa-lg fa-angle-left"></i>
    Back
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: ''
  }
}
</script>

<style scoped>
  .back {
    margin: 0.75rem;
  }
</style>



