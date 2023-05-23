<template>
  <div>로그인중...</div>
</template>

<script>
// import axios from "axios";
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
  name: "LoginCallBack",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  computed: {
    ...mapState(userStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  async created() {
    let code = this.$route.query.code;
    console.log(code);
    this.kakao(code);
    // const URL =
    //   `http://localhost:8080/oauth/kakao?code=` + this.$route.query.code;
    // await axios.get(URL).then((response) => {
    //   let accessToken = response.data.accessToken;
    //   let token = "Bearer " + accessToken;
    //   console.log(accessToken);
    //   axios
    //     .get("http://localhost:8080/user", {
    //       headers: { Authorization: token },
    //     })
    //     .then((response) => console.log(response.data))
    //     .then(this.$router.push({ path: "/" }));
    // });
  },
  methods: {
    ...mapActions(userStore, ["kakao"]),
  },
};
</script>

<style scoped></style>
