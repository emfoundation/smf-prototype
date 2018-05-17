<template>
  <div>
    <banner
      :title="static_title"
      :subtitle="static_subtitle"/>
    <back-link link="/learnerjourneys"/>
    <div class="chapter-nav-background mt-5 mb-5">
      <div class="container p-0">
        <nav
          class="pagination is-large"
          role="navigation"
          aria-label="pagination">
          <a
            class="pagination-previous is-marginless chapter-nav-previous"
            @click=" assetIndex > 0 ? assetIndex -= 1 : 0">
            <span class="icon">
              <i class="fas fa-angle-left"/>
            </span>
          </a>
          <ul class="pagination-list chapter-nav">
            <div
              class="pagination-link chapter-nav-link is-marginless chapter-part">
              Part:
            </div>
            <div
              v-for="(chapter,index) in assets"
              :key="chapter.id"
              :class="assetIndex == index ? 'is-current': ''"
              class="pagination-link chapter-nav-link is-marginless"
              @click="assetIndex = index">
              <div class="">
                {{ index + 1 }}
              </div>
              <div class="container chapter-nav-info pt-2">
                <div class="">
                  {{ getAsset(index).name }}
                </div>
              </div>
            </div>
          </ul>
          <a
            class="pagination-next is-marginless chapter-nav-next"
            @click=" assetIndex < assets.length - 1 ? assetIndex += 1 : 0">
            <span class="icon">
              <i class="fas fa-angle-right"/>
            </span>
          </a>

        </nav>
      </div>
    </div>
    <div
      v-if="currentAsset"
      class="container mb-5">
      <h3 class="title has-text-weight-bold mb-0 mt-3">Chapter {{ assetIndex +1 }} of {{ assets.length }}:</h3>
      <h3 class="title">{{ currentAsset.name }}</h3>
      <p
        class="main-text">{{ currentAsset.description }}</p>
      <div
        id="media-container"
        :class="{ fullscreen: isFullscreen }"
        class="mb-5">
        <embeded-content
          :file="currentAsset.file"
          :link="currentAsset.link"
        />
      </div>

      <section>
        <p
          class="main-text"
          v-html="currentAsset.description">{{ currentAsset.description }}</p>

        <AssetTags :tags="currentAsset.tags"/>
      </section>

    </div>
    <div
      v-else
      class="container mb-5"
    >
      <back-link link="/learnerjourneys"/>
      <h1>Sorry, this Learner Journey has no Chapters! Please come back later...</h1>
    </div>
  </div>
</template>

<script>
import AssetTags from "~/components/assets/AssetTags";
import BackLink from "~/components/UI/BackLink";
import Banner from "~/components/Banner";
import EmbededContent from "~/components/EmbededContent";
import FullscreenButton from "~/components/UI/FullscreenButton";

export default {
  components: {
    AssetTags,
    BackLink,
    Banner,
    EmbededContent,
    FullscreenButton
  },
  data() {
    return {
      static_title: "What is the Circular Economy?",
      static_subtitle:
        "Begin your journey of circular enlightenment by following our reccomended tour of the most relevant circular economy info",
      assetIndex: 0,
      isFullscreen: false,
      assets: [
        {
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
        {
          id: 200,
          name: "Linear Economy - Simplified 2",
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
        {
          id: 150,
          name: "Linear Economy - Simplified 3",
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
        {
          id: 160,
          name:
            "Linear Economy - Simplified 4 really long title because I couldn't fit it all in",
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
        {
          id: 180,
          name: "Linear Economy - Simplified 5",
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
        }
      ]
    };
  },
  computed: {
    currentAsset() {
      return this.assets[this.assetIndex];
    }
  },
  methods: {
    getAsset: function(index) {
      return this.assets[index];
    }
  }
  // asyncData(context) {
  //   return context.$axios
  //     .$get(
  //       process.env.API_BASE_URL +
  //         "/chapters/collection/" +
  //         process.env.SMF_COLLECTION_ID +
  //         "/learner-journey/" +
  //         context.params.id +
  //         "/"
  //     )
  //     .then(res => ({ assets: res }))
  //     .catch(console.error);
  // }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.min-width {
  width: 100px;
}
.chapter-nav-background {
  height: 52px;
  background-color: $light-grey;
  border: 3px solid transparent;
}
.chapter-nav-link {
  border-radius: 0;
  border-color: white;
  background-color: $light-grey;
  display: none;
}
.chapter-nav-link.is-current,
.chapter-nav-link.chapter-part {
  display: block;
}
.chapter-nav-previous,
.chapter-nav-next {
  border: 1px solid white;
}
.chapter-nav-info {
  display: none;
}
@include tablet() {
  .main-text {
    width: 60%;
  }
  .pagination-previous,
  .pagination-next {
    display: none;
  }
  .chapter-nav-link {
    display: block;
    .chapter-nav-info {
      min-height: 70px;
      z-index: 2;
      position: absolute;
      top: 52px;
      left: -216px;
      width: 486px;

      background-color: $secondary;
    }
    &:hover {
      background-color: $secondary;
      color: white;
      .chapter-nav-info {
        display: block;
      }
    }
  }
}
</style>
