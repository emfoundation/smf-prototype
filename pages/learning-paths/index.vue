<template>
  <div>
    <banner
      :title="title"
      :subtitle="subtitle"
      :image="bannerImage"
      back-to="/"
    />
    <single-item-row :items="learningPaths" />
  </div>
</template>

<script>
import SingleItemRow from "~/components/UI/lists/SingleItemRow";
import Banner from "~/components/Banner";
import IntroText from "~/components/UI/blocks/IntroText";

export default {
  components: {
    Banner,
    SingleItemRow,
    IntroText
  },
  data() {
    return {
      title: "Let us Guide You",
      subtitle:
        "As a global thought leader in the circular economy, in this section we guide you through the latest and most relevant content for those working within the fashion industry that want to learn what the circular economy is all about.",
      bannerImage:
        "https://emf-assets-dev.s3.amazonaws.com/media/22/Learning-Paths-Banner-Web.jpg"
    };
  },
  computed: {
    learningPaths() {
      return this.$store.getters.loadedLearnerJourneys;
    }
  }
};
</script>
