<template>
  <div class="navbar">
    <nav-logo />
    <nav-bar-item></nav-bar-item>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
import NavLogo from "./NavLogo.vue";

export default {
  name: "NavBar",
  components: { NavBarItem, NavLogo },
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
  margin: 0px 0px 0px 10px;
}

img {
  height: 40px;
  padding: 10px;
}
</style>
