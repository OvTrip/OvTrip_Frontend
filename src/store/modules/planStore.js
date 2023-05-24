const planStore = {
  namespaced: true,
  state: {
    markers: [],
    searchResults: [],
    pagination: [],
    visitPlaceList: [],
    searchInputText: "",
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
    ADD_VISIT_PLACE(state, visitPlace) {
      state.visitPlaceList.push(visitPlace);
    },
    CHANGE_SEARCH_INPUT_TEXT(state, searchInputText) {
      state.searchInputText = searchInputText;
    },
  },
  actions: {},
};

export default planStore;
