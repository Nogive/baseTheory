import * as types from "./types";
const actions = {
  [types.INCREMENT]: ({ commit }) => {
    commit(types.INCREMENT);
  },
  [types.DECREMENT]: ({ commit }) => {
    commit(types.DECREMENT);
  },
  [types.INCREMENTODD]: ({ commit, state }) => {
    if (state.count % 2 == 0) {
      commit(types.INCREMENT);
    }
  },
  [types.ASYNC]: ({ commit }) => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.INCREMENT);
      }, 1000);
    });
  }
};
export default actions;
