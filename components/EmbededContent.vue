<template>
  <div>
    <iframe
      v-if="file"
      :src="file"
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
@import "@/assets/scss/main.scss";
.embed {
  height: 30vh;
  width: 100%;
  border: 1px solid $light-grey;
}

@include tablet {
  .embed {
    height: 70vh;
    width: 90%;
  }
}
</style>
