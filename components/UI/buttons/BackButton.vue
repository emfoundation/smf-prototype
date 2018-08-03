<template>
  <div
    class="title button is-rounded is-4 has-text-weight-normal"
    @click="goBack">{{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.go("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  color: white;
  background-color: $emf;
  border-width: 2px;
  &:hover {
    color: black !important;
    background-color: white;
    border-color: white;
  }
}
</style>
