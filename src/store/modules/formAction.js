import { search } from "../../services/search";
export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  getters: {},
  mutations: {
    getData(state) {
      state.loading = true;
    },
    getSuccess(state, payload) {
      state.loading = false;
      state.data = payload;
    },
    geError(state) {
      state.loading = false;
    },
  },
  actions: {
    GetData({ commit }, payload) {
      commit("getData");
      return search(payload)
        .then((data) => commit("getSuccess", data))
        .catch(() => commit("getError"));
    },
  },
};
