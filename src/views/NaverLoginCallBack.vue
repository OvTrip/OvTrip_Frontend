<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
const userStore = "userStore";

export default {
  name: "NaverLoginCallBack",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  async created() {
    let code = this.$route.query.code;
    let state = this.$route.query.state;
    this.naver(code, state);
  },
  methods: {
    ...mapActions(userStore, ["naver"]),
  },
};
</script>

<style scoped></style>
