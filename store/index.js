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

        let returnedData = Promise.all(getRequests)

        return returnedData
          .then( res => {
            let 
          })

        return this.$axios
          .get("http://staging.circulareconomy.space/api/tags/")
          .then(res => {
            vuexContext.commit("setTags", res.data);
          })
          .catch(e => context.error(e));
      }
    },
    getters: {
      loadedTags(state) {
        return state.tags;
      }
    }
  });
};

export default createStore;
