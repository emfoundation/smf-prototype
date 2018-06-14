import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      tags: [],
      homePageAb: ""
    },
    mutations: {
      setTags(state, tags) {
        state.tags = tags;
      },
      setHomePageAb(state, homePageAb) {
        state.homePageAb = homePageAb;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        // init AB value for homepage testing
        Math.random() > 0.5
          ? vuexContext.commit("setHomePageAb", "a")
          : vuexContext.commit("setHomePageAb", "b");

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
      },
      loadedHomePageAb(state) {
        return state.homePageAb;
      }
    }
  });
};

export default createStore;
