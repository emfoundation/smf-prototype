<template>
  <a class="semicircle-down"> 
    <span class="icon is-size-6">
      <i class="fas fa-lg fa-angle-down"/>
    </span>
  </a>
</template>

<style lang="scss" scoped>
.semicircle-down {
  position: absolute;
  z-index: -1;
  bottom: -35px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: inherit;
  .fa-angle-down {
    position: absolute;
    left: calc(50% - 6px);
    bottom: 20px;
  }
}
</style>
