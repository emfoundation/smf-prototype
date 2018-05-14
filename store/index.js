import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      tags: []
    },
    mutations: {
      setTags(state, tags) {
        state.tags = tags;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
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
