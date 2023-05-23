<template>
  <li class="item" @click="setMarker">
    <span :class="'markerbg marker_' + index"></span>
    <div class="info">
      <h5>{{ searchResult.place_name }}</h5>
      <span v-if="searchResult.road_address_name">{{ searchResult.road_address_name }}</span>
      <span :class="{ jibun: searchResult.road_address_name }">{{
        searchResult.address_name
      }}</span>
      <span class="tel">{{ searchResult.phone }}</span>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PlanSearchResultListItem",
  components: {},
  props: {
    searchResult: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {
    ...mapMutations({
      addMarker: "ADD_MARKER",
      setSearchResults: "SET_SEARCH_RESULTS",
      setPagination: "SET_PAGINATION",
    }),
    setMarker() {
      console.log(this.searchResult);
      const markerPos = new window.kakao.maps.LatLng(this.searchResult.y, this.searchResult.x);
      const marker = new window.kakao.maps.Marker({
        position: markerPos,
      });
      this.addMarker(marker);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}
.item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  min-height: 65px;
}
.item span {
  display: block;
  margin-top: 5px;
}
.item:hover {
  background: #f3f4f5;
}
.item h5,
.item .info {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0px;
}
.item .info {
  padding: 10px 0 10px 55px;
}
.info {
  border: none;
  outline: none;
}
.info .gray {
  color: #8a8a8a;
}
.info .jibun {
  padding-left: 26px;
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png)
    no-repeat;
}
.info .tel {
  color: #009900;
}
.info > * {
  text-align: left;
}
.item .markerbg {
  float: left;
  position: absolute;
  width: 36px;
  height: 37px;
  margin: 10px 0 0 10px;
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png)
    no-repeat;
}
.item .marker_1 {
  background-position: 0 -10px;
}
.item .marker_2 {
  background-position: 0 -56px;
}
.item .marker_3 {
  background-position: 0 -102px;
}
.item .marker_4 {
  background-position: 0 -148px;
}
.item .marker_5 {
  background-position: 0 -194px;
}
.item .marker_6 {
  background-position: 0 -240px;
}
.item .marker_7 {
  background-position: 0 -286px;
}
.item .marker_8 {
  background-position: 0 -332px;
}
.item .marker_9 {
  background-position: 0 -378px;
}
.item .marker_10 {
  background-position: 0 -423px;
}
.item .marker_11 {
  background-position: 0 -470px;
}
.item .marker_12 {
  background-position: 0 -516px;
}
.item .marker_13 {
  background-position: 0 -562px;
}
.item .marker_14 {
  background-position: 0 -608px;
}
.item .marker_15 {
  background-position: 0 -654px;
}
</style>
