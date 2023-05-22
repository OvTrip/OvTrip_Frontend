<template>
  <div class="container">
    <the-nav-bar></the-nav-bar>
    <my-page-container />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import MyPageContainer from "@/components/mypage/MyPageContainer.vue";
export default {
  name: "MyPage",
  components: { TheNavBar, MyPageContainer },
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
  background-color: #feff86;
  background-color: #b0daff;
  width: 100vw;
  height: 100vh;
}
</style>
