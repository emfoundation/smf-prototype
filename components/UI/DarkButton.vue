<template>
  <nuxt-link :to="url" class="button is-dark">
    <slot>View</slot>  
    <i class="fas fa-lg fa-angle-right"></i>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    url: ""
  }
};
</script>

<style scoped>
i {
  margin-left: 10px;
}
</style>
