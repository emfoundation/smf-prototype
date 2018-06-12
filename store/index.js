import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      tags: [],
      learnerJourneys: []
    },
    mutations: {
      setTags(state, tags) {
        state.tags = tags;
      },
      setLearnerJourneys(state, learnerJourneys) {
        state.learnerJourneys = learnerJourneys;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        let getRequests = [
          this.$axios.get("http://staging.circulareconomy.space/api/tags/"),
          this.$axios.get(
            "http://staging.circulareconomy.space/api/learner-journeys/"
          )
        ];

        let returnedData = Promise.all(getRequests);

        return returnedData
          .then(res => {
            vuexContext.commit("setTags", res[0].data);
            vuexContext.commit("setLearnerJourneys", res[1].data);
          })
          .catch(e => context.error(e));
      }
    },
    getters: {
      loadedTags(state) {
        return state.tags;
      },
      loadedLearnerJourneys(state) {
        return state.learnerJourneys;
      }
    }
  });
};

export default createStore;
