<template>
  <div
    v-scroll="onScroll"
    @click="toTop">
    <div
      :class="{ 'is-active': isVisible}"
      class="to-top-btn icon">
      <i class="fas fa-lg fa-chevron-up has-text-white"/>
    </div>
    <div/>
  </div>
</template>

<script>
export default {
  // Creates a scroll directive (v-scroll)
  // This would probably benefit from being made global
  // https://vuejs.org/v2/cookbook/creating-custom-scroll-directives.html
  directives: {
    scroll: {
      // Creates listener when component is inserted into parent
      inserted: function(el, binding) {
        window.addEventListener("scroll", binding.value);
      },
      // Removes when the component is destroyed
      unbind: function(el, binding) {
        window.removeEventListener("scroll", binding.value);
      }
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    onScroll() {
      if (window.scrollY > 500) {
        return (this.isVisible = true);
      } else {
        return (this.isVisible = false);
      }
    },
    toTop() {
      return window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.to-top-btn {
  $btn-radius: 30px;
  @include circle($btn-radius);

  transition: $smf-transition;
  background-color: $secondary;
  opacity: 0;

  position: fixed;
  z-index: 50;
  right: 2rem;
  bottom: 2rem;
  visibility: hidden;
  &:hover {
    transition: $smf-transition;
    opacity: 1;
  }
}
.is-active {
  visibility: visible;
  opacity: 0.8;
}
@include tablet() {
  .to-top-btn {
    right: 4rem;
    bottom: 5rem;
  }
}
</style>
