<template>
  <div class="container">
    <div class="background"></div>
    <the-nav-bar></the-nav-bar>
    <main-container />
  </div>
</template>

<script>
import MainContainer from "@/components/MainContainer.vue";
import TheNavBar from "@/components/TheNavBar.vue";
export default {
  name: "AppMain",
  components: { MainContainer, TheNavBar },
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
* {
  font-family: "Pretendard";
}

.background {
  background-color: #feff86;
  background-color: #b0daff;
  height: 600px;
  position: absolute;
  width: 100vw;
  z-index: -1;
}
input::placeholder {
  font-family: "Pretendard";
}
</style>
