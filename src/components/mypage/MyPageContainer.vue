<template>
  <div class="mypage-container">
    <my-page-user-info />
    <my-page-tab />
  </div>
</template>

<script>
import MyPageUserInfo from "@/components/mypage/MyPageUserInfo.vue";
import MyPageTab from "@/components/mypage/MyPageTab.vue";
export default {
  name: "MyPageContainer",
  components: { MyPageUserInfo, MyPageTab },
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
.mypage-container {
  background: white;
  border-radius: 20px;
  width: 80%;
  margin: 0 auto;
  /* padding: 0 240px; */
  display: flex;
  flex-direction: column !important;
}
</style>
