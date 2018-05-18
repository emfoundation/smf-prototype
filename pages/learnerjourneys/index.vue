<template>
  <div>
    <banner
      :title="title"
      :subtitle="subtitle"
      back-to="/"
    />
    <div class="container">
      <learnerjourney-list :items="learnerJourneys" />
    </div>
  </div>
</template>

<script>
import LearnerjourneyList from "~/components/learnerjourneys/LearnerjourneysList";
import Banner from "~/components/Banner";

export default {
  components: {
    Banner,
    LearnerjourneyList
  },
  data() {
    return {
      title: "Learner Journeys",
      subtitle:
        "Pick a journey that interests you, and get on track to become a CE wizz"
    };
  },
  asyncData(context) {
    return context.$axios
      .$get(process.env.API_BASE_URL + "learner-journeys/")
      .then(res => ({ learnerJourneys: res }))
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
</style>
