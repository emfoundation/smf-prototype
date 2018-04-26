<template>
  <div>
    <banner v-bind:title="title" v-bind:subtitle="subtitle"/>
    <card-list baseUrl="/learnerjourneys/" v-bind:items="learnerJourneys" />
  </div>
</template>

<script>
import CardList from '~/components/CardList';
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
    CardList,
  }
}
</script>

<style>

</style>
