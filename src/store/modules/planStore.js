const planStore = {
  namespaced: true,
  state: {
    markers: [],
    searchResults: [],
    pagination: [],
  },
  getters: {},
  mutations: {
    ADD_MARKER(state, marker) {
      state.markers.push(marker);
      console.log("vuex state에 반영 : ", state.markers);
    },
    SET_SEARCH_RESULTS(state, searchResults) {
      state.searchResults = searchResults;
    },
    SET_PAGINATION(state, pagination) {
      state.pagination = pagination;
    },
  },
  actions: {},
};

export default planStore;
