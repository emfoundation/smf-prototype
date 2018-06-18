<template>
  <section class="hero">
    <banner
      :title="title"
      :subtitle="subtitle"
      :image="bannerImage"
    />
    <single-item-row :items="questions" />
  </section>

</template>

<script>
import Banner from "~/components/Banner";
import SingleItemRow from "~/components/UI/lists/SingleItemRow";
import IntroText from "~/components/UI/blocks/IntroText";

export default {
  components: {
    Banner,
    SingleItemRow,
    IntroText
  },
  data() {
    return {
      title: "Explore for yourself",
      subtitle:
        "The freedom to explore the topic of the circular economy is yours in this section. Browse through the latest case studies and explore some of the key issues related to the circular economy. It’s up to you where you go!",
      bannerImage:
        "https://emf-assets-dev.s3.amazonaws.com/media/22/Questions-Banner-Web.jpg"
    };
  },
  computed: {
    questions() {
      return this.$store.getters.loadedQuestions;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
