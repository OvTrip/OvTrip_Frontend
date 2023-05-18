<template>
  <div class="plan-title-container">
    <div class="plan-tilte-cover">
      <img class="plan-title-img" src="@/assets/images/plan-title-cover.jpg" alt="" width="100%" />
    </div>
    <div class="plan-title">
      <div class="title-input-div">
        <input type="text" placeholder="입력" class="title-input" />
      </div>
    </div>
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
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  bottom: 0;
  left: 32px;
  right: 32px;
  height: 160px;
  position: absolute;
  width: calc(100% - 300px);
  margin: auto; /* 제목 입력 영역 가운데 정렬*/
  box-sizing: border-box; /* width, height가 padding, margin 포함하도록 */
  padding: 16px;
}

.title-input-div {
  align-items: center;
}

.title-input {
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  border: none;
}
</style>
