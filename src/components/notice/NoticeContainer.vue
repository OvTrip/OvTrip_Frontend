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
        <table class="table">
          <colgroup>
            <col style="width: 81%" />
            <col style="width: 19%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">내용</th>
              <th scope="col">등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="/notice/view"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>
            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>

            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>

            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>

            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>

            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>

            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>

            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>

            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>

            <tr>
              <td class="table-subject">
                <div class="inner_cell">
                  <span>
                    <a href="#"> 개인정보 처리방침 개정안내 </a>
                  </span>
                </div>
              </td>
              <td><div class="inner_cell">2023-05-18</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticeContainer",
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
.table thead th {
  padding: 15px 20px;
  color: #1e1e1e;
}

.table {
  width: 100%;
}

.table th {
  border-bottom: 1px solid #e6e6e6;
  font-weight: normal;
  font-size: 14px;
}

.inner_cell {
  border-bottom: 1px solid #e6e6e6;
}
.table .inner_cell {
  padding: 15px 20px 14px;
}

.table-container {
  border-top: 2px solid black;
}
</style>
