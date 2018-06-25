<template>
  <div
    class="rich-content mb-5"
    v-html="removePTags(content)"/>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    removePTags: function(str) {
      return str.replace(/<p><img/g, "<img").replace(/\/><\/p>/g, "/>");
    }
  }
};
</script>

<style lang="scss">
.rich-content {
  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2;
  }
  img {
    width: 100%;
    margin: 1.5rem 0 1.5rem 0;
  }
  p {
    margin: 1rem 0 1rem 0;
    @include tablet() {
      width: 80%;
    }
    @include fullhd() {
      width: 60%;
    }
  }
  @include tablet() {
    .wrap-left {
      margin: 0 1rem 0 0;
      width: initial;
      float: left;
    }
    .wrap-right {
      margin: 0 0 0 1rem;
      width: initial;
      float: right;
    }
  }
}
</style>
