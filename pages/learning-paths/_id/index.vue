<template>
  <div class="wrap mb-5 empty-page">
    <h1 class="title is-4 is-italic has-text-centered">Please select a chapter above.</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.replace({
      name: "learning-paths-id-chapterId",
      params: {
        id: this.$route.params.id,
        chapterId: this.firstChapter.id
      }
    });
  },
  asyncData(context) {
    return context.$axios
      .get(
        process.env.API_BASE_URL +
          "/chapters/collection/" +
          process.env.SMF_COLLECTION_ID +
          "/learner-journey/" +
          context.params.id +
          "/"
      )
      .then(res => {
        return {
          firstChapter: res.data[0]
        };
      });
  }
};
</script>
