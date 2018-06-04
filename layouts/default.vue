<template>
  <div>
    <header>
      <the-nav/>
    </header>
    <nuxt />
    <footer class="smf-footer pt-3 has-background-black has-text-white is-size-6">
      <div class="wrap">
        Charity Registration No.: 1130306, OSCR Registration No.: SC043120, Company No.: 6897785
        <br >
        © Copyright 2017 Ellen MacArthur Foundation. All Rights Reserved
      </div>
    </footer>
  </div>
</template>

<script>
import TheNav from "~/components/TheNav.vue";

export default {
  components: {
    TheNav
  }
};
</script>

<style lang="scss">
.smf-footer {
  position: relative;
}
html {
  width: 100%;
  overflow-x: hidden;
  font-family: $font-primary;
  font-size: $base-font-size;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
