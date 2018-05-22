<template>
  <div>
    <banner
      :title="title"
      :subtitle="subtitle"
      :image="bannerImage"
      back-to="/"
    />
    <intro-text
      heading="What's a learning path?"
      text="Nullam nec semper urna. Fusce eu dui et arcu ullamcorper tincidunt et quis erat. Suspendisse feugiat ligula at fermentum ultrices. Nunc in nunc fermentum, viverra augue vel, auctor sapien. Donec sed turpis porttitor, tempor nunc lobortis, suscipit nisi. Nullam quis justo vel purus gravida vestibulum nec rutrum nunc. Morbi aliquam eget arcu sit amet hendrerit. Aenean non massa nisl. In ut arcu at odio tincidunt mollis vitae id lectus. " />
    <single-item-row :items="learningPaths" />
  </div>
</template>

<script>
import SingleItemRow from "~/components/UI/lists/SingleItemRow";
import Banner from "~/components/Banner";
import IntroText from "~/components/UI/blocks/IntroText";

export default {
  components: {
    Banner,
    SingleItemRow,
    IntroText
  },
  data() {
    return {
      title: "Let us Guide You",
      subtitle: "Pick a Learning Path",
      bannerImage: "https://placeimg.com/1000/300/arch"
    };
  },
  asyncData(context) {
    return context.$axios
      .$get(process.env.API_BASE_URL + "learner-journeys/")
      .then(res => ({ learningPaths: res }))
      .catch(console.error);
  }
};
</script>
