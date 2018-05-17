<template>
  <div>
    <banner
      :title="static_title"
      :subtitle="static_subtitle"/>
    <back-link link="/learnerjourneys"/>
    <div
      v-if="currentChapter"
      class="mb-5">
      <div class="chapter-nav-background mt-5 mb-5">
        <div class="container p-0">
          <nav
            class="pagination is-large"
            role="navigation"
            aria-label="pagination">
            <a
              :disabled="chapterIndex === 0"
              class="pagination-previous is-marginless chapter-nav-previous"
              @click=" chapterIndex > 0 ? chapterIndex -= 1 : 0">
              <span class="icon">
                <i class="fas fa-angle-left"/>
              </span>
            </a>
            <ul class="pagination-list chapter-nav">
              <div
                class="pagination-link chapter-nav-link is-marginless chapter-part">
                Chapter:
              </div>
              <div
                v-for="(chapter,index) in chapters"
                :key="chapter.id"
                :class="chapterIndex == index ? 'is-current': ''"
                class="pagination-link chapter-nav-link is-marginless"
                @click="chapterIndex = index">
                <div>
                  {{ index + 1 }}
                </div>
                <div class="container chapter-nav-info pt-2">
                  <div class="">
                    {{ currentChapter.title }}
                  </div>
                </div>
              </div>
            </ul>
            <a
              :disabled="chapterIndex > chapters.length -2"
              class="pagination-next is-marginless chapter-nav-next"
              @click=" chapterIndex < chapters.length - 1 ? chapterIndex += 1 : 0">
              <span class="icon">
                <i class="fas fa-angle-right"/>
              </span>
            </a>

          </nav>
        </div>
      </div>
      <div class="container">

        <h3 class="title has-text-weight-bold mb-0 mt-3">Chapter {{ chapterIndex + 1 }} of {{ chapters.length }}:</h3>
        <h3 class="title">{{ currentChapter.title }}</h3>
        <p
          class="main-text">{{ currentChapter.description }}</p>
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
          <h4>This is about...</h4>
          <AssetTags :tags="currentAsset.tags"/>
        </section>
      </div>
    </div>
    <div
      v-else
      class="container mb-5"
    >
      <h1>Sorry, this Learner Journey has no Chapters! Please come back later...</h1>
    </div>
    <!-- Asset ID: {{ currentAssetID }}
    <br>
    Asset: {{ currentAsset }}
    <br>
    <br>
    ALL Chapters: {{ chapters }}
    <br>
    ALL Assets: {{ assets }} -->
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
      chapterIndex: 0,
      isFullscreen: false
    };
  },
  computed: {
    currentChapter() {
      return this.chapters[this.chapterIndex];
    },
    currentAssetID() {
      return this.chapters[this.chapterIndex].asset;
    },
    currentAsset() {
      if (this.currentAssetID) {
        return this.assets.find(asset => asset.id == this.currentAssetID);
      }
    }
  },
  asyncData(context) {
    let getRequests = [
      context.$axios.get(
        process.env.API_BASE_URL +
          "/chapters/collection/" +
          process.env.SMF_COLLECTION_ID +
          "/learner-journey/" +
          context.params.id
      ),
      context.$axios.get(
        process.env.API_BASE_URL +
          "/assets/collection/" +
          process.env.SMF_COLLECTION_ID +
          "/learner-journey/" +
          context.params.id
      )
    ];

    let returnedData = Promise.all(getRequests);

    return returnedData
      .then(res => {
        let chapters =
          res[0].data.constructor === Array ? res[0].data : [res[0].data];
        let assets =
          res[1].data.constructor === Array ? res[1].data : [res[1].data];

        return {
          chapters: chapters,
          assets: assets
        };
      })
      .catch(console.error);
  }
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
