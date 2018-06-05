<template>
  <div>
    <banner
      :title="learnerJourney.name"
      back-to="/learning-paths"/>
    <div
      v-if="currentChapter"
      class="mb-5">
      <div class="chapter-nav-background mb-3">
        <div class="wrap pt-0 pb-0">
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
                <span class="is-size-5 has-text-weight-bold">
                  Chapter:
                </span>
              </div>
              <div
                v-for="(chapter,index) in chapters"
                :key="chapter.id"
                :class="chapterIndex == index ? 'is-current': ''"
                class="pagination-link chapter-nav-link is-marginless"
                @click="chapterIndex = index">
                <div>
                  <span class="is-size-5">
                    {{ index + 1 }}
                  </span>
                </div>
                <div class="container chapter-nav-info pt-2">
                  <div class="">
                    {{ getChapterTitle(index) }}
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
      <div class="wrap">

        <h3 class="title is-5 mb-2 has-text-weight-bold mt-3">Chapter {{ chapterIndex + 1 }} of {{ chapters.length }}:</h3>
        <h3 class="title">{{ currentChapter.title }}</h3>
        <embedded-content
          :file="currentAsset.file"
          :link="currentAsset.link"
        />
        <p class="main-text mb-5">{{ currentChapter.description }}</p>

        <section v-if="currentAsset.tags.length > 0">
          <h4 class="mb-2">This is about...</h4>
          <AssetTags :tags="currentAsset.tags"/>
        </section>
      </div>
    </div>
    <div
      v-else
      class="wrap mb-5 empty-page">
      <h1 class="title is-4 is-italic has-text-centered">Sorry, this Learning Path has no Chapters! Please come back later...</h1>
    </div>
  </div>
</template>

<script>
import AssetTags from "~/components/assets/AssetTags";
import Banner from "~/components/Banner";
import EmbeddedContent from "~/components/assets/EmbeddedContent";
import FullscreenButton from "~/components/UI/buttons/FullscreenButton";

export default {
  components: {
    AssetTags,
    Banner,
    EmbeddedContent,
    FullscreenButton
  },
  data() {
    return {
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
  methods: {
    getChapterTitle: function(index) {
      return this.chapters[index].title;
    }
  },
  asyncData(context) {
    let getRequests = [
      context.$axios.get(
        process.env.API_BASE_URL +
          "/chapters/collection/" +
          process.env.SMF_COLLECTION_ID +
          "/learner-journey/" +
          context.params.id +
          "/"
      ),
      context.$axios.get(
        process.env.API_BASE_URL +
          "/assets/collection/" +
          process.env.SMF_COLLECTION_ID +
          "/learner-journey/" +
          context.params.id +
          "/"
      ),
      context.$axios.get(
        process.env.API_BASE_URL +
          "/learner-journeys/" +
          context.params.id +
          "/"
      )
    ];

    let returnedData = Promise.all(getRequests);

    return returnedData
      .then(res => {
        let chapters =
          res[0].data.constructor === Array ? res[0].data : [res[0].data];
        let assets =
          res[1].data.constructor === Array ? res[1].data : [res[1].data];
        let learnerJourney = res[2].data;

        return {
          chapters,
          assets,
          learnerJourney
        };
      })
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
.min-width {
  width: 100px;
}
.empty-page {
  height: 50vh;
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
    width: 80%;
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
@include fullhd() {
  .main-text {
    width: 60%;
  }
}
</style>
