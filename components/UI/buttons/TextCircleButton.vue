<template>
  <nuxt-link :to="link">
    <p class="subtitle has-text-white has-text-weight-bold">
      <slot/>
      <span
        :class="isPrimaryColour ? 'primary' : ''"
        class="icon circle ml-4">
        <i class="fas fa-chevron-right arrow has-text-white"/>
      </span>
    </p>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    isPrimaryColour: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.circle {
  background: $emf;
  height: 60px;
  width: 60px;
  border-radius: 30px;
}
.circle.primary {
  background: $primary;
}
</style>
