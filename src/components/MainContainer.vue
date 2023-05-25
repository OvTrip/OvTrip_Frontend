<template>
  <div class="container">
    <main-hero></main-hero>
    <main-plan-create />
    <main-attraction />
    <main-festival />
  </div>
</template>

<script>
import MainAttraction from "@/components/MainAttraction.vue";
import MainFestival from "@/components/MainFestival.vue";
import MainPlanCreate from "@/components/MainPlanCreate.vue";
import MainHero from "@/components/MainHero.vue";
export default {
  name: "MainContainer",
  components: { MainAttraction, MainFestival, MainPlanCreate, MainHero },
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
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column !important;
}
</style>
