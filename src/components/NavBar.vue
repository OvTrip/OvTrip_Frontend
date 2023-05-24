<template>
  <div class="navbar">
    <nav-logo />
    <!-- after login -->
    <nav-bar-item v-if="isLogin"></nav-bar-item>
    <!-- before login -->
    <ul v-else>
      <li id="notice"><a href="/notice">공지사항</a></li>
      <li>
        <a class="btn btn-login" href="/login"
          >로그인<font-awesome-icon
            icon="fa-solid fa-right-to-bracket"
            style="color: #000000; margin-left: 2px"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
import NavLogo from "./NavLogo.vue";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  name: "NavBar",
  components: { NavBarItem, NavLogo },
  data() {
    return {
      message: "",
    };
  },
  computed: {
    ...mapState(userStore, ["isLogin"]),
  },
  created() {
    console.log(this.userInfo);
  },
  methods: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: black;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: relative;
  z-index: 3;
  box-sizing: border-box;
  padding: 0px 30px;
  margin: 0px 0px 0px 10px;
}

img {
  height: 40px;
  padding: 10px;
}

/*로그인 버튼 */
.btn {
  font-family: "Pretendard";
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: black;
  font-size: 18px;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.3s;
  background-color: #b0daff;
  font-weight: 500;
}

.btn-login {
  background-color: white;
  color: black;
  border-radius: 4px;
  border-bottom: 5px solid #feff86;
  font-weight: 500;
  padding: 10px;
}

ul {
  list-style: none;
}

li {
  float: left;

  /* padding-left: 10px; */
  line-height: 40px;
}

#notice {
  margin-right: 20px;
  font-weight: 500;
  font-size: 18px;
}
</style>
