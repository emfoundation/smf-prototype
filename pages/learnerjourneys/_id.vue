<template>
  <div>
    <banner
      :title="static_title"
      :subtitle="static_subtitle"/>
    <div
      v-if="currentAsset"
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
    <!-- {{ chapters }}
    <br>
    {{ assets }} -->
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
      assets: []
    };
  },
  computed: {
    currentAsset() {
      return this.assets[this.assetIndex];
    }
  },
  asyncData(context) {
    // return context.$axios
    //   .get(
    //     process.env.API_BASE_URL +
    //       "/chapters/collection/" +
    //       process.env.SMF_COLLECTION_ID +
    //       "/learner-journey/" +
    //       context.params.id +
    //       "/"
    //   )
    //   .then(res => {
    //     return { chapters: res.data };
    //   })
    //   .catch(console.error);

    let promiseToMake = [
      context.$axios.get("http://staging.circulareconomy.space/api/assets/26"),
      context.$axios.get("http://staging.circulareconomy.space/api/assets/25")
    ];

    let promises = Promise.all(promiseToMake);

    return (
      promises
        .then(res => console.log(res[0].data, res[1].data))

        // return Promise.all([
        //   context.$axios.get(
        //     process.env.API_BASE_URL +
        //       "/chapters/collection/" +
        //       process.env.SMF_COLLECTION_ID +
        //       "/learner-journey/" +
        //       context.params.id +
        //       "/"
        //   ),
        //   context.$axios.get(process.env.API_BASE_URL + "/assets/25/")
        // ])
        //   .then(res => {
        //     // return {
        //     //   chapters: chaptersRes.data,
        //     //   assets: assetsRes.data
        //     // };
        //     console.log(res.data);
        //   })
        .catch(console.error)
    );
    // .get(
    //   process.env.API_BASE_URL +
    //     "/chapters/collection/" +
    //     process.env.SMF_COLLECTION_ID +
    //     "/learner-journey/" +
    //     context.params.id +
    //     "/"
    // )
    // .then(res => {
    //   let assets = context.$axios.get(
    //     process.env.API_BASE_URL + "/assets/25/"
    //   );
    //   console.log(assets);
    //   return {
    //     chapters: res.data,
    //     assets: assets
    //   };
    // })
    // .then(res => {
    //   return {
    //     chapters: res.chapters,
    //     assets: res.assets
    //   };
    // })
    // .catch(console.error);
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
