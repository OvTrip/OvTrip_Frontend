<template>
  <div class="nav">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "TheNavBar",
  components: { NavBar },
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
.nav {
  width: 80vw;
  margin: 0 auto;
}
</style>
