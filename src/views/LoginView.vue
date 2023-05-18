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
            <h1>로그인</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">비밀번호를 잊으셨나요?</a>
            <button>로그인</button>
            <span>소셜 로그인</span>
            <div class="social-container">
              <ul>
                <li>
                  <button class="btn-social" id="btn-kakao">
                    <img src="@/assets/images/kakao.png" alt="" />
                    <span class="social-label">카카오 로그인</span>
                  </button>
                </li>
                <li>
                  <button class="btn-social" id="btn-naver">
                    <img src="@/assets/images/naver.png" alt="" />
                    <span class="social-label">네이버 로그인</span>
                  </button>
                </li>
              </ul>
              <br />
            </div>
          </form>
        </div>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" id="signUp">Sign Up</button>
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
img {
  width: 35px;
}
li {
  list-style: none;
  /* margin: 0 auto; */
  /* width: 100%; */
  padding: 0px auto;
  /* display: inline-block; */
  text-align: center;
}
.social-label {
  display: inline-block;
  line-height: 40px;
  height: 40px;
  font-family: "Pretendard";
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 10px;
}
.btn-social {
  box-sizing: border-box;
  width: 240px;
  height: 44px;
  line-height: 40px;
  padding: 0;
  border: none;
  /* display: flex; */
  align-items: center;
  padding-left: 12px;
  padding-right: 65px;
  justify-content: space-between;
  /* align-content: center; */
  margin-bottom: 10px;
}

#btn-naver {
  background-color: #03c75a;
}

#btn-kakao {
  background-color: #fee500;
}
.login-box {
  width: 60%;
  height: 100%;
  margin: auto;
}

* {
  box-sizing: border-box;
}

body {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: none;
  background-color: #ff4b2b;
  color: #ffffff;
  width: 240px;
  height: 44px;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 300px;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  /* width: 768px; */
  width: 100%;
  max-width: 100%;
  /* min-height: 480px; */
  height: 100vh;
}

.form-container {
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: show 0.6s;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.social-container {
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

ul {
  width: 100%;
  padding: 0;
}
</style>
