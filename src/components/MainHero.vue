<template>
  <div style="width: 100%; height: 600px; display: flex; align-items: center">
    <div class="title">알록달록한 봄 <br />여행을 떠나요💙</div>
    <div id="wrap">
      <ul>
        <li v-for="(slide, index) in slides" :key="index" :class="{ on: index === currentIndex }">
          <img :src="slide.image" :alt="index" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let timer = null;
const AUTO_INTERVAL = 2000;

export default {
  name: "MainHero",
  components: {},
  data() {
    return {
      slides: [
        { image: require("@/assets/images/seoul.jpg") },
        { image: require("@/assets/images/jeju.jpg") },
        { image: require("@/assets/images/busan.jpg") },
        { image: require("@/assets/images/seoul2.jpg") },
        { image: require("@/assets/images/seoul3.jpg") },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    setAutoRoll() {
      let vueSelf = this;
      timer = setInterval(function () {
        vueSelf.addIndex();
      }, AUTO_INTERVAL);
    },
    addIndex() {
      let newIndex = this.currentIndex + 1;
      this.currentIndex = newIndex === this.slides.length ? 0 : newIndex;
    },
    roll(direction) {
      let diff = direction === "prev" ? -1 : 1;
      this.currentIndex = this.getTargetIndex(diff);
      if (this.playing) {
        clearInterval(timer);
        this.setAutoRoll();
      }
    },
    play() {
      this.setAutoRoll();
      this.playing = true;
    },
    pause() {
      clearInterval(timer);
      this.playing = false;
    },
    getTargetIndex(diff) {
      let length = this.slides.length;
      let index = this.currentIndex + diff;
      if (index === -1) {
        return length - 1;
      }
      if (index === length) {
        return 0;
      }
      return index;
    },
  },
  created() {
    this.play();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.title {
  width: 40%;
  float: left;
  font-size: 40px;
  font-weight: 700;
  background-color: transparent;
  transform: translate(0%, -10%);
  text-align: left;
  padding: 120px;
}
img {
  width: 100% !important;
  height: 100% !important;
  /* outline: 1px solid white;
  outline-offset: -1px; */
  /* border-radius: 200px; */
  border-top-left-radius: 200px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 200px;
}

#wrap {
  width: 60%;
  /* background-color: blue; */
  float: left;
  align-items: center;
  height: 100%;
}
body {
  background-color: #2c3e50;
}
div {
  margin: 0;
  padding: 0;
  text-align: center;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
}
li {
  display: none;
  height: 100%;
}
li.on {
  display: block;
}
span {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 0 6px;
  color: lightgray;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
