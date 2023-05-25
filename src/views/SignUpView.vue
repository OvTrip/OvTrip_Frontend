<template>
  <div class="container">
    <div class="signup-box">
      <form action="#">
        <div class="signup-container">
          <ul>
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Blue%20Heart.png"
              alt="Blue Heart"
              width="100"
              height="100"
            />
            <div id="signup-title">회원가입</div>
            <li>
              <input
                id="email"
                type="email"
                placeholder="이메일"
                v-model="email"
              />
              <button id="btn-idcheck">확인</button>
            </li>
            <li>
              <div class="error">
                {{ validateEmail }}
              </div>
            </li>
            <li>
              <input type="text" placeholder="닉네임" v-model="nickname" />
            </li>
            <li>
              <input type="password" placeholder="비밀번호" v-model="pwd" />
            </li>
            <li>
              <div class="error">
                {{ errorPwdCheck }}
              </div>
            </li>
            <li>
              <input
                type="password"
                placeholder="비밀번호 확인"
                v-model="pwdCheck"
              />
            </li>
            <li>
              <div class="error">
                {{ validatePwdCheck }}
              </div>
            </li>
            <li><a class="btn btn-signup" href="#">회원가입</a></li>
            <li><a href="/login" id="signin">👉 이미 회원이신가요?</a></li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpView",
  components: {},
  data() {
    return {
      email: "",
      nickname: "",
      pwd: "",
      pwdCheck: "",
      isEmail: false,
      isPwd: false,
      isPwdCheck: false,
      isBtn: false,
    };
  },
  computed: {
    validateEmail() {
      var regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.email && !regex.test(this.email))
        return "이메일 형식이 아닙니다.";
      return "";
    },
    validatePwdCheck() {
      if (this.pwd != this.pwdCheck) return "비밀번호가 일치하지 않습니다.";
      return "";
    },
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
}

li {
  list-style: none;
}

#signup-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 20px;
}

#signin {
  color: gray;
  text-decoration: underline;
}

.container {
  width: 100vw;
  height: 100vh;
  background-color: #b0daff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup-box {
  background-color: white;
  border-radius: 20px;
  display: flex;
}
.signup-container {
  display: flex;
  align-items: center;
  justify-items: center;
  margin: auto;
  height: 100%;
  padding: 40px;
}
input {
  height: 44px;
  width: 320px;
  margin-bottom: 10px;
  padding: 20px;
  border: none;
  border-bottom: 5px solid lightgrey;
  border-radius: 4px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: black;
  font-size: 18px;
  border-radius: 4px;
  width: 320px;
  height: 44px;
  font-weight: bold;
  transition: 0.3s;
  background-color: #b0daff;
  font-weight: 500;
  margin-bottom: 10px;
}

a.btn:active {
  transform: scale(0.95);
}

.signup-box {
  margin: auto;
  padding: auto;
}

ul {
  padding: 0px;
  margin: auto;
}

/**아이디체크 */
#btn-idcheck {
  position: absolute;
  transform: translate(-110%, 8px);
  border: none;
  background: #b0daff;
  padding: 4px 8px;
  border-radius: 10px;
  cursor: pointer;
}

#btn-idcheck:active {
  background: #daf5ff;
}

#email {
  padding-right: 50px;
}

/** 에러 */
.error {
  text-align: left;
  margin-bottom: 10px;
  font-size: 14px;
  color: #ff3333;
}
</style>
