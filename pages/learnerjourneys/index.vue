<template>
  <div>
    <banner v-bind:title="title" v-bind:subtitle="subtitle"/>
    <div class="container">
      <back-link class="ml-3" link="/" />
      <learnerjourney-list v-bind:items="learnerJourneys" />
    </div>
  </div>
</template>

<script>
import LearnerjourneyList from '~/components/learnerjourneys/LearnerjourneysList';
import Banner from '~/components/Banner';
import BackLink from '~/components/UI/BackLink';

export default {
  data () {
    return {
      title : 'Learner Journeys',
      subtitle : 'Description all about what a Learner Journey...',
      learnerJourneys : [
        { "id": 1, "name": "MyLearnerJourney" },
        { "id": 2, "name": "LearnerJourney2" },
        { "id": 3, "name": "Super Advanced Learner Journey" },
      ],
    }
  },
  components : {
    Banner,
    LearnerjourneyList,
    BackLink,
  },
  methods : {
    async getLearnerJourneys () {
      const learnerJourneys = await this.$axios.$get('http://staging.circulareconomy.space/api/learner-journey/')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~/assets/scss/main.scss';
</style>
