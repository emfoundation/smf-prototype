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
          "A new mind-set for the fashion industry is emerging.  Major fashion players are part of our ‘Make Fashion Circular’ initiative.  The circular economy is worth around a trillion dollars, and will reshape every part of our lives.  Don’t be left behind, as a global thought leader we can guide you on a journey through this innovative solution to our current system.",
        buttonText: "Yes Please",
        backgroundImage:
          "https://emf-assets-dev.s3.amazonaws.com/media/22/Landing-Guide-You-Web.jpg"
      },
      questionsContent: {
        link: "/questions",
        title: "Explore for ",
        titleBold: "Yourself",
        text:
          "The circular economy offers an innovative solution to the issues our world faces - invaluable for people, giving businesses a competitive advantage and offering a regenerative economic system for our world.  We bring together inspiration for those working within the fashion industry.  If you prefer to browse at your own pace - then this section is for you.  Whatever sparks your interest, you choose the direction you’d like to go in.",
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
