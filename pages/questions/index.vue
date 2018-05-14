<template>
  <section class="hero">
    <banner
      :title="title"
    />
    <back-link
      link="/" />
    <questions-list :items="questions" />
  </section>

</template>

<script>
import Banner from "~/components/Banner";
import QuestionsList from "~/components/questions/QuestionsList";
import BackLink from "~/components/UI/BackLink";

export default {
  asyncData(context, callback) {
    callback(null, {
      title: "Big Questions",
      subtitle:
        "Sed nisi neque, euismod sit amet augue id, cursus consectetur tellus. Praesent finibus facilisis massa. Morbi mattis nisi nibh, eget pulvinar turpis elementum nec. Morbi sit amet semper nunc. Cras at ligula sed turpis varius sodales. ",
      // This would be replaced by a store or API call
      // Get all questions: '/api/tag-groups'
      questions: [
        {
          id: 1,
          name: "This could be the question, but what IS the question?",
          description:
            "Changing the way we think about making products, what if we could redesign everything?",
          thumbnail:
            "https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg"
        },
        {
          id: 2,
          name: "Materials",
          description: "Materials affect everyone, it's time for change",
          thumbnail:
            "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/shutterstock_64199689--tojpeg_1408098461475_x2.jpg"
        },
        {
          id: 3,
          name: "Economics",
          description: "How does being Circular fit into the Economy? Find out",
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0LmSaimz7OODkIPCmCKNpRcgVxBFHQp-V7aCwfYOtcMw1NXXmA"
        },
        {
          id: 4,
          name: "Business",
          description: "Money makes the world go round, lets change that",
          thumbnail:
            "https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg"
        }
      ]
    });
  },
  components: {
    Banner,
    QuestionsList,
    BackLink
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
