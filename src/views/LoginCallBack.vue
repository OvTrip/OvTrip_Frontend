<template>
  <div>로그인중...</div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginCallBack",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  async created() {
    const URL = `http://localhost:8080/oauth/kakao?code=` + this.$route.query.code;
    await axios.get(URL).then((response) => {
      let accessToken = response.data.accessToken;
      let token = "Bearer " + accessToken;
      console.log(accessToken);
      axios
        .get("http://localhost:8080/user", {
          headers: { Authorization: token },
        })
        .then((response) => console.log(response))
        .then(this.$router.push({ path: "/" }));
    });
  },
  methods: {},
};
</script>

<style scoped></style>
