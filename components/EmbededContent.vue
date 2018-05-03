<template>
  <div>
    <iframe
      v-if="file"
      :src="file "
      class="embed embed-file mt-5"
      frameborder="0"/>
    <iframe
      v-if="link"
      :src="link"
      class="embed embed-link mt-5"
      frameborder="0"/>
  </div>
</template>


<script>
export default {
  props: {
    file: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
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
