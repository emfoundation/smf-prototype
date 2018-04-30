<template>
  <div>
    <iframe class="embed embed-file" v-if="file" v-bind:src="file" frameborder="0"></iframe>
    <iframe class="embed embed-link" v-if="link" v-bind:src="link" frameborder="0"></iframe>
  </div>
</template>


<script>
export default {
  props : {
    file : String,
    link : String,
  }

}
</script>


<style scoped>
  .embed {
    height: 60vh;
    width: 100%;
    border: 1px solid black;
    margin: 1rem 0;
  }
  .embed-file {
  }
  .embed-link {
  }
</style>
