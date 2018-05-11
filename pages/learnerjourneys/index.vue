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
      <button @click="post">FOO</button>
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
        "Pick a journey that interests you, and get on track to become a CE wizz"
    };
  },
  asyncData(context) {
    return context.$axios
      .$get("http://staging.circulareconomy.space/api/learner-journey/")
      .then(res => ({ learnerJourneys: res }))
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
