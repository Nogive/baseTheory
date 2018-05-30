import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  count: 100
};
const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count--;
  }
};
const getters = {
  count: function(state) {
    return (state.count += 500);
  }
};
const actions = {
  addAction(context, n) {
    context.commit("add", n);
  },
  reduceAction({ commit }) {
    commit("reduce");
  }
};

const moduleA = {
  state,
  mutations,
  getters,
  actions
};
export default new Vuex.Store({
  modules: { a: moduleA }
});
