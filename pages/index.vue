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
import TextCircleButton from "~/components/UI/buttons/TextCircleButton";
import HomePage from "~/components/ab_testing/HomePage";

export default {
  components: {
    HomePage,
    TextCircleButton
  },
  data: function() {
    return {
      learningPathContent: {
        link: "/learning-paths",
        title: "Let us ",
        titleBold: "Guide You",
        text:
          "Use our bespoke guided learning paths to learn challenging subjects curated by professionals.",
        buttonText: "Yes Please",
        backgroundImage:
          "https://emf-assets-dev.s3.amazonaws.com/media/22/Landing-Guide-You-Web.jpg"
      },
      questionsContent: {
        link: "/questions",
        title: "Explore for ",
        titleBold: "Yourself",
        text:
          "Find out what you want to know by choosing the questions that interest you the most.",
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
