<template>
  <div class="d-flex align-items-center">
    <search-model v-if="isModalOpen" />
    <div id="menu">
      <ul>
        <li>
          <a href="/notice">공지사항</a>
        </li>
        <li>
          <a @click.prevent="searchModal"
            ><font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl"
          /></a>
        </li>
        <li>
          <a href="/login"
            ><font-awesome-icon icon="fa-solid fa-user" style="color: #000000" size="xl"
          /></a>
          <ul>
            <li id="profile">{{ userInfo.userNickname }}님 안녕하세요!</li>
            <li><a href="/mypage">My Page</a></li>
            <li><a @click.prevent="onClickLogout">Logout</a></li>
          </ul>
        </li>
        <li>
          <a href="#"><font-awesome-icon icon="fa-solid fa-bell" size="xl" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import SearchModel from "./search/SearchModel.vue";

const userStore = "userStore";
const modalStore = "modalStore";

export default {
  name: "NavBarItem",
  components: { SearchModel },
  data() {
    return {
      openModal: false,
    };
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
    ...mapState(modalStore, ["isModalOpen"]),
  },
  created() {},
  methods: {
    ...mapActions(userStore, ["logoutUser"]),
    ...mapMutations(modalStore, ["SET_IS_MODAL_OPEN"]),
    onClickLogout() {
      this.logoutUser();
      if (this.$route.path !== "/") this.$router.push("/");
    },
    searchModal() {
      this.SET_IS_MODAL_OPEN(true);
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Pretendard";
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;
}
.align-items-center {
  align-items: center !important;
}
.d-flex {
  display: flex !important;
}

/* dropdown*/
#menu ul {
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
}

#menu ul li {
  float: left;
  padding: 0;
}

#menu ul li:hover {
  cursor: pointer;
  background-color: rgba(254, 255, 134, 0.5);
  border-radius: 12px;
}

#menu ul li a {
  display: block;
  margin: 10px;
  padding: 4px;
  /* padding: 16px 20px; */
  color: black;
  text-decoration: none;
}

#menu ul ul {
  display: none;
  background-color: white;
  padding: 0px;
  position: absolute;
  top: 100%;
  margin-top: 2px;
  border-radius: 12px;
  width: 200px;
}

#menu ul li:hover > ul {
  display: block;
}

#menu ul ul li {
  float: none;
  text-align: center;
  position: relative;
  padding: 10px;
  font-size: 14px;
}
#menu ul ul li:hover {
  border-radius: 0px;
}

#menu ul ul li:last-child:hover {
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 12px;
}

#menu ul ul ul {
  position: absolute;
  top: -1px;
  left: 100%;
  width: 120%;
}
#profile {
  background-color: rgb(254, 255, 134);
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  pointer-events: none;
  font-weight: 700;
}
</style>
