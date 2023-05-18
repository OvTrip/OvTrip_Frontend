<template>
  <div class="hero">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="intro-wrap">
            <h1 class="mb-5">
              <span class="d-block">Let's Enjoy Your</span> Trip In
              <span class="typed-words">Maui.</span
              ><span class="typed-cursor typed-cursor--blink">|</span>
            </h1>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="slides">
            <img src="@/assets/images/busan.jpg" alt="Image" class="img-fluid" data-id="1" />
            <img src="@/assets/images/busan.jpg" alt="Image" class="img-fluid" data-id="2" />
            <img src="@/assets/images/busan.jpg" alt="Image" class="img-fluid" data-id="3" />
            <img src="@/assets/images/busan.jpg" alt="Image" class="img-fluid active" data-id="4" />
            <img src="@/assets/images/busan.jpg" alt="Image" class="img-fluid" data-id="5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHero",
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
.hero {
  padding: 7rem 0 10rem 0;
  background: #6998ab;
  margin-bottom: 100px;
}
.hero.hero-inner {
  padding: 9rem 0 7rem 0;
  margin-bottom: auto;
  background: #1a374d;
}
.hero h1 {
  color: #ffffff;
  font-size: 60px;
}
@media (max-width: 991.98px) {
  .hero h1 {
    font-size: 45px;
  }
}
.hero h1 .typed-words {
  position: relative;
}
.hero h1 .typed-words:before {
  position: absolute;
  height: 7px;
  background-color: #b1d0e0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
}
.hero .intro-wrap {
  position: relative;
  z-index: 1;
}
.hero .slides {
  background: #ffffff;
  max-width: 800px;
  left: -100px;
  z-index: 0;
  position: relative;
  border-radius: 200px;
  -webkit-box-shadow: 0 25px 50px -10px rgba(26, 55, 77, 0.4);
  box-shadow: 0 25px 50px -10px rgba(26, 55, 77, 0.4);
  height: 608px;
  margin-bottom: -200px;
}
@media (max-width: 991.98px) {
  .hero .slides {
    left: 0;
  }
}
.hero .slides img {
  position: absolute;
  border-radius: 200px;
  opacity: 0;
  -webkit-transition: 4s opacity ease;
  -o-transition: 4s opacity ease;
  transition: 4s opacity ease;
  background: #ffffff;
}
.hero .slides img.active {
  opacity: 1;
  z-index: 1;
}
</style>
