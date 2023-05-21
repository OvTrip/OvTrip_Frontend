<template>
  <div class="search-bar-container">
    <div class="search-input-div">
      <div>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <input class="search-input" type="text" placeholder="여행지를 추가하세요" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanPlaceSearchBar",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.search-input-div {
  letter-spacing: 1px;
  padding: 15px 15px 15px 20px;
  margin: 10px;
  border-radius: 10px;
  color: #212529;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  background-color: #f3f4f5;
}
.search-input {
  border: none;
  font-size: 20px;
  font-weight: 700;
  font-family: "Pretendard";
  background-color: #f3f4f5;
}
</style>
