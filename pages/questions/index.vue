<template>
  <section class="hero">
    <banner
      :title="title"
      :subtitle="subtitle"
      :image="bannerImage"
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
  components: {
    Banner,
    SingleItemRow,
    IntroText
  },
  data() {
    return {
      title: "Big Questions",
      subtitle: "Pick a Big Question",
      bannerImage: "https://placeimg.com/1000/300/arch"
    };
  },
  computed: {
    questions() {
      return this.$store.getters.loadedQuestions;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
