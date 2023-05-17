<template>
  <div class="slider-container">
    <div class="title">축제 정보</div>
    <festival-search-bar></festival-search-bar>
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
        <!-- <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
      </vueper-slide> -->
        <vueper-slide
          v-for="i in 10"
          :key="i"
          :title="i.toString()"
          :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
        />
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import FestivalSearchBar from "./FestivalSearchBar.vue";
export default {
  name: "MainFestival",
  components: { VueperSlides, VueperSlide, FestivalSearchBar },
  data: () => ({
    slides: [
      //   { image: require("@/assets/images/el-teide-volcano-spain.jpg") },
      //   { image: require("@/assets/images/chernobyl-ukraine.jpg") },
      //   { image: require("@/assets/images/crater-lake-oregon-usa.jpg") },
    ],
  }),
  created() {},
  methods: {},
};
</script>

<style scoped>
.title {
  text-align: left;
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 700;
}

.slider-container {
  margin: 0 30px;
  margin-bottom: 20px;
  /*여기서부터없애면됨 */
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(76, 87, 125, 0.02);
}
</style>
