<template>
  <div class="editor">
    <plan-nav></plan-nav>
    <plan-title></plan-title>
  </div>
</template>

<script>
import PlanNav from "./PlanNav.vue";
import PlanTitle from "./PlanTitle.vue";
export default {
  name: "PlanEditor",
  components: { PlanNav, PlanTitle },
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
