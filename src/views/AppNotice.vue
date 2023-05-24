<template>
  <div class="container">
    <the-nav-bar />
    <notice-container />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import NoticeContainer from "@/components/notice/NoticeContainer.vue";
export default {
  name: "AppNotice",
  components: { TheNavBar, NoticeContainer },
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
