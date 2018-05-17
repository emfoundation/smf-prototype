<template>
  <section class="columns is-variable is-1 pb-1">
    <answer
      v-for="answer in answers"
      :key="answer.id"
      :answer="answer"
    />
  </section>
</template>

<script>
import Answer from "~/components/questions/answers/Answer";
export default {
  components: {
    Answer
  },
  props: {
    answers: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
