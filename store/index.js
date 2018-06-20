import Vuex from "vuex";

const createStore = () => {
  // https://stackoverflow.com/a/2450976
  let shuffle = function(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  return new Vuex.Store({
    state: {
      tags: [],
      homePageAb: "",
      learnerJourneys: [],
      questions: [],
      formats: {
        IM: "Image",
        VI: "Video",
        PR: "Presentation",
        LN: "Link",
        AU: "Audio",
        DO: "Document",
        OT: "Other"
      },
      formatToIcon: {
        IM: "image",
        VI: "video",
        PR: "file-powerpoint",
        LN: "link",
        AU: "headphones",
        DO: "file",
        OT: "file"
      }
    },
    mutations: {
      setTags(state, tags) {
        state.tags = tags;
      },
      setHomePageAb(state, homePageAb) {
        state.homePageAb = homePageAb;
      },
      setLearnerJourneys(state, learnerJourneys) {
        state.learnerJourneys = shuffle(learnerJourneys);
      },
      setQuestions(state, questions) {
        state.questions = shuffle(questions);
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        // init AB value for homepage testing
        Math.random() > 0.5
          ? vuexContext.commit("setHomePageAb", "a")
          : vuexContext.commit("setHomePageAb", "b");

        let getRequests = [
          this.$axios.get("http://staging.circulareconomy.space/api/tags/"),
          this.$axios.get(
            "http://staging.circulareconomy.space/api/learner-journeys/"
          ),
          this.$axios.get("http://staging.circulareconomy.space/api/questions/")
        ];

        let returnedData = Promise.all(getRequests);

        return returnedData
          .then(res => {
            vuexContext.commit("setTags", res[0].data);
            vuexContext.commit("setLearnerJourneys", res[1].data);
            vuexContext.commit("setQuestions", res[2].data);
          })
          .catch(e => context.error(e));
      }
    },
    getters: {
      loadedTags(state) {
        return state.tags;
      },
      loadedHomePageAb(state) {
        return state.homePageAb;
      },
      loadedLearnerJourneys(state) {
        return state.learnerJourneys;
      },
      loadedQuestions(state) {
        return state.questions;
      },
      loadedFormats(state) {
        return state.formats;
      },
      loadedFormatToIcons(state) {
        return state.formatToIcon;
      }
    }
  });
};

export default createStore;
