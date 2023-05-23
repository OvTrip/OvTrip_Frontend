<template>
  <div class="plan-title-container">
    <div class="plan-tilte-cover-div">
      <img class="plan-title-img" src="@/assets/images/plan-title-cover.jpg" alt="" width="100%" />
    </div>
    <div class="plan-title-div">
      <div class="title-input-div">
        <input
          type="text"
          placeholder="Enter a trip name"
          class="title-input"
          @input="adjustInputWidth"
        />
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
  methods: {
    adjustInputWidth: function (e) {
      e.target.style.width = e.target.value.length + 1 + "ch";

      //입력 내용을 모두 지우면 다시 placeholder 출력
      if (e.target.value.length == 0) {
        e.target.style.width = "15ch";
      }
    },
  },
};
</script>

<style scoped>
.plan-title-container {
  width: 100%;
  height: 320px;
  position: relative;
}
.plan-tilte-cover-div {
  height: 240px;
}
.plan-title-img {
  object-fit: cover;
  height: 240px;
}
.plan-title-div {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  bottom: 0;
  left: 32px;
  right: 32px;
  height: 180px;
  position: absolute; /* 가장 가까운 상위 position(= plan-title-container)을 기준으로 배치 */
  margin-left: 50px;
  margin-right: 50px;
  padding: 16px;
}

.title-input-div {
  width: 100%;
  overflow: hidden;
}

.title-input {
  padding: 8px;
  font-size: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  border: none;
  outline: none; /* 클릭시 테두리 없애기 */
  border-radius: 8px;
  float: left;
  width: 15ch; /* placeholder 글자 길이에 맞는 width */
  text-overflow: ellipsis;
}
</style>
