<template>
  <div class="editor">
    <plan-nav-bar></plan-nav-bar>
    <!-- <plan-side-bar></plan-side-bar> -->
    <plan-editor-content></plan-editor-content>
  </div>
</template>

<script>
import PlanNavBar from "./PlanNavBar.vue";
// import PlanSideBar from "@/components/plan/PlanSideBar.vue";
import PlanEditorContent from "./PlanEditorContent.vue";
export default {
  name: "PlanEditor",
  components: { PlanNavBar, PlanEditorContent },
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
