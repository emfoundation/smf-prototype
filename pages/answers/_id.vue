<template>
  <section>
    <banner
      :title="question.name"
      :subtitle="answer.question_context"
    />
    <div class="wrap">
      <h3 class="title">{{ answer.title }}</h3>
      <p
        v-if="answer.description"
        class="main-text mb-5">{{ answer.description }}</p>
      <embedded-content
        :file="
        asset.file"
        :link="asset.link"
      />
      <div
        v-if="answer.content"
        class="rich-content main-text mb-5"
        v-html="answer.content"/>

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
  },
  asyncData(context) {
    let getRequests = [
      context.$axios.$get(
        process.env.API_BASE_URL + "questions/" + context.query.q + "/"
      ),
      context.$axios.$get(
        process.env.API_BASE_URL + "answers/" + context.params.id + "/"
      ),
      context.$axios.$get(
        process.env.API_BASE_URL + "asset/answer/" + context.params.id + "/"
      )
    ];

    let returnedData = Promise.all(getRequests);
    return returnedData
      .then(res => {
        let question = res[0];
        let answer = res[1];
        let asset = res[2][0];

        return {
          question,
          answer,
          asset
        };
      })
      .catch(console.error);
  }
};
</script>

<style lang="scss" scoped>
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
