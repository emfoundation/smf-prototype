<template>
  <section class="columns is-variable is-1 pb-1 pt-0">
    <answer />
    <answer />
    <answer />
  </section>
</template>

<script>
import Answer from "~/components/questions/answers/Answer";
export default {
  components: {
    Answer
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
