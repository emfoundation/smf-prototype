<template>
  <div>
    <banner
      :title="title"
      :subtitle="subtitle"
      back-to="/"
    />
    <single-item-row :items="learningPaths" />
  </div>
</template>

<script>
import SingleItemRow from "~/components/UI/lists/SingleItemRow";
import Banner from "~/components/Banner";

export default {
  components: {
    Banner,
    SingleItemRow
  },
  data() {
    return {
      title: "Let us Guide You",
      subtitle: "Pick a Learning Path"
    };
  },
  asyncData(context) {
    return context.$axios
      .$get(process.env.API_BASE_URL + "learner-journeys/")
      .then(res => ({ learningPaths: res }))
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
</style>
