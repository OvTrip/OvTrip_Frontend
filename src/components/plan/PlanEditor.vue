<template>
  <div class="editor">
    <plan-nav></plan-nav>
  </div>
</template>

<script>
import PlanNav from "./PlanNav.vue";
export default {
  name: "PlanEditor",
  components: { PlanNav },
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
