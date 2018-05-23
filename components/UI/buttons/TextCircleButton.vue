<template>
  <nuxt-link
    :to="link"
    class="circle-button">
    <div
      :class="[{'is-small': isSmall }, textColour, circleColour]">
      <div class="subtitle has-text-weight-bold">
        <span class="link-text">
          <slot/>
        </span>
        <span
          class="icon circle ml-4">
          <i class="fas fa-chevron-right arrow"/>
        </span>
      </div>
    </div>
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
    textColour: {
      type: String,
      default: "dark"
    },
    circleColour: {
      type: String,
      default: "primary"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.arrow {
  color: white;
}
.circle {
  transition: $smf-transition;
  background: $emf;
  @include circle(30px);
}
.circle-button {
  &:hover {
    .circle {
      opacity: 0.5;
    }
    // .primary .circle {
    // }
  }
}
.primary .circle {
  background: $primary;
}
.secondary .circle {
  background: $secondary;
}
.white .circle {
  background: white;
}
.white .arrow {
  color: $primary;
}

.dark .link-text {
  color: $secondary;
}
.light .link-text {
  color: white;
}
.is-small .circle {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  font-size: 0.8rem;
}
</style>
