<template>
  <section class="hero">
    <banner
      :title="title"
      back-to="/questions"
    />
    <intro-text
      :text="subtitle"
      heading="Why all the big questions?.."/>
    <div>
      <answer-block :answers="firstAnswerBlock" />

      <quote-block :quote="quote" />

      <answer-block
        v-for="(row,index) in middleAnswerBlock"
        :key="index"
        :answers="row" />

      <answer-block :answers="lastAnswerBlock" />
    </div>

  </section>

</template>

<script>
import Banner from "~/components/Banner";
import AnswerBlock from "~/components/questions/answers/AnswerBlock";
import QuoteBlock from "~/components/questions/answers/QuoteBlock";
import IntroText from "~/components/UI/blocks/IntroText";

export default {
  asyncData(context) {
    let getRequests = [
      context.$axios.get(
        process.env.API_BASE_URL + "/questions/" + context.params.id + "/"
      ),
      context.$axios.get(
        process.env.API_BASE_URL +
          "/answers/collection/" +
          process.env.SMF_COLLECTION_ID +
          "/question/" +
          context.params.id +
          "/"
      )
    ];

    let returnedData = Promise.all(getRequests);

    return returnedData
      .then(res => {
        let title = res[0].data.name;
        let subtitle = res[0].data.description;
        let quote = {
          text: res[0].data.quote,
          source: res[0].data.quote_source
        };
        let answers = res[1].data;

        return {
          title,
          subtitle,
          answers,
          quote
        };
      })
      .catch(console.error);
  },
  components: {
    Banner,
    AnswerBlock,
    QuoteBlock,
    IntroText
  },
  data() {
    return {};
  },
  computed: {
    firstAnswerBlock() {
      return this.answers.slice(0, 2);
    },
    middleAnswerBlock() {
      var length = this.answers.length;
      var remainder = (length - 2) % 3;
      if (remainder == 0) {
        var middle = this.answers.slice(2, length);
      } else {
        var middle = this.answers.slice(2, -remainder);
      }
      var rows = Math.floor(middle.length / 3);
      var middleSegments = [];
      for (var i = 0; i < rows; i++) {
        middleSegments.push(middle.slice(i * 3, i * 3 + 3));
      }
      return middleSegments;
    },
    lastAnswerBlock() {
      return this.answers.slice(this.middleAnswerBlock.length * 3 + 2);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
