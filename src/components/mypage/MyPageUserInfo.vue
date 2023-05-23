<template>
  <div>
    <div id="mypage-title">My Page</div>
    <div class="user-info">
      <div class="profile-img">
        <img src="@/assets/images/seoul.jpg" alt="" />
      </div>
      <div class="user-info-text">
        <div id="user-name">닉네임</div>
        <div>친구 0명</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPageUserInfo",
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
* {
  font-family: "Pretendard";
  box-sizing: border-box;
}

#mypage-title {
  /* background-color: Red; */
  text-align: left;
  padding: 24px;
  font-size: 24px;
  font-weight: 800;
}

.user-info {
  /* background: #daf5ff; */
  display: flex;
  align-items: center;
  padding: 10px;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 100px;
  overflow: hidden;
  position: relative;
  margin: 10px;
}

.profile-img > img {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
}

#user-name {
  font-size: 30px;
  font-weight: 700;
}

.user-info-text {
  display: flex;
  flex-direction: column;
  align-content: left;
  text-align: left;
  margin-left: 10px;
}
</style>
