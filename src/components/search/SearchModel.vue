<template>
  <div class="search-modal-container">
    <div class="close-btn-box">
      <button id="btn-close" @click="closeModal">
        <font-awesome-icon
          icon="fa-solid fa-x"
          size="2xl"
          style="color: #000000"
        />
      </button>
    </div>
    <div class="emoji">
      <img
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Couple%20with%20Heart%20Woman%2C%20Man%2C%20Light%20Skin%20Tone.png"
        alt="Couple with Heart Woman, Man, Light Skin Tone"
        width="180"
        height="180"
      />
    </div>
    <div class="search-box">
      <form>
        <input
          type="text"
          class="input-search"
          placeholder="친구의 아이디를 검색해보세요..."
          v-model="keyword"
        />
        <button class="btn-search" @click="sendKeyword">
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            style="color: #000000"
          />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
const modalStore = "modalStore";
export default {
  name: "SearchModal",
  components: {},
  data() {
    return {
      keyword: "",
    };
  },
  computed: {
    ...mapState(modalStore, ["isModalOpen"]),
  },
  created() {},
  methods: {
    ...mapMutations(modalStore, ["SET_IS_MODAL_OPEN"]),
    closeModal() {
      this.SET_IS_MODAL_OPEN(false);
    },
    sendKeyword() {
      this.SET_IS_MODAL_OPEN(false);
      location.href = `/search?keyword=${this.keyword}`;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Pretendard";
}
.search-modal-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  top: 0;
  left: 0;
  right: 0;
}

.search-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-30%);
}
.input-search {
  width: 400px;
  height: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
  padding-right: 40px;
  margin-left: 40px;
  color: #000;
}
.input-search::placeholder {
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 300;
}
.btn-search {
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  right: 0px;
  color: #ffffff;
  background-color: transparent;
  pointer-events: painted;
  transform: translateX(-40px);
}

.emoji {
  transform: translateY(90%);
}

#btn-close {
  background: transparent;
  border-style: none;
  cursor: pointer;
  z-index: 101;
  position: absolute;
  right: 30px;
  top: 10px;
}
</style>
