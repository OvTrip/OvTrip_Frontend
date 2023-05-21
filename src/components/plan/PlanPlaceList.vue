<template>
  <div class="place-list-container">
    <div class="place-list-div">
      <div>방문할 여행지 목록</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanPlaceList",
  components: {},
  data() {
    return {
      placeList: [{ name: "경복궁" }, { name: "남산타워" }],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.place-list-container {
}
</style>
