<template>
  <div>
    <banner 
      :title="title" 
      :subtitle="subtitle"
    />
    <div class="container">
      <back-link 
        class="ml-3" 
        link="/" />
      <learnerjourney-list :items="learnerJourneys" />
    </div>
  </div>
</template>

<script>
import LearnerjourneyList from "~/components/learnerjourneys/LearnerjourneysList";
import Banner from "~/components/Banner";
import BackLink from "~/components/UI/BackLink";

export default {
  components: {
    Banner,
    LearnerjourneyList,
    BackLink
  },
  data() {
    return {
      title: "Learner Journeys",
      subtitle:
        "Pick a journey that interests you, and get on track to become a CE wizz",
      learnerJourneys: [
        {
          id: 1,
          name: "What is the Circular Economy?",
          description:
            "Find out everything and anything Circular, and become a CE guru"
        },
        {
          id: 2,
          name: "Fashion in a Circular Economy",
          description:
            "How does the concept of a circular economy fit into the fashion industry?"
        },
        {
          id: 3,
          name: "Fashion, from the ground up",
          description:
            "What if, tomorrow Fashion as a concept disappeared, and we had to start again?"
        },
        {
          id: 4,
          name: "Understanding Systems",
          description:
            "Learn how to see the bigger picture, get savvy with Systems & a tour of Systems Thinking"
        }
      ]
    };
  },
  methods: {
    async getLearnerJourneys() {
      const learnerJourneys = await this.$axios.$get(
        "http://staging.circulareconomy.space/api/learner-journey/"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
