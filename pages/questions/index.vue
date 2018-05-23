<template>
  <section class="hero">
    <banner
      :title="title"
      :subtitle="subtitle"
      :image="bannerImage"
      back-to="/"
    />
    <intro-text
      heading="Why all the big questions?.."
      text="Nullam nec semper urna. Fusce eu dui et arcu ullamcorper tincidunt et quis erat. Suspendisse feugiat ligula at fermentum ultrices. Nunc in nunc fermentum, viverra augue vel, auctor sapien. Donec sed turpis porttitor, tempor nunc lobortis, suscipit nisi. Nullam quis justo vel purus gravida vestibulum nec rutrum nunc. Morbi aliquam eget arcu sit amet hendrerit. Aenean non massa nisl. In ut arcu at odio tincidunt mollis vitae id lectus. " />
    <single-item-row :items="questions" />
  </section>

</template>

<script>
import Banner from "~/components/Banner";
import SingleItemRow from "~/components/UI/lists/SingleItemRow";
import IntroText from "~/components/UI/blocks/IntroText";

export default {
  asyncData(context, callback) {
    callback(null, {
      title: "Big Questions",
      subtitle: "Pick a Big Question",
      bannerImage: "https://placeimg.com/1000/300/arch",

      // This would be replaced by a store or API call
      // Get all questions: '/api/tag-groups'
      questions: [
        {
          id: 1,
          name: "This could be the question, but what IS the question?",
          description:
            "Changing the way we think about making products, what if we could redesign everything?",
          thumbnail: "https://placeimg.com/1000/480/animals"
        },
        {
          id: 2,
          name: "Materials",
          description: "Materials affect everyone, it's time for change",
          thumbnail: "https://placeimg.com/1000/480/tech"
        },
        {
          id: 3,
          name: "Economics",
          description: "How does being Circular fit into the Economy? Find out",
          thumbnail: "https://placeimg.com/1000/480/people"
        },
        {
          id: 4,
          name: "Business",
          description: "Money makes the world go round, lets change that",
          thumbnail: "https://placeimg.com/1000/480/arch"
        }
      ]
    });
  },
  components: {
    Banner,
    SingleItemRow,
    IntroText
  }
};
</script>

<style lang="scss" scoped>
</style>
