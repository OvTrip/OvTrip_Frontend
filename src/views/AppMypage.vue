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
  background-image: radial-gradient(circle at 2px 2px, #b0daff 2px, transparent 0);
  background-size: 40px 40px;
  height: 100%;
}
</style>
