<template>
  <li>
    <div class="user-profile">
      <img class="profile-image" src="@/assets/images/user.png" />
      <div class="name">홍길동</div>
    </div>
    <button class="btn-follow">Follow</button>
  </li>
</template>

<script>
export default {
  name: "SearchResultItem",
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
li {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
}

.user-profile {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 45px;
  height: 45px;
  border-radius: 30px;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 10px;
}

.btn-follow {
  float: right;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background: #b0daff;
  color: white;
  cursor: pointer;
}

.btn-follow:active {
  transform: scale(0.95);
}
</style>
