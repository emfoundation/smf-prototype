<template>
  <div>
    <span
      v-for="tag in tags"
      :key="tag"
      class="tag is-medium border-1 mr-3" >
      {{ loadedTags.find(loadedTag => loadedTag.id === tag).name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  computed: {
    loadedTags() {
      return this.$store.getters.loadedTags;
    }
  }
};
</script>

<style scoped>
</style>
