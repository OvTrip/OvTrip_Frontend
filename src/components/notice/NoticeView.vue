<template>
  <div class="notice-container">
    <div class="area_cont">
      <div id="notice-title">
        공지사항<img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bell.png"
          alt="Bell"
          width="25"
          height="25"
        />
      </div>
      <div class="table-container">
        <div class="subject">글제목</div>
        <div class="content">글내용<br />내용</div>
        <div class="footer">
          <button class="btn-list">목록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeView",
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
  font-family: "Pretendard";
}

a {
  text-decoration: none;
  color: black;
}
.notice-container {
  width: 80%;
  margin: auto;
  border-radius: 20px;
  background: white;
  padding: 0 20px 20px 20px;
}

#notice-title {
  text-align: left;
  padding: 10px;
  font-size: 22px;
  font-weight: 600;
  line-height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.area_cont {
  margin-top: 50px;
}

.subject {
  padding: 15px 20px 14px;
  border-bottom: 1px solid #e6e6e6;
  font-weight: 600;
}

.content {
  padding: 15px 20px 14px;
  text-align: left;
  border-bottom: 1px solid #e6e6e6;
}

.footer {
  padding: 15px 20px 10px;
  text-align: right;
}
.btn-list {
  border: none;
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
}

.btn-list:active {
  transform: scale(0.95);
}
.table-container {
  border-top: 2px solid black;
}
</style>
