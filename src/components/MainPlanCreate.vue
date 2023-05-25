<template>
  <div class="plan-create-container">
    <div class="title">어디로 떠나시나요?</div>
    <div class="booking-form">
      <form>
        <div class="row no-margin">
          <div class="col-md-3">
            <div class="form-group">
              <span class="form-label">Destination</span>
              <div class="region-select-div">
                <select class="region-select" name="region" required>
                  <option value="region" disabled selected>지역을 선택해주세요</option>
                  <option value="seoul">서울</option>
                  <option value="incheon">인천</option>
                  <option value="busan">대구</option>
                  <option value="busan">대전</option>
                  <option value="busan">광주</option>
                  <option value="busan">울산</option>
                  <option value="busan">부산</option>
                </select>
              </div>
              <span class="after"></span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row no-margin">
              <date-picker
                v-model="selectedDate"
                range
                :lang="lang"
                :placeholder="placeholder"
                :clearable="false"
              >
                <i slot="icon-calendar">
                  <font-awesome-icon icon="fa-regular fa-calendar-days" />
                </i>
              </date-picker>
            </div>
          </div>
          <div class="col-md-3">
            <div class="form-btn">
              <button class="submit-btn" @click.prevent="createPlan">Check availability</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/scss/index.scss";
import moment from "moment";
export default {
  name: "MainPlanCreate",
  components: { DatePicker },
  data() {
    return {
      selectedDate: [],
      region: "",
      lang: {
        days: ["일", "월", "화", "수", "목", "금", "토"],
        months: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
        yearFormat: "YYYY년", //달력 최상단 년도 표시 2023 -> 2023년
        monthFormat: "MM월", //달력 최상단 월 표시 May -> 05월
        monthBeforeYear: false, //달력 최상단 순서 05월 2023년 -> 2023년 05월
      },
      placeholder: "여행 일정을 설정해주세요",
    };
  },
  created() {},
  methods: {
    async createPlan() {
      if (this.region && this.selectedDate[0] && this.selectedDate[1]) {
        let accessToken = sessionStorage.getItem("access-token");
        await axios
          .post(
            "http://localhost:8080/plan",
            {
              startDate: moment(this.selectedDate[0]).format("yyyy-MM-DD"),
              endDate: moment(this.selectedDate[1]).format("yyyy-MM-DD"),
              region: this.$refs.region.value,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((data) => {
            location.href = `/plan/${data.data}`;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("지역과 날짜를 선택해주세요");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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

.region-select-div {
  width: 100%;
}

.region-select {
  width: 100%;
  height: 34px;
}

.region-select option[disabled] {
  display: none;
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
  font-size: 18px;
  font-weight: 900;
  font-family: "Pretendard";
  /* color: #fff; */
}

.submit-btn {
  cursor: pointer;
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
::v-deep {
  .mx-input {
    border: none;
    outline: none;
    -webkit-box-shadow: none;
    font-weight: bold;
    font-family: Pretendard;
    font-size: 16px;
  }
  .mx-datepicker {
    width: inherit;
  }
}
</style>
