<template>
  <div class="search-bar-container">
    <div id="menu_wrap" class="bg_white" ref="menu_wrap">
      <div class="search-input-div option">
        <div>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <form @submit.prevent="searchPlaces">
          <input
            class="search-input"
            ref="searchInput"
            id="keyword"
            type="text"
            placeholder="여행지를 추가하세요"
            @input="changeInputText"
          />
        </form>
      </div>
      <plan-search-result-list></plan-search-result-list>
      <plan-search-result-pagination></plan-search-result-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import PlanSearchResultList from "./PlanSearchResultList.vue";
import PlanSearchResultPagination from "./PlanSearchResultPagination.vue";

const planStore = "planStore";
export default {
  name: "PlanPlaceSearchBar",
  components: { PlanSearchResultList, PlanSearchResultPagination },
  computed: { ...mapState(planStore, ["searchInputText"]) },
  watch: {
    searchInputText: {
      handler(searchInputText) {
        if (searchInputText == null || searchInputText.length == 0) {
          this.SET_SEARCH_RESULTS(null);
          this.SET_PAGINATION(null);
          this.$refs.searchInput.value = "";
        }
      },
    },
  },
  data() {
    return {
      searchResults: null,
      pagination: null,
      inputText: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(planStore, [
      "ADD_MARKER",
      "SET_SEARCH_RESULTS",
      "SET_PAGINATION",
      "CHANGE_SEARCH_INPUT_TEXT",
    ]),
    changeInputText(e) {
      this.CHANGE_SEARCH_INPUT_TEXT(e.target.value);
    },
    searchPlaces() {
      var keyword = document.getElementById("keyword").value;

      if (!keyword.replace(/^\s+|\s+$/g, "")) {
        alert("키워드를 입력해주세요!");
        return false;
      }

      var places = new kakao.maps.services.Places();
      // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
      places.keywordSearch(keyword, this.placesSearchCB, { page: 1, size: 5 });
    },

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        // this.searchResults = data;
        this.SET_SEARCH_RESULTS(data);

        // 페이지 번호를 표출합니다
        // this.pagination = pagination;
        this.SET_PAGINATION(pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    },
  },
};
</script>

<style scoped>
#menu_wrap {
  z-index: 1;
}
#menu_wrap .option {
  text-align: center;
}
#menu_wrap .option p {
  margin: 10px 0;
}
#menu_wrap .option button {
  margin-left: 5px;
}
.search-input-div {
  /* width: calc(100% - 50px); */
  letter-spacing: 1px;
  padding: 15px 15px 15px 20px;
  margin: 0px 10px 0px 10px;
  border-radius: 10px;
  color: #212529;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #daf5ff;
  height: 56px;
}
.search-input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  font-family: "Pretendard";
  background-color: #daf5ff;
}
</style>
