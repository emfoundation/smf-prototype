<template>
  <section>
    <banner
      :title="asset.name"
      :subtitle="subtitle"
      :back-to="'/questions/' + $route.query.q" />
    <div class="container">
      <div
        id="media-container"
        :class="{ fullscreen: isFullscreen }">
        <embedded-content
          :file="
          asset.file"
          :link="asset.link"
        />
        <div class="level is-mobile media-nav-bar">
          <div class="level-left"/>
          <div class="level-right">
            <fullscreen-button
              :is-fullscreen="isFullscreen"
              @is-fullscreen="isFullscreen = $event"
            />
          </div>
        </div>
      </div>
      <p class="date-uploaded has-text-weight-light">Uploaded on {{ asset.dateUploaded }}</p>
      <p class="mb-5 main-text">{{ asset.description }}</p>
      <div class="tags">
        <span
          v-for="tag in asset.tags"
          :key="tag.id"
          class="tag border-1 is-medium">
          {{ tags[tag] }}
        </span>
      </div>
    </div>
  </section>
</template>
<script>
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
        file: "",
        link:
          "https://drive.google.com/file/d/1loeAiHS7HC8Fenyx0dTHWKIQsxdzNrKg/preview",
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
.date-uploaded {
  margin: 3% 0;
}
.main-text {
  width: 60%;
}
</style>
