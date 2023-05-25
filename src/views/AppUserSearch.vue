<template>
  <div class="container">
    <the-nav-bar />
    <search-result-view />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import SearchResultView from "@/components/search/SearchResultView.vue";
export default {
  name: "AppNotice",
  components: { TheNavBar, SearchResultView },
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
  box-sizing: border-box;
  height: 100%;
  background: #b0daff;
  padding-bottom: 30px;
}
</style>
