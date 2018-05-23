<template>
  <div class="embed mt-5 mb-5">
    <img
      v-if="isImage"
      :src="file"
      alt=""
      class="embed-image" >
    <iframe
      v-else-if="file"
      :src="file "
      class="embed-file"
      frameborder="0"
      allowfullscreen />
    <div
      v-else-if="link"
      class="responsive-helper">
      <iframe
        :src="link"
        class="embed-link"
        frameborder="0"
        allowfullscreen />
    </div>
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
  },
  computed: {
    isImage() {
      return this.file != null
        ? this.file.match(/\.(jpeg|jpg|gif|png)$/) != null
        : false;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.embed {
  background-color: $light-grey;
}
.embed-file,
.embed-link {
  height: 100%;
  width: 100%;
}
.responsive-helper {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}
.embed-link {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
