<template>
  <div>
    <banner
      :title="static_title"
      :subtitle="static_subtitle"/>
    <div
      v-if="currentChapter"
      class="container mb-5">
      <back-link link="/learnerjourneys"/>

      <div
        id="media-container"
        :class="{ fullscreen: isFullscreen }"
        class="mb-5">
        <embeded-content
          :file="currentAsset.file"
          :link="currentAsset.link"
        />
        <div class="level is-mobile media-nav-bar">
          <div class="level-left">
            <button
              :disabled="assetIndex == 0"
              class="button min-width is-dark fullscreen-button"
              @click=" assetIndex > 0 ? assetIndex -= 1 : 0" >
              <span class="fas fa-angle-left mr-2"/>
              Previous Chapter
            </button>
          </div>
          <div class="level-right">
            <fullscreen-button
              :is-fullscreen="isFullscreen"
              @is-fullscreen="isFullscreen = $event"
            />
            <button
              :disabled="assetIndex == assets.length -1"
              class="button level-item mr-0 min-width is-dark fullscreen-button"
              @click=" assetIndex < assets.length - 1 ? assetIndex += 1 : 0" >
              Next Chapter
              <span class="fas fa-angle-right ml-2"/>
            </button>
          </div>
        </div>
      </div>

      <section>
        <p class="has-text-weight-light mb-2">Uploaded on {{ currentAsset.uploaded_at | verboseDate }}</p>
        <h3 class="title mb-0">Chapter {{ assetIndex +1 }} of {{ assets.length }}:</h3>
        <h3 class="title">{{ currentAsset.name }}</h3>

        <p
          class="main-text"
          v-html="currentAsset.description">{{ currentAsset.description }}</p>

      <AssetTags :tags="currentAsset.tags"/></section>

    </div>
    <div
      v-else
      class="container mb-5"
    >
      <back-link link="/learnerjourneys"/>
      <h1>Sorry, this Learner Journey has no Chapters! Please come back later...</h1>
    </div>
    {{ chapters }}
    <br>
    ASSETS: {{ assets }}
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
      if (this.chapters.constructor === Array) {
        return this.chapters[this.chapterIndex];
      }
      return this.chapters;
    },
    currentAsset() {
      // @TODO Does this need computing and how best to do so??
      //   if (this.assets.constructor === Array) {
      //     return this.assets.find(id === currentAsset.asset);
      //   } else if (this.assets.id === currentAsset.asset) {
      //     return this.assets;
      //   }
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
      context.$axios.get("http://staging.circulareconomy.space/api/assets/25")
    ];

    let returnedData = Promise.all(getRequests);

    return returnedData
      .then(res => {
        return {
          chapters: res[0].data,
          assets: res[1].data
        };
      })
      .catch(console.error);
  }
};
</script>

<style scoped>
.min-width {
  min-width: 100px;
}
.main-text {
  width: 60%;
}
</style>
