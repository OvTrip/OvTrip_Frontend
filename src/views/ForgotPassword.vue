<template>
    <div class="container">
        <div class="password-box">
            <form action="#">
                    <div class="password-container">
                        <ul>
                            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Confounded%20Face.png" alt="Confounded Face" width="100" height="100" />
                            <div id="password-title">비밀번호를 잊으셨나요?</div>
                            <li><input type="email" placeholder="이메일" /></li>
                            <li><a class="btn" href="#">확인 코드 전송하기</a></li>
                        </ul>
                    </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForgotPassword',
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

#password-title{
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top:20px;
}

.container {
    width: 100vw;
    height: 100vh;
    background-color: #b0daff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.password-box {
    /* width:60%; */
    height:60%;
    background-color: white;
    border-radius: 20px;
    display: flex;
}
.password-container {
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