<template>
  <div>
    <banner v-bind:title="title" v-bind:subtitle="subtitle"/>
    <learnerjourney-list v-bind:items="learnerJourneys" />
  </div>
</template>

<script>
import LearnerjourneyList from '~/components/learnerjourneys/LearnerjourneysList';
import Banner from '~/components/Banner';

export default {
  data () {
    return {
      title : 'Learner Journeys',
      subtitle : 'Description all about what a Learner Journey...',
      learnerJourneys : [
        { "id": 1, "name": "MyLearnerJourney" },
        { "id": 2, "name": "LearnerJourney2" },
        { "id": 3, "name": "SuperAdvancedLearnerJourney" },
      ],
    }
  },
  components : {
    Banner,
    LearnerjourneyList,
  }
}
</script>

<style>

</style>
