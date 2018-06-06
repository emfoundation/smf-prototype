<template>
  <section class="hero">
    <banner
      :title="name"
    />
    <intro-text
      :text="introText"
      :heading="introTitle"/>
    <div v-if="answers.length >= minAnswers">
      <answer-block :answers="firstAnswerBlock" />

      <quote-block :quote="quote" />

      <answer-block
        v-for="(row,index) in middleAnswerBlock"
        :key="index"
        :answers="row" />

      <answer-block :answers="lastAnswerBlock" />
    </div>
    <div
      v-else>
      <p>
        Answers coming soon!
      </p>
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
        process.env.API_BASE_URL + "questions/" + context.params.id + "/"
      ),
      context.$axios.get(
        process.env.API_BASE_URL +
          "answers/collection/" +
          process.env.SMF_COLLECTION_ID +
          "/question/" +
          context.params.id +
          "/"
      )
    ];

    let returnedData = Promise.all(getRequests);

    return returnedData
      .then(res => {
        let name = res[0].data.name;
        let introTitle = res[0].data.intro_title;
        let introText = res[0].data.intro_text;
        let quote = {
          text: res[0].data.quote,
          source: res[0].data.quote_source,
          thumbnail: res[0].data.thumbnail ? res[0].data.thumbnail : ""
        };
        let answers = res[1].data;
        answers.forEach(
          answer =>
            (answer.thumbnail = answer.thumbnail ? answer.thumbnail : "")
        );

        return {
          name,
          introTitle,
          introText,
          quote,
          answers
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
    return {
      minAnswers: 5
    };
  },
  computed: {
    firstAnswerBlock() {
      if (this.answers.length >= this.minAnswers) {
        return this.answers.slice(0, 2);
      }
      return "";
    },
    middleAnswerBlock() {
      if (this.answers.length >= this.minAnswers) {
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
      }
      return "";
    },
    lastAnswerBlock() {
      if (this.answers.length >= this.minAnswers) {
        return this.answers.slice(this.middleAnswerBlock.length * 3 + 2);
      }
      return "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";
</style>
