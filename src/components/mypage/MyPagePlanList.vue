<template>
  <div class="container">
    <div class="row">
      <my-page-plan-item v-for="plan in planlist" :key="plan.planId" :plan="plan" />
    </div>
  </div>
</template>

<script>
import MyPagePlanItem from "./MyPagePlanItem.vue";
import axios from "axios";

export default {
  name: "MyPagePlanList",
  components: { MyPagePlanItem },
  data() {
    return {
      planlist: [],
    };
  },
  async created() {
    let accessToken = sessionStorage.getItem("access-token");
    await axios
      .get("http://localhost:8080/plan", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.planlist = response.data;
      });
  },
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
