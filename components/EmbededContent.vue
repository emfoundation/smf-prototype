<template>
  <div>
    <iframe class="embed embed-file mt-5" v-if="file" v-bind:src="file " frameborder="0"></iframe>
    <iframe class="embed embed-link mt-5" v-if="link" v-bind:src="link" frameborder="0"></iframe>
  </div>
</template>


<script>
export default {
  props: {
    file: String,
    link: String
  }
};
</script>


<style lang="scss" scoped>
.embed {
  height: 70vh;
  width: 100%;
  border: 1px solid black;
}
</style>
