<template>
  <section>
    <banner
      :title="asset.name"
      :subtitle="subtitle"
      :back-to="'/questions/' + $route.query.q" />
    <div class="wrap">
      <h3 class="title">{{ asset.name }}</h3>
      <p class="mb-5 main-text">{{ asset.description }}</p>
      <embedded-content
        :file="
        asset.file"
        :link="asset.link"
      />
      <section v-if="asset.tags.length > 0">
        <h4 class="mb-2">This is about...</h4>
        <AssetTags :tags="asset.tags"/>
      </section>
    </div>
  </section>
</template>
<script>
import AssetTags from "~/components/assets/AssetTags";
import Banner from "~/components/Banner";
import EmbeddedContent from "~/components/assets/EmbeddedContent";
import FullscreenButton from "~/components/UI/buttons/FullscreenButton";

export default {
  asyncData(context, callback) {
    callback(null, {
      // Asset name would need to be retrieved from the API, for now it is taken from the route
      subtitle:
        "How can we change our linear ways and kickstart the Circular Economy from the very beginning, by leveraging Design thinking.",
      asset: {
        id: 170,
        name: "Linear Economy - Simplified",
        file: "https://placeimg.com/800/400/arch.png",
        link: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ante vitae ante porttitor, vel cursus elit tempus. Donec vel venenatis nunc. Morbi condimentum ante sit amet erat vestibulum vulputate. In felis justo, luctus ac ultrices at, cursus quis turpis. Proin rhoncus convallis enim eu posuere. Sed eget ligula venenatis, suscipit velit quis, luctus justo. Nulla non lacinia neque. Praesent eget dui dui. Integer eu sapien sit amet tortor pharetra posuere. In eu bibendum nisl. Mauris bibendum molestie erat, id condimentum justo hendrerit quis. Ut eget velit eros. <br><br>Nulla iaculis diam volutpat orci viverra porttitor. Vivamus accumsan tristique enim semper pulvinar. Etiam in egestas arcu. Nam in auctor nisi. Aenean eu suscipit massa, quis facilisis quam. Nunc nec pretium ex. Fusce ipsum est, molestie eget nulla quis, sollicitudin molestie lorem.",
        duration: null,
        creation_date: null,
        copyright_info: "",
        enabled: true,
        status: "",
        type_field: "OT",
        filetype: "",
        uploaded_at: "2017-04-14T14:20:23.598593Z",
        last_edit_at: null,
        tags: [2, 5],
        locations: [],
        contributors: [],
        collections: []
      },
      tags: {
        1: "Fashion",
        2: "Circular Fibres",
        3: "Design Thinking",
        4: "Biocycle",
        5: "IoT"
      }
    });
  },
  components: {
    AssetTags,
    Banner,
    EmbeddedContent,
    FullscreenButton
  },
  data() {
    return {
      isFullscreen: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.date-uploaded {
  margin: 3% 0;
}
@include tablet() {
  .main-text {
    width: 80%;
  }
}
@include fullhd() {
  .main-text {
    width: 60%;
  }
}
</style>
