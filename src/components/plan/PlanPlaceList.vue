<template>
  <div class="place-list-container">
    <div id="placeListTitle">방문 여행지 목록</div>
    <div class="place-list-div" id="menu_wrap">
      <plan-place-search-bar></plan-place-search-bar>
      <template v-for="(visitPlace, index) in visitPlaceList">
        <plan-place-list-item
          :key="index"
          :visitPlace="visitPlace"
          :index="index"
        ></plan-place-list-item>
      </template>
    </div>
  </div>
</template>

<script>
import PlanPlaceListItem from "./PlanPlaceListItem.vue";
import PlanPlaceSearchBar from "./PlanPlaceSearchBar.vue";
import { mapState } from "vuex";
const planStore = "planStore";

export default {
  name: "PlanPlaceList",
  components: { PlanPlaceListItem, PlanPlaceSearchBar },
  computed: {
    ...mapState(planStore, ["visitPlaceList", "courseDate"]),
  },
  data() {
    return {
      visitDateList: [],
    };
  },
  created() {},
  methods: {
    filteredList() {
      if (this.selectedDay == "") {
        this.visitDateList = this.visitPlaceList;
      } else {
        return this.planList.filter(
          (dayItem) => dayItem.courseDate === this.courseDate
        );
      }
    },
  },
};
</script>

<style scoped>
.place-list-container {
  bottom: 0;
  /* width: calc(100% - 100px); */
  padding: 10px 60px;
}
#placeListTitle {
  text-align: left;
  font-family: "Pretendard";
  font-size: 25px;
  font-weight: 700;
  margin: 20px 10px 20px 10px;
}
</style>
