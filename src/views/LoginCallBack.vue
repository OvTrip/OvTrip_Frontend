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
      console.log(response.data.accessToken);
      this.$router.push({ path: "/" });
    });
  },
  methods: {},
};
</script>

<style scoped></style>
