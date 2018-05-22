<template>
  <nuxt-link
    :to="url"
    class="button is-dark">
    <slot>View</slot>
    <i class="fas fa-lg fa-angle-right"/>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
i {
  margin-left: 10px;
}
</style>
