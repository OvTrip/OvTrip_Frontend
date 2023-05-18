<template>
  <div class="plan-create-container">
    <div class="title">어디로 떠나시나요?</div>
    <div class="booking-form">
      <form>
        <div class="row no-margin">
          <div class="col-md-3">
            <div class="form-group">
              <span class="form-label">Destination</span>
              <input class="form-control" type="text" placeholder="Country, ZIP, city..." />
              <span class="after"></span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-margin">
              <div class="col-md-5">
                <div class="form-group">
                  <span class="form-label">Check In</span>
                  <input class="form-control" type="date" required="" />
                  <span class="after"></span>
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-group">
                  <span class="form-label">Check out</span>
                  <input class="form-control" type="date" required="" />
                  <span class="after"></span>
                </div>
              </div>
              <div class="col-md-2">
                <div class="form-group">
                  <span class="form-label">Guests</span>
                  <select class="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <span class="select-arrow"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-btn">
              <button class="submit-btn" @click="$router.push({ path: '/about' })">
                Check availability
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
  name: "PlanCreate",
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
.booking-form {
  background: #daf5ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
}

form {
  display: block;
  margin-top: 0em;
}

.booking-form > form .row.no-margin {
  margin-right: 0;
  margin-left: 0;
}

.booking-form > form .row.no-margin > [class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-md-3 {
  width: 25%;
  float: left;
  position: relative;
  min-height: 1px;
}

.booking-form .form-group {
  position: relative;
  padding: 25px;
  margin-bottom: 0;
}

.booking-form .form-label {
  color: #ff0063;
  display: block;
  font-weight: 400;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
}

.booking-form .form-control {
  background-color: transparent;
  border-radius: 0;
  border: none;
  height: 50px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 20px;
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
  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.col-md-6 {
  width: 50%;
  float: left;
  position: relative;
  min-height: 1px;
}

.col-md-5 {
  width: 41.66666667%;
  float: left;
  position: relative;
  min-height: 1px;
}

.col-md-2 {
  width: 16.66666667%;
  float: left;
  position: relative;
  min-height: 1px;
}

.booking-form .form-btn {
  padding: 25px;
}

.booking-form .submit-btn {
  background: #b0daff;
  border: none;
  text-transform: capitalize;
  display: block;
  border-radius: 2px;
  width: 100%;
  height: 75px;
  font-size: 16px;
  font-weight: 700;
  /* color: #fff; */
}

.booking-form .form-group:after {
  content: "";
  background: rgba(129, 131, 144, 0.15);
  position: absolute;
  top: 25px;
  bottom: 0;
  right: 0;
  width: 2px;
  height: 75px;
}

.plan-create-container {
  margin: 30px;
  margin-bottom: 40px;
}

.booking-form {
  padding: 0px 20px;
}

input::placeholder {
  font-family: "Pretendard";
  color: #000000;
}
input[type="date"] {
  font-family: "Pretendard";
}

.form-label {
  margin-bottom: 6px;
  text-align: left;
  font-size: 16px !important;
  font-weight: 700 !important;
  color: black !important;
}
</style>
