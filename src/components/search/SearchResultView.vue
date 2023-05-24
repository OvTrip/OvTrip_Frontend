<template>
  <div class="user-search-container">
    <div class="area_cont">
      <div id="search-title">{{ keyword }} 사용자에 대한 검색 결과</div>
      <div class="table-container">
        <ul>
          <search-result-item />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResultItem from "./SearchResultItem.vue";
export default {
  name: "SearchResultView",
  components: { SearchResultItem },
  data() {
    return {
      keyword: "",
    };
  },
  created() {
    this.keyword = this.$route.query.keyword;
  },
  methods: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: "Pretendard";
}

.user-search-container {
  width: 650px;
  margin: auto;
  border-radius: 20px;
  background: white;
  padding: 0 20px 20px 20px;
}

#search-title {
  text-align: left;
  padding: 10px;
  font-size: 22px;
  font-weight: 600;
  line-height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.area_cont {
  margin-top: 50px;
}

.table-container {
  border-top: 2px solid black;
}

ul {
  padding: 0px;
  margin-top: 0px;
}
</style>
