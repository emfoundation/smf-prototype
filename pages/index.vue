<template>
  <div>
    <home-page
      v-if="ab === 'a'"
      :left-col-content="learningPathContent"
      :right-col-content="questionsContent"
    />
    <home-page
      v-else
      :left-col-content="questionsContent"
      :right-col-content="learningPathContent"
    />
  </div>
</template>

<script>
import HomePage from "~/components/ab_testing/HomePage";

export default {
  components: {
    HomePage
  },
  data: function() {
    return {
      learningPathContent: {
        link: "/learning-paths",
        title: "Let us ",
        titleBold: "Guide You",
        text:
          "In this section we guide you through the latest and most relevant content for the fashion industry that want to learn what the circular economy is all about.",
        buttonText: "Yes Please",
        backgroundImage:
          "https://emf-assets-dev.s3.amazonaws.com/media/22/Landing-Guide-You-Web.jpg"
      },
      questionsContent: {
        link: "/questions",
        title: "Explore for ",
        titleBold: "Yourself",
        text:
          "If you prefer to browse at your own pace - then this section is for you.  Whatever sparks your interest, you choose the direction you’d like to go in.",
        buttonText: "Explore",
        backgroundImage:
          "https://emf-assets-dev.s3.amazonaws.com/media/22/Landing-Explore-Web.jpg"
      }
    };
  },
  computed: {
    ab: function() {
      return this.$store.getters.loadedHomePageAb;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
