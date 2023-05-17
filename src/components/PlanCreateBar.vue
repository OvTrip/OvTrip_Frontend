<template>
  <div class="plan-create-container">
    <div class="title">어디로 떠나시나요?</div>
    <div class="booking-form">
      <form id="plan-main-form">
        <div class="row no-margin">
          <div class="col-md-5">
            <div class="form-group">
              <span class="form-label">Destination</span>
              <input
                class="form-control"
                type="text"
                placeholder="도시를 입력해주세요"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-margin">
              <div class="col-md-6">
                <div class="form-group">
                  <span class="form-label">여행 시작</span>
                  <input class="form-control" type="date" required="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <span class="form-label">여행 종료</span>
                  <input class="form-control" type="date" required="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-1">
            <div class="form-btn">
              <button class="submit-btn">
                <font-awesome-icon
                  icon="fa-solid fa-magnifying-glass"
                  size="xl"
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanCreateBar",
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
* {
  box-sizing: border-box;
}

.title {
  text-align: left;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 700;
}
.col-md-1 {
  width: 8.33333333%;
  float: left;
}
.col-md-6 {
  width: 50%;
  float: left;
}

.col-md-3 {
  width: 25%;
  float: left;
}

.col-md-2 {
  width: 16.66666667%;
  float: left;
}

.col-md-4 {
  width: 33.33333333%;
  float: left;
}

.col-md-5 {
  width: 41.66666667%;
  float: left;
}

.booking-form {
  /* border: 1px solid; */
  background: white;
  border-radius: 20px;
  /* margin: 30px; */
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 20px 0 rgba(76, 87, 125, 0.02);
}

.booking-form .form-label {
  /* color: #b0daff; */
  display: block;
  font-weight: 600;
  /* height: 25px; */
  /* line-height: 25px; */
  font-size: 18px;
}

.booking-form .form-group {
  position: relative;
  padding: 25px;
  margin-bottom: 0px;
}

.form-group {
  margin-bottom: 15px;
}

.booking-form .form-control {
  background-color: transparent;
  border-radius: 0px;
  border: none;
  height: 50px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 18px;
  color: #222;
  font-weight: 400;
  padding: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.submit-btn {
  height: 125px;
  background-color: transparent;
  color: #000000;
}
.booking-form .submit-btn {
  border: none;
  text-transform: capitalize;
  display: block;
  border-radius: 2px;
  width: 100%;
  /* height: 75px; */
  font-size: 16px;
  font-weight: 400;
  /* color: #fff; */
}

input::placeholder {
  font-family: "Pretendard";
  color: #000000;
}
input[type="date"] {
  font-family: "Pretendard";
}

.plan-create-container {
  margin: 30px;
}
</style>
