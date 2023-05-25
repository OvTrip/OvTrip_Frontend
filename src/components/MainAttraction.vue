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
        :touchable="false"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
      >
        <vueper-slide v-for="slide in slides" :key="slide.image">
          <template #content>
            <div class="vueperslide__content-wrapper">
              <main-attraction-item :images="slide"></main-attraction-item>
            </div>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import MainAttractionItem from "./MainAttractionItem.vue";
export default {
  name: "MainAttraction",
  components: { VueperSlides, VueperSlide, MainAttractionItem },
  data: () => ({
    slides: [
      { image: require("@/assets/images/seoul.jpg"), title: "서울" },
      { image: require("@/assets/images/jeju.jpg"), title: "제주" },
      { image: require("@/assets/images/busan.jpg"), title: "부산" },
      { image: require("@/assets/images/seoul2.jpg"), title: "서울" },
      { image: require("@/assets/images/seoul3.jpg"), title: "서울" },
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
