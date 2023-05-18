<template>
  <div class="slider-container">
    <div class="title">국내 지역별 관광지</div>
    <div class="image-slider">
      <vueper-slides
        class="no-shadow"
        :visible-slides="4"
        slide-multiple
        :gap="4"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :bullets="false"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image"> </vueper-slide>
        <!-- <vueper-slide
          v-for="i in 10"
          :key="i"
          :title="i.toString()"
          :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
        /> -->
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "MainAttraction",
  components: { VueperSlides, VueperSlide },
  data: () => ({
    slides: [
      { image: require("@/assets/images/seoul.jpg") },
      { image: require("@/assets/images/jeju.jpg") },
      { image: require("@/assets/images/busan.jpg") },
      { image: require("@/assets/images/seoul2.jpg") },
      { image: require("@/assets/images/seoul3.jpg") },
    ],
  }),
  created() {},
  methods: {},
};
</script>

<style scoped>
.title {
  text-align: left;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 700;
}

.slider-container {
  margin: 0 30px;
  margin-bottom: 40px;
  /*여기서부터없애면됨 */
}
</style>
