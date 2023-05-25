<template>
  <a href="#" class="col-sm-6 col-md-4" style="position: relative">
    <img
      src="https://images.unsplash.com/photo-1423589989400-cc0270157ed0?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=a95937ce1dc3243f52c30f86d948b771"
      alt=""
      class="fluid img-thumbnail"
    />
    <div class="plan-info">
      <div class="plan-region">{{ plan.region }}</div>
      <span class="plan-period">{{ plan.startDate }} ~ {{ plan.endDate }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "MyPagePlanItem",
  components: {},
  props: {
    plan: Object,
  },
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
a {
  text-decoration: none;
  color: white;
  font-family: "Pretendard";
}

a:active {
  transform: scale(0.98);
}

.plan-region {
  font-size: 24px;
  font-weight: 700;
}

.plan-period {
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 700;
}

@media (min-width: 576px) {
  .col-sm-6 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 768px) {
  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}
.img-thumbnail {
  padding: 10px;
  max-width: 100%;
  height: auto;
  border-radius: 20px;
}

img {
  vertical-align: middle;
  border-style: none;
}

.plan-info {
  position: absolute;
  bottom: 24px;
  left: 20px;
  text-align: left;
  text-decoration: none;
  color: white;
}
</style>
