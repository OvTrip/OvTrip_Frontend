<template>
  <div class="user-search-container">
    <div class="area_cont">
      <div id="search-title">{{ keyword }} 사용자에 대한 검색 결과</div>
      <div class="table-container">
        <ul v-for="user in userinfo" :key="user.id">
          <search-result-item :user="user" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchResultItem from "./SearchResultItem.vue";
export default {
  name: "SearchResultView",
  components: { SearchResultItem },
  data() {
    return {
      keyword: "",
      userinfo: [],
    };
  },
  async created() {
    this.keyword = this.$route.query.keyword;
    let accessToken = sessionStorage.getItem("access-token");
    await axios
      .get(`http://localhost:8080/user/search?keyword=${this.keyword}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(({ data }) => {
        this.userinfo = data;
      });
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
