<template>
  <div class="nav">
    <div class="logo">
      <a @click="$router.push('/')"
        ><img src="@/assets/images/logo-black.png" alt="" height="40px"
      /></a>
    </div>
    <div class="navBtnDiv">
      <button class="glow-on-hover" id="saveBtn" name="saveBtn" type="button">
        <div><font-awesome-icon icon="fa-solid fa-floppy-disk" /></div>
        <div>
          <span>Save</span>
        </div>
      </button>
      <button class="glow-on-hover" id="shareBtn" name="shareBtn" type="button">
        <div><font-awesome-icon icon="fa-regular fa-share-from-square" /></div>
        <div>
          <span>Share</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanNavBar",
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
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
  padding: 0px 100px;
  align-items: center;
}
.logo {
  float: left;
  font-size: 30px;
  font-weight: bold;
}

button {
  text-align: center;
  align-items: center;
  padding: 10px;
}

.glow-on-hover {
  height: 35px;
  width: auto;
  font-weight: bold;
  margin-right: 20px;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  z-index: 0;
  display: inline-flex; /* button 내 요소들 가로로  */
}

.glow-on-hover:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000;
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

span {
  margin-left: 8px;
}
</style>
