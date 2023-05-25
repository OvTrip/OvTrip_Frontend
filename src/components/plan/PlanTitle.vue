<template>
  <div class="plan-title-container">
    <div class="plan-tilte-cover-div">
      <img
        class="plan-title-img"
        src="@/assets/images/plan-title-cover.jpg"
        alt=""
        width="100%"
      />
    </div>
    <div class="plan-title-div">
      <div class="title-input-div">
        <input
          type="text"
          v-model="title"
          placeholder="Enter a trip name"
          class="title-input"
          @input="adjustInputWidth"
        />
      </div>
      <div class="plan-date">
        {{ planinfo.startDate }} ~ {{ planinfo.endDate }}
      </div>
      <div class="date-picker-div">
        <font-awesome-icon icon="fa-regular fa-calendar-days" />
        <!-- format : 날짜 선택시 날짜 출력 형식 (05-23)변경 -->
        <date-picker
          type="date"
          format="MM-DD"
          v-model="courseDate"
          :lang="lang"
          :placeholder="placeholder"
          :clearable="false"
          :getClasses="getClasses"
          :disabled-date="dislabedDate"
          @pick="pickCourseDate"
          :editable="false"
        >
          <i slot="icon-calendar">
            <font-awesome-icon icon="fa-regular fa-calendar-days" />
          </i>
        </date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/scss/index.scss";
import moment from "moment";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
const planStore = "planStore";
export default {
  name: "PlanTitle",
  components: { DatePicker },
  computed: {
    ...mapState(planStore, ["planDate", "planinfo"]),
  },
  watch: {
    planDate: {
      handler(planDate) {
        this.rangeDate = planDate;
      },
    },
    title: {
      handler(title) {
        this.SET_PLAN_TITLE(title);
      },
    },
    planinfo: {
      handler(planinfo) {
        this.pickCourseDate(new Date(planinfo.startDate));
      },
    },
  },
  data() {
    return {
      title: "",
      rangeDate: null,
      courseDate: null,
      placeholder: "날짜를 선택하세요",
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
    };
  },
  created() {
    // this.rangeDate.start_date = new Date(this.planinfo.startDate);
    // this.rangeDate.end_date = new Date(this.planinfo.endDate);
    // this.SET_COURSE_DATE(this.rangeDate.start_date);
  },
  methods: {
    ...mapMutations(planStore, [
      "SET_COURSE_DATE",
      "SET_PLAN_TITLE",
      "SET_VISIT_PLACE_LIST",
      "SET_MARKER_INITIALIZE",
      "ADD_MARKER_POSITION",
    ]),
    adjustInputWidth(e) {
      e.target.style.width = e.target.value.length + 1 + "ch";

      //입력 내용을 모두 지우면 다시 placeholder 출력
      if (e.target.value.length == 0) {
        e.target.style.width = "15ch";
      }
    },
    getClasses(cellDate) {
      //기준 날짜
      const cellDateVal = moment(cellDate).format("YYYY-MM-DD");

      // 주 시작점 & 종료점 class
      if (
        cellDateVal === this.planinfo.startDate ||
        cellDateVal === this.planinfo.endDate
      ) {
        return "active";
      }
      // 중간영역 class
      if (
        moment(cellDateVal).isAfter(this.planinfo.startDate) &&
        moment(cellDateVal).isBefore(this.planinfo.endDate)
      ) {
        return "in-range";
      }
    },
    dislabedDate(date) {
      return (
        moment(date).format("YYYY-MM-DD") < this.planinfo.startDate ||
        moment(date).format("YYYY-MM-DD") > this.planinfo.endDate
      );
    },
    async pickCourseDate(item) {
      this.courseDate = item;
      this.SET_COURSE_DATE(moment(item).format("yyyy-MM-DD"));
      let date = moment(item).format("yyyy-MM-DD");
      let planno = this.$route.params.planno;
      await axios
        .get(`http://localhost:8080/plan/${planno}/course/${date}`)
        .then((response) => {
          this.SET_VISIT_PLACE_LIST(response.data);
          this.SET_MARKER_INITIALIZE();
          for (let i = 0; i < response.data.length; i++) {
            this.ADD_MARKER_POSITION({
              latitude: response.data[i].latitude,
              longitude: response.data[i].longitude,
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.plan-date {
  margin-top: 10px;
  margin-left: 5px;
  text-align: left;
  font-weight: 600;
}
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
  background-color: #daf5ff;
}
.date-picker-div {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding: 8px;
}
::v-deep {
  .mx-input {
    border: none;
    outline: none;
    padding: 0px;
    margin-left: 10px;
    -webkit-box-shadow: none;
    font-weight: bold;
    font-family: "Pretendard";
    font-size: 13px;
  }
  .mx-input:hover {
    cursor: pointer;
  }
  .mx-input::placeholder {
    font-size: 13px;
    font-weight: bold;
  }
  .mx-icon-calendar {
    display: none !important;
  }
}
</style>
