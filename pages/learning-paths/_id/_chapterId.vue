<template>
  <div>
    <h3 class="title">{{ chapter.title }}</h3>
    <p
      v-if="chapter.description"
      class="main-text mb-5">{{ chapter.description }}</p>
    <embedded-content
      :file="asset.file"
      :link="asset.link"
    />
    <div
      v-if="chapter.content">
      <rich-text
        :content="chapter.content"/>
    </div>

    <section v-if="asset.tags.length > 0">
      <h4 class="mb-2">This is about...</h4>
      <AssetTags :tags="asset.tags"/>
    </section>
  </div>
</template>

<script>
import AssetTags from "~/components/assets/AssetTags";
import EmbeddedContent from "~/components/assets/EmbeddedContent";
import FullscreenButton from "~/components/UI/buttons/FullscreenButton";
import RichText from "~/components/UI/blocks/RichText";

export default {
  components: {
    AssetTags,
    EmbeddedContent,
    FullscreenButton,
    RichText
  },
  data() {
    return {
      isFullscreen: false
    };
  },
  async asyncData(context) {
    let { data: chapter } = await context.$axios.get(
      process.env.API_BASE_URL +
        "chapters/collection/" +
        process.env.SMF_COLLECTION_ID +
        "/learner-journey/" +
        context.params.id +
        "/" +
        context.params.chapterId
    );
    let { data: asset } = await context.$axios.get(
      process.env.API_BASE_URL + "assets/" + chapter.asset
    );
    return {
      chapter,
      asset
    };
  }
};
</script>
