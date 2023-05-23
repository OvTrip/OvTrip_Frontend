<template>
  <div class="container">
    <div class="row">
      <my-page-plan-item />
    </div>
  </div>
</template>

<script>
import MyPagePlanItem from "./MyPagePlanItem.vue";

export default {
  name: "MyPagePlanList",
  components: { MyPagePlanItem },
  data() {
    return {
      array: [1, 2, 3, 4],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Pretendard";
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
</style>
