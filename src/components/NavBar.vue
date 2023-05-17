<template>
  <div class="navbar">
    <h1>ovtrip.✈️</h1>
    <nav-bar-item></nav-bar-item>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
export default {
  name: "NavBar",
  components: { NavBarItem },
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
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: relative;
  z-index: 3;
  box-sizing: border-box;
  padding: 0px 30px;
  margin: 10px 0px;
}
</style>
