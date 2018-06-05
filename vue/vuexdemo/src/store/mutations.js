import * as types from "./types";
import state from "./state";
const mutations = {
  [types.INCREMENT](state) {
    state.count++;
  },
  [types.DECREMENT](state) {
    state.count--;
  }
};
export default mutations;
