<template>
  <div class="side-bar-container">
    <date-picker
      v-model="selectedDate"
      range
      :lang="lang"
      :placeholder="placeholder"
      :clearable="false"
    >
      <i slot="calendar-icon"><font-awesome-icon icon="fa-solid fa-calendar-days" /></i>
    </date-picker>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/scss/index.scss";

export default {
  name: "PlanSideBar",
  components: { DatePicker },
  data() {
    return {
      //날짜 선택시 v-model을 통해 binding되는 data
      selectedDate: {
        start: null,
        end: null,
      },
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
  mounted() {},
  methods: {},
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
