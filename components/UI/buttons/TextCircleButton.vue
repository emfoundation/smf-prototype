<template>
  <nuxt-link
    :to="link"
    class="circle-button">
    <p class="subtitle has-text-white has-text-weight-bold">
      <slot/>
      <span
        :class="{ 'is-primary': isPrimaryColour, 'is-small': isSmall }"
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
      type: [String, Object],
      required: true
    },
    isSmall: {
      type: Boolean,
      default: false
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
  transition: $smf-transition;
  background: $emf;
  height: 60px;
  width: 60px;
  border-radius: 30px;
}
.circle.is-primary {
  background: $primary;
}
.circle-button {
  &:hover {
    .circle {
      background: darken($emf, 20%);
    }
    .circle.is-primary {
      background: darken($primary, 20%);
    }
  }
}
.circle.is-small {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  font-size: 0.8rem;
}
</style>
