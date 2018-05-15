<template>
  <section class="hero">
    <banner
      :title="title"
      :subtitle="subtitle" />
    <back-link
      class="ml-3"
      link="/questions" />
    <div class="">
      <answer-block :answers="firstAnswerBlock" />

      <quote-block :quote="quote" />

      <answer-block
        v-for="row in middleAnswerBlock"
        :key="row"
        :answers="row" />

      <answer-block :answers="lastAnswerBlock" />
    </div>

  </section>

</template>

<script>
import Banner from "~/components/Banner";
import BackLink from "~/components/UI/BackLink";
import AnswerBlock from "~/components/questions/answers/AnswerBlock";
import QuoteBlock from "~/components/questions/answers/QuoteBlock";

export default {
  asyncData(context, callback) {
    callback(null, {
      // question title & subtitle would need to be retrieved from the API, for now it is taken from the route
      title: context.params.id,
      subtitle:
        "Vestibulum elementum erat et vulputate mattis. Quisque fringilla, massa et ultrices pretium, eros lacus pellentesque augue, nec egestas neque purus volutpat ante. Suspendisse ut metus commodo, bibendum mi eu, accumsan lorem. Quisque non cursus urna, ut accumsan lacus.",
      // This would be replaced by a store or API call
      // API Endpoint needed; '/api/assets/tag-group'
      answers: [
        {
          id: 1,
          name: "Conxtech - modular building system",
          description: "This is everything about biocycle, the cycle bio"
        },
        {
          id: 2,
          name: "Design for Circular Economy",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 3,
          name: "Regional practice - Japan",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 4,
          name: "Steel in the circular economy",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 5,
          name: "Making music circular",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 6,
          name: "Making music circular",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 7,
          name: "Steel in the circular economy",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 8,
          name: "Making music circular",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 9,
          name: "Making music circular",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        },
        {
          id: 10,
          name: "Making music circular",
          description:
            "Superman is also known as clark kent, but everybody knows that because he looks the same"
        }
      ],
      quote: {
        quote: "Very profound thoughts",
        author: "Mert"
      }
    });
  },
  components: {
    Banner,
    BackLink,
    AnswerBlock,
    QuoteBlock
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
      var rows = middle.length / 3;
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
