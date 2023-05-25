<template>
  <div class="side-bar-container">
    <date-picker
      v-model="selectedDate"
      :value="selectedDate"
      range
      :lang="lang"
      :placeholder="placeholder"
      :clearable="false"
      @close="confirmDate"
    >
      <i slot="icon-calendar">
        <font-awesome-icon icon="fa-regular fa-calendar-days" />
      </i>
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/scss/index.scss";
import moment from "moment";
import { mapMutations } from "vuex";
import axios from "axios";

const planStore = "planStore";

export default {
  name: "PlanSideBar",
  components: { DatePicker },
  data() {
    return {
      //날짜 선택시 v-model을 통해 binding되는 data
      selectedDate: [],
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
  async created() {
    let accessToken = sessionStorage.getItem("access-token");
    let planno = this.$route.params.planno;
    await axios
      .get(`http://localhost:8080/plan/${planno}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        this.selectedDate[0] = new Date(response.data.startDate);
        this.selectedDate[1] = new Date(response.data.endDate);
        console.log(this.selectedDate);
      });
  },
  mounted() {},
  methods: {
    ...mapMutations(planStore, ["SET_PLAN_DATE"]),
    confirmDate() {
      if (this.selectedDate[0] && this.selectedDate[1]) {
        let planDate = {
          start_date: moment(this.selectedDate[0]).format("YYYYMMDD"),
          end_date: moment(this.selectedDate[1]).format("YYYYMMDD"),
        };
        this.SET_PLAN_DATE(planDate);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.side-bar-container {
  width: 250px;
  float: left;
  border: none;
  outline: none;
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
