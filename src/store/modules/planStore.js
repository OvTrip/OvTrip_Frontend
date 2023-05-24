const planStore = {
  namespaced: true,
  state: {
    markers: [],
    searchResults: [],
    pagination: [],
    visitPlaceList: [],
    searchInputText: "",
    planDate: null,
    courseDate: "",
  },
  getters: {},
  mutations: {
    ADD_MARKER(state, marker) {
      state.markers.push(marker);
    },
    REMOVE_MARKER(state, index) {
      state.markers[index].setMap(null);
      state.markers.splice(index, 1);
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
    REMOVE_VISIT_PLACE(state, index) {
      state.visitPlaceList.splice(index, 1);
    },
    CHANGE_SEARCH_INPUT_TEXT(state, searchInputText) {
      state.searchInputText = searchInputText;
    },
    SET_COURSE_DATE(state, courseDate) {
      state.courseDate = courseDate;
    },
    SET_PLAN_DATE(state, planDate) {
      state.planDate = planDate;
    },
  },
  actions: {},
};

export default planStore;
