<template>
  <div class="container">
    <plan-editor></plan-editor>
    <plan-map></plan-map>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import axios from "axios";
const planStore = "planStore";

import PlanEditor from "@/components/plan/PlanEditor.vue";
import PlanMap from "@/components/plan/PlanMap.vue";
export default {
  name: "AppPlan",
  components: {
    PlanEditor,
    PlanMap,
  },
  data() {
    return {
      message: "",
    };
  },
  async created() {
    let planno = this.$route.params.planno;
    axios.get(`http://localhost:8080/plan/${planno}`).then((response) => {
      this.SET_VISIT_PLACE_LIST(response.data.courseList);
      this.SET_PLAN_INFO(response.data);
    });
    this.SET_MARKER_INITIALIZE();
  },
  methods: {
    ...mapMutations(planStore, ["SET_VISIT_PLACE_LIST", "SET_PLAN_INFO", "SET_MARKER_INITIALIZE"]),
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
