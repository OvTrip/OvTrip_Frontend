<template>
  <div class="search-bar-container">
    <div id="menu_wrap" class="bg_white" ref="menu_wrap">
      <div class="search-input-div option">
        <div>
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
        <form @submit.prevent="searchPlaces">
          <input class="search-input" id="keyword" type="text" placeholder="여행지를 추가하세요" />
        </form>
      </div>
      <plan-search-result-list :searchResults="searchResults"></plan-search-result-list>
      <plan-search-result-pagination :pagination="pagination"></plan-search-result-pagination>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import PlanSearchResultList from "./PlanSearchResultList.vue";
import PlanSearchResultPagination from "./PlanSearchResultPagination.vue";
export default {
  name: "PlanPlaceSearchBar",
  components: { PlanSearchResultList, PlanSearchResultPagination },
  data() {
    return {
      ps: null,
      searchResults: null,
      pagination: null,
    };
  },
  created() {},
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      this.loadScript();
    }
  },
  methods: {
    ...mapMutations({
      addMarker: "ADD_MARKER",
    }),
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=b485b131434be251ad56744ef70903b7&autoload=false&libraries=services";
      //html>head 안에 script 추가
      document.head.appendChild(script);
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
        this.searchResults = data;
        // this.displayPlaces(data);

        // 페이지 번호를 표출합니다
        // this.displayPagination(pagination);
        this.pagination = pagination;
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    },

    // 검색 결과 목록과 마커를 표출하는 함수입니다
    displayPlaces(places) {
      // let listEl = this.$refs.placesList,
      //   menuEl = this.$refs.menu_wrap,
      // fragment = document.createDocumentFragment();

      // 검색 결과 목록에 추가된 항목들을 제거합니다
      // this.removeAllChildNods(listEl);

      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        // let itemEl = this.getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
        // fragment.appendChild(itemEl);
      }

      // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
      // listEl.appendChild(fragment);
      // menuEl.scrollTop = 0;
    },

    // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    // removeAllChildNods(el) {
    //   while (el.hasChildNodes()) {
    //     el.removeChild(el.lastChild);
    //   }
    // },

    // 검색결과 항목을 Element로 반환하는 함수입니다
    getListItem(index, places) {
      let li = document.createElement("li");
      li.classList.add("item");

      let itemMarkerSpan = document.createElement("span");
      itemMarkerSpan.classList.add("markerbg", `marker_${index + 1}`);

      let itemDiv = document.createElement("div");
      itemDiv.classList.add("info");

      let itemH5 = document.createElement("h5");
      itemH5.innerHTML = places.place_name;

      itemDiv.append(itemH5);

      let itemAddressSpan = document.createElement("span");
      if (places.road_address_name) {
        let itemRoadAddressSpan = document.createElement("span");
        itemRoadAddressSpan.innerHTML = places.road_address_name;
        itemDiv.append(itemRoadAddressSpan);

        itemAddressSpan.classList.add("jibun", "gray");
      }
      itemAddressSpan.innerHTML = places.address_name;
      itemDiv.append(itemAddressSpan);

      let telSpan = document.createElement("span");
      telSpan.classList.add("tel");
      telSpan.innerHTML = places.phone;
      itemDiv.append(telSpan);

      li.append(itemMarkerSpan, itemDiv);
      return li;
    },
    // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
    // displayPagination(pagination) {
    //   var paginationEl = document.getElementById("pagination"),
    //     fragment = document.createDocumentFragment(),
    //     i;

    //   // 기존에 추가된 페이지번호를 삭제합니다
    //   while (paginationEl.hasChildNodes()) {
    //     paginationEl.removeChild(paginationEl.lastChild);
    //   }

    //   for (i = 1; i <= pagination.last; i++) {
    //     var el = document.createElement("a");
    //     el.href = "#";
    //     el.innerHTML = i;

    //     if (i === pagination.current) {
    //       el.className = "on";
    //     } else {
    //       el.onclick = (function (i) {
    //         return function () {
    //           pagination.gotoPage(i);
    //         };
    //       })(i);
    //     }

    //     fragment.appendChild(el);
    //   }
    //   paginationEl.appendChild(fragment);
    // },
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
  letter-spacing: 1px;
  padding: 15px 15px 15px 20px;
  margin: 10px;
  border-radius: 10px;
  color: #212529;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f4f5;
  height: 56px;
}
.search-input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  font-family: "Pretendard";
  background-color: #f3f4f5;
}
#pagination {
  margin: 10px auto;
  text-align: left;
}
#pagination a {
  display: inline-block;
  margin-right: 10px;
}
#pagination .on {
  font-weight: bold;
  cursor: default;
  color: #777;
}
</style>
