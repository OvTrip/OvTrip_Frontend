<template>
  <div class="editor-content-container">
    <plan-title></plan-title>
    <plan-place-list></plan-place-list>
    <plan-place-search-bar></plan-place-search-bar>
  </div>
</template>

<script>
import PlanPlaceSearchBar from "./PlanPlaceSearchBar.vue";
import PlanTitle from "./PlanTitle.vue";
import PlanPlaceList from "./PlanPlaceList.vue";
export default {
  name: "PlanEditorContent",
  components: { PlanTitle, PlanPlaceSearchBar, PlanPlaceList },
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
