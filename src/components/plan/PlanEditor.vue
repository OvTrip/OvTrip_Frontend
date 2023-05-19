<template>
  <div class="editor">
    <plan-nav-bar></plan-nav-bar>
    <plan-side-bar></plan-side-bar>
    <plan-title></plan-title>
  </div>
</template>

<script>
import PlanNavBar from "./PlanNavBar.vue";
import PlanSideBar from "@/components/plan/PlanSideBar.vue";
import PlanTitle from "./PlanTitle.vue";
export default {
  name: "PlanEditor",
  components: { PlanNavBar, PlanTitle, PlanSideBar },
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
.editor {
  width: 50%;
  float: left;
}
</style>
