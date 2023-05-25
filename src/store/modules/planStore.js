const planStore = {
  namespaced: true,
  state: {
    markerPosList: [],
    searchResults: [],
    pagination: [],
    visitPlaceList: [],
    searchInputText: "",
    planDate: null,
    courseDate: "",
    planTitle:""
  },
  getters: {},
  mutations: {
    ADD_MARKER_POSITION(state, markerPos) {
      state.markerPosList.push(markerPos);
    },
    REMOVE_MARKER_POSITION(state, index) {
      state.markerPosList.splice(index, 1);
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
    SET_PLAN_TITLE(state, planTitle) {
      state.planTitle = planTitle;
    },
  },
  actions: {},
};

export default planStore;
