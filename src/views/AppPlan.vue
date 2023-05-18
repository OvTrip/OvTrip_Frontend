<template>
  <div class="container">
    <plan-editor></plan-editor>
    <plan-map></plan-map>
  </div>
</template>

<script>
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
  created() {},
  methods: {},
};
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
