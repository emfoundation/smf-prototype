import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      tags: [],
      george: "foo"
    },
    mutations: {
      setTags(state, tags) {
        state.tags = tags;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return this.$axios
          .get("https://smf-prototype.firebaseio.com/posts.json")
          .then(res => {
            const tagArray = [];
            for (const key in res.data) {
              tagArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setTags", tagArray);
          })
          .catch(e => context.error(e));
      },
      setTags(vuexContext, tags) {
        vuexContext.commit("setTags", tags);
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
