<template>
  <div class="container">
    <the-nav-bar />
    <router-view />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
// import NoticeContainer from "@/components/notice/NoticeContainer.vue";
export default {
  name: "AppNotice",
  components: { TheNavBar },
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
  width: 100vw;
  height: 100vh;
  background: #b0daff;
}
</style>
