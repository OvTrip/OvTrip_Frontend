import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    markers: [],
    searchResults: [],
    pagination: [],
  },
  getters: {},
  mutations: {
    ADD_MARKER(state, marker) {
      state.markers.push(marker);
    },
    SET_SEARCH_RESULTS(state, searchResults) {
      state.searchResults = searchResults;
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination;
    },
  },
  actions: {},
  modules: {},
});
