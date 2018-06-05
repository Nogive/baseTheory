import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  count: 10
};

const getters = {
  count(state) {
    return state.count;
  },
  getOdd(state) {
    return state.count % 2 == 0 ? "偶数" : "奇数";
  }
};

//同步事件
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};
//异步时间
const actions = {
  incrementOdd: ({ commit, state }) => {
    if (state.count % 2 == 0) {
      commit("increment");
    }
  },
  decrement: ({ commit }) => {
    commit("decrement");
  },
  increment: ({ commit }) => {
    commit("increment");
  },
  async: ({ commit }) => {
    new Promise((resolve, reject) => {
      setTimeout(function() {
        commit("increment");
        resolve();
      }, 1000);
    });
  }
};
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
export default store;
