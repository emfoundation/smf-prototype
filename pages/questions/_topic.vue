<template>
  <section class="hero">
    <banner 
      :title="title" 
      :subtitle="subtitle" />
    <div class="container">
      <back-link 
        class="ml-3" 
        link="/topics" />
      <assets-list :items="assets"/>
    </div>

  </section> 
  
</template>

<script>
import Banner from "~/components/Banner";
import AssetsList from "~/components/assets/AssetsList";
import BackLink from "~/components/UI/BackLink";

export default {
  asyncData(context, callback) {
    callback(null, {
      // topic would need to be retrieved from the API, for now it is taken from the route
      title: context.params.topic,
      subtitle:
        "Vestibulum elementum erat et vulputate mattis. Quisque fringilla, massa et ultrices pretium, eros lacus pellentesque augue, nec egestas neque purus volutpat ante. Suspendisse ut metus commodo, bibendum mi eu, accumsan lorem. Quisque non cursus urna, ut accumsan lacus.",
      // This would be replaced by a store or API call
      // API Endpoint needed; '/api/assets/tag-group'
      assets: [
        {
          id: 1,
          name: "Conxtech - modular building system",
          description: "This is everything about biocycle, the cycle bio"
        },
        {
          id: 2,
          name: "Design for Circular Economy",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 3,
          name: "Regional practice - Japan",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 4,
          name: "Steel in the circular economy",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        }
      ]
    });
  },
  components: {
    Banner,
    AssetsList,
    BackLink
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
