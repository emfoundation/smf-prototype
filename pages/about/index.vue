<template>
  <div>
    <banner
      :title="title"
      :image="bannerImage"
    />
  </div>
</template>

<script>
import Banner from "~/components/Banner";

export default {
  components: {
    Banner
  },
  data: function() {
    return {
      title: "About Us",
      bannerImage: "https://placeimg.com/1000/300/arch"
    };
  }
};
</script>

<style lang="css">
</style>
