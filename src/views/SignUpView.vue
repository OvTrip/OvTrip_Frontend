<template>
    <div class="container">
        <div class="signup-box">
            <form action="#">
                    <div class="signup-container">
                        <ul>
                            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Blue%20Heart.png" alt="Blue Heart" width="100" height="100" />
                            <div id="signup-title">회원가입</div>
                            <li><input type="email" placeholder="이메일" /></li>
                            <li><input type="text" placeholder="닉네임" /></li>
                            <li><input type="password" placeholder="비밀번호" /></li>
                            <li><input type="password" placeholder="비밀번호 확인" /></li>
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
    name: 'SignUpView',
    components: {},
    data() {
        return {
            message: '',
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
}

li {
  list-style: none;
}

#signup-title{
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top:20px;
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
    /* width:60%; */
    height:60%;
    background-color: white;
    border-radius: 20px;
    display: flex;
}
.signup-container {
  display: flex;
  align-items: center;
  justify-items: center;
  margin: auto;
  height:100%;
  padding:40px;
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
  margin-bottom:10px;
}

a.btn:active {
  transform: scale(0.95);
}

.signup-box{
  margin: auto;
  padding: auto;
}

ul {
  padding: 0px;
  margin:auto;
}

</style>