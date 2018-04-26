<template>
  <div>
    {{ currentAssetFile }}
  </div>
</template>


<script>
export default {
  props : {
    currentAssetFile : String,
    required : true,
  }
  
}
</script>


<style scoped>

</style>
