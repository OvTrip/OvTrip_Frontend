<template>
  <div class="place-list-container">
    <div class="place-list-div">
      <div id="placeListTitle">방문할 여행지 목록</div>
      <template v-for="(item, index) in placeList">
        <plan-place-list-item :key="index" :item="item"></plan-place-list-item>
      </template>
    </div>
  </div>
</template>

<script>
import PlanPlaceListItem from "./PlanPlaceListItem.vue";
export default {
  name: "PlanPlaceList",
  components: { PlanPlaceListItem },
  data() {
    return {
      placeList: [
        { name: "경복궁", id: 0 },
        { name: "N남산타워", id: 1 },
        { name: "인사동", id: 2 },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.place-list-container {
  bottom: 0;
}
#placeListTitle {
  font-family: "Pretendard";
  font-size: 25px;
  font-weight: 700;
  margin: 10px;
}
</style>
