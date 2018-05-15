<template>
  <div class="column pt-0">
    <div class="pt-8 pr-6 pb-8 pl-6 card answer">
      <h3 class="is-size-4 has-text-weight-bold mb-2">{{ answer.name }}</h3>
      <p class="mb-2">{{ answer.description }}</p>
      <nuxt-link
        to="/assets/1"
        class="is-pulled-right">
        <p class="subtitle">
          <i class="fas fa-chevron-circle-right fa-lg arrow"/>
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    answer: {
      type: Object,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
.answer {
  min-height: 300px;
}
</style>
