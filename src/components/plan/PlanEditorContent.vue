<template>
  <div class="editor-content-container">
    <plan-title></plan-title>
    <plan-place-list></plan-place-list>
  </div>
</template>

<script>
import PlanTitle from "./PlanTitle.vue";
import PlanPlaceList from "./PlanPlaceList.vue";
export default {
  name: "PlanEditorContent",
  components: { PlanTitle, PlanPlaceList },
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
.editor-content-container {
  width: calc(100% - 250px);
  float: right;
}
</style>
