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
import { mapState } from "vuex";
const planStore = "planStore";
export default {
  name: "PlanSearchResultList",
  components: { PlanSearchResultListItem },
  computed: {
    ...mapState(planStore, ["searchResults"]),
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
