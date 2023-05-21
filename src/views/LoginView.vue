<template>
  <!-- <div class="container">
    <div class="image">
      <img src="@/assets/images/jeju.jpg" alt="" />
    </div>
    <div class="login-container">
      <div class="login-box">
        <h1>로그인</h1>
        <form action="">
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  </div> -->
  <div>
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <div class="login-box">
          <form action="#">
            <div class="social-container">
              <ul>
                <div id="login-title">로그인</div>
                <li><input type="email" placeholder="Email" /></li>
                <li><input type="password" placeholder="Password" /></li>
                <li><a class="btn btn-login" href="#">로그인</a></li>
                <li><a href="#" id="forget-pass">👉 비밀번호를 잊으셨나요?</a></li>
                <li id="social-title"><span>소셜 로그인</span></li>
                <li>
                  <a href="#" class="btn btn-social" id="btn-kakao">
                    <img src="@/assets/images/kakao.png" alt="" />
                    <span class="social-label">카카오 로그인</span>
                  </a>
                </li>
                <li>
                  <a class="btn btn-social" id="btn-naver">
                    <img src="@/assets/images/naver.png" alt="" />
                    <span class="social-label">네이버 로그인</span>
                  </a>
                </li>
              </ul>
              <br />
            </div>
          </form>
        </div>
      </div>
      <div class="sign-up-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png"
              alt="Beaming Face with Smiling Eyes"
              width="100"
              height="100"
              id="smile"
            />
            <div id="hello">안녕하세요!</div>
            <div id="desc">가입하고 여행 계획을 작성해보세요!</div>
            <a href="/signup" class="btn" id="btn-signup">👉 회원 가입 하러가기</a>
            <div class="logo">
              <a href="#" id="logo-label">OVTRIP</a>
              <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Airplane.png"
                alt="Airplane"
                width="44"
                height="44"
                id="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
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
#logo-label {
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  color: black;
  font-weight: 900;
  font-size: 24px;
}
#icon {
  width: 30px;
  height: 30px;
}

#smile {
  width: 100px;
  height: 100px;
}
.logo {
  margin-top: 12px;
  height: 44px;
  line-height: 44px;
  display: flex;
}
#hello {
  font-size: 50px;
  font-weight: 800;
}

a {
  text-decoration: none;
}

#desc {
  font-size: 24px;
}

#btn-signup {
  margin-top: 12px;
  /* background-color: #feff86; */
  background-color: white;
  color: black;
  border-radius: 4px;
  border-bottom: 5px solid #feff86;
  font-weight: 500;
  width: auto;
  padding: 10px;
}

.overlay-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
}

* {
  font-family: "Pretendard";
  box-sizing: border-box;
}
input {
  height: 44px;
  width: 245px;
  /* border-radius: 20px; */
  /* border: 1px solid gray; */
  margin-bottom: 10px;
  padding: 20px;
  border: none;
  border-bottom: 5px solid lightgrey;
  border-radius: 4px;
}

img {
  height: 44px;
}
li {
  list-style: none;
  /* height: 50px; */
}

.btn-login {
  margin-bottom: 10px;
}
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  /* background-color: #feff86; */
}
.sign-in-container {
  float: left;
  display: flex;
  align-items: center;
  margin: auto;
}
.sign-up-container {
  width: 50%;
  height: 100%;
  float: left;
  background-color: #b0daff;
  display: inline-grid;
  align-content: center;
  vertical-align: middle;
}
.login-box {
  margin: auto;
  padding: auto;
}

/*로그인 버튼 */
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: black;
  font-size: 18px;
  border-radius: 4px;
  width: 250px;
  height: 44px;
  font-weight: bold;
  transition: 0.3s;
  background-color: #b0daff;
  font-weight: 500;
}

a.btn:active {
  transform: scale(0.95);
}

.btn-social {
  border: none;
  margin-bottom: 8px;
}

#btn-naver {
  background-color: #03c75a;
}
#btn-kakao {
  background-color: #fee500;
}

#social-title {
  font-weight: 700;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
}

ul {
  padding: 0px;
}
#login-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

#forget-pass {
  font-size: 14px;
  color: gray;
  text-decoration: underline;
}
.overlay {
  margin: auto;
}
</style>
