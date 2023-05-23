<template>
  <ul id="placesList" ref="placesList">
    <template v-for="(searchResult, index) in searchResults">
      <plan-search-result-list-item
        :key="index"
        :searchResult="searchResult"
        :index="index + 1"
      ></plan-search-result-list-item>
    </template>
  </ul>
</template>

<script>
import PlanSearchResultListItem from "./PlanSearchResultListItem.vue";
export default {
  name: "PlanSearchResultList",
  components: { PlanSearchResultListItem },
  props: {
    searchResults: Array,
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
#placesList {
  padding-left: 0px;
}
</style>
