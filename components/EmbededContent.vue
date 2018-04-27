<template>
  <div>
    <iframe v-if="file" v-bind:src="file" width="300" height="300" frameborder="0"></iframe>
    <iframe v-if="link" v-bind:src="link" width="300" height="300" frameborder="0"></iframe>
    <!-- <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQeOfMOgIupwLYwoL0oFlhzIuo5ZzSBNzXMR6WxQsfM07Z7CD_InmNhsWitbl4F5lWm1FYSBgkGR5GO/embed?start=false&loop=false&delayms=60000" frameborder="0" width="960" height="200" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <iframe src="https://emf-assets-dev.s3.amazonaws.com/media/13/Achieving-a-circular-economy.pdf" width="80%" height="800">
        This browser does not support PDFs. Please download the PDF to view it: <a href="https://emf-assets-dev.s3.amazonaws.com/media/13/Achieving-a-circular-economy.pdf">Download PDF</a>
    </iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/zCRKvDyyHmI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
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

</style>
