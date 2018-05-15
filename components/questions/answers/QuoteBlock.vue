<template>
  <div class="columns is-variable is-1">
    <div class="column pt-0">
      <div class="pt-6 pr-6 pb-8 pl-6 card answer">
        <h3 class="is-size-4 has-text-weight-bold is-italic mb-2">"{{ quote.quote }}"</h3>
        <p class="mb-2">- {{ quote.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
.answer {
  height: 300px;
}
</style>
