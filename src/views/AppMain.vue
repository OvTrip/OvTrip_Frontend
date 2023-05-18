<template>
  <div class="container">
    <nav-bar></nav-bar>
    <main-hero></main-hero>
    <main-plan-create />
    <main-attraction />
    <main-festival />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainAttraction from "@/components/MainAttraction.vue";
import MainFestival from "@/components/MainFestival.vue";
import MainPlanCreate from "@/components/MainPlanCreate.vue";
import MainHero from "@/components/MainHero.vue";
export default {
  name: "AppMain",
  components: { NavBar, MainAttraction, MainFestival, MainPlanCreate, MainHero },
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
  width: 80%;
  margin: 0 auto;
  /* padding: 0 240px; */
  display: flex;
  flex-direction: column !important;
}

* {
  font-family: "Pretendard";
}

input::placeholder {
  font-family: "Pretendard";
}
</style>
