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
        <!-- <embeded-content
          :file="currentAsset.file"
          :link="currentAsset.link"
        /> -->
        <div class="level is-mobile media-nav-bar">
          <div class="level-left">
            <button
              :disabled="chapterIndex == 0"
              class="button min-width is-dark fullscreen-button"
              @click=" chapterIndex > 0 ? chapterIndex -= 1 : 0" >
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
              :disabled="chapterIndex == chapters.length -1"
              class="button level-item mr-0 min-width is-dark fullscreen-button"
              @click=" chapterIndex < chapters.length - 1 ? chapterIndex += 1 : 0" >
              Next Chapter
              <span class="fas fa-angle-right ml-2"/>
            </button>
          </div>
        </div>
      </div>

      <section>
        <!-- <p class="has-text-weight-light mb-2">Uploaded on {{ currentAsset.uploaded_at | verboseDate }}</p> -->
        <h3 class="title mb-0">Chapter {{ chapterIndex +1 }} of {{ chapters.length }}:</h3>
        <h3 class="title">{{ currentChapter.name }}</h3>

        <!-- <p
        class="main-text"
        v-html="currentChapter.description">{{ currentChapter.description }}</p> -->


        <!-- <AssetTags :tags="currentAsset.tags"/> -->

      </section>
    </div>
    <div
      v-else
      class="container mb-5"
    >
      <back-link link="/learnerjourneys"/>
      <h1>Sorry, this Learner Journey has no Chapters! Please come back later...</h1>
    </div>
    Asset ID: {{ currentAssetID }}
    <br>
    Asset: {{ currentAsset }}
    <br>
    <br>
    ALL Chapters: {{ chapters }}
    <br>
    ALL Assets: {{ assets }}
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
      console.log("currentChapter recalculated");
      return this.chapters[this.chapterIndex];
    },
    currentAssetID() {
      console.log("currentAssetID recalculated");
      return this.chapters[this.chapterIndex].asset;
    },
    currentAsset() {
      console.log("currentAsset recalculated");
      // return the asset from assets that matches the chapter.asset id
      if (this.currentAssetID) {
        return this.assets.find(asset => asset.id == this.currentAssetID);
      }
    }
  },
  // watch: {
  //   chapterIndex: function() {
  //     this.currentAssetID = this.chapters[this.chapterIndex].asset;
  //     console.log("chapterIndex has changed!");
  //   }
  // },
  asyncData(context) {
    console.log("async data is running");
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

<style scoped>
.min-width {
  min-width: 100px;
}
.main-text {
  width: 60%;
}
</style>
