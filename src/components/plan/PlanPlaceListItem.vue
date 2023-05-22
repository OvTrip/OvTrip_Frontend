<template>
  <div class="place-list-item-div">
    <div class="pin-icon-div">
      <img src="@/assets/images/map-pin.png" alt="" width="32px" />
    </div>
    <div class="pin-number-div">
      <span>{{ item.id }}</span>
    </div>
    <span>{{ item.name }}</span>
  </div>
</template>

<script>
export default {
  name: "PlanPlaceListItem",
  components: {},
  props: {
    item: Object,
  },
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
.place-list-item-div {
  font-size: 20px;
  font-weight: 700;
  font-family: "Pretendard";
  letter-spacing: 1px;
  padding: 15px 15px 15px 20px;
  margin: 10px;
  border-radius: 10px;
  background-color: #f3f4f5;
  color: #212529;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
}
.pin-icon-div {
  position: absolute;
  left: -13px;
}
.pin-number-div {
  font-size: 15px;
  position: absolute;
  top: 14px;
  left: -2px;
}
</style>
