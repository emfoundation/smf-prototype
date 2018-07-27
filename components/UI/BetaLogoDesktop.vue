<template>
  <div class="beta-logo-container is-hidden-mobile">
    <p class="has-text-weight-bold">CE Learning Beta</p>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.beta-logo-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 90px;
  height: 84px;
  background-image: url("~/assets/images/beta-logo-full.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  opacity: 0.75;
  p {
    position: relative;
    top: 48px;
    left: 15px;
    width: 20px;
    font-size: 0.6em;
    line-height: 1;
    color: white;
  }
}
</style>
