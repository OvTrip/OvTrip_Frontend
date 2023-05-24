<template>
  <div class="place-list-item-container" @mouseover="itemMouseOver" @mouseleave="itemMouseLeave">
    <div class="place-list-item-div">
      <div class="pin-icon-div">
        <img src="@/assets/images/map-pin.png" alt="" width="32px" />
      </div>
      <div class="pin-number-div">
        <span>{{ index + 1 }}</span>
      </div>
      <span>{{ visitPlace.place_name }}</span>
    </div>
    <div class="selection-item-control-div">
      <button v-show="isShow" class="selection-item-control-btn" @click="removeItem">
        <font-awesome-icon icon="fa-regular fa-trash-can" size="lg" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
const planStore = "planStore";
export default {
  name: "PlanPlaceListItem",
  components: {},
  props: {
    visitPlace: Object,
    index: Number,
  },
  data() {
    return {
      isShow: false,
      message: "",
    };
  },
  created() {},
  methods: {
    ...mapMutations(planStore, ["REMOVE_VISIT_PLACE"]),
    itemMouseOver() {
      this.isShow = true;
    },
    itemMouseLeave() {
      this.isShow = false;
    },
    removeItem() {
      this.REMOVE_VISIT_PLACE(this.index);
    },
  },
};
</script>

<style scoped>
.place-list-item-container {
  display: flex;
  align-items: center;
}
.place-list-item-div {
  font-size: 20px;
  font-weight: 700;
  font-family: "Pretendard";
  letter-spacing: 1px;
  width: calc(100% - 50px);
  padding: 15px 15px 15px 20px;
  margin: 10px 10px 0px 10px;
  border-radius: 10px;
  background-color: #daf5ff;
  color: #212529;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
}
.place-list-item-div:hover {
  cursor: pointer;
  border-color: #b0daff;
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
.selection-item-control-div {
}
.selection-item-control-btn {
  background-color: #fff;
  border: none;
}
.selection-item-control-btn:hover {
  cursor: pointer;
}
</style>
