<template>
  <div class="plan-title-container">
    <div class="plan-tilte-cover">
      <img class="plan-title-img" src="@/assets/images/plan-title-cover.jpg" alt="" width="100%" />
    </div>
    <div class="plan-title"></div>
  </div>
</template>

<script>
export default {
  name: "PlanTitle",
  components: {},
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
.plan-title-container {
  height: 300px;
  position: relative;
}
.plan-tilte-cover {
  width: 100%;
  height: 240px;
}
.plan-title-img {
  object-fit: cover;
  height: 240px;
}
.plan-title {
  background-color: #fff;
  border-radius: 8px;
  bottom: 0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  left: 32px;
  height: 160px;
  position: absolute;
  right: 32px;
}
</style>
