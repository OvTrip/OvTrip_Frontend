<template>
  <div class="slider-container">
    <div class="title">축제 정보</div>
    <main-festival-search-bar></main-festival-search-bar>
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
        <vueper-slide v-for="slide in slides" :key="slide">
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
import MainFestivalSearchBar from "./MainFestivalSearchBar.vue";
import MainAttractionItem from "./MainAttractionItem.vue";
export default {
  name: "MainFestival",
  components: { VueperSlides, VueperSlide, MainFestivalSearchBar, MainAttractionItem },
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
  margin-bottom: 10px;
  font-size: 26px;
  font-weight: 700;
}

.slider-container {
  margin: 0 30px;
  margin-bottom: 20px;
  /*여기서부터없애면됨 */
  /* padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(76, 87, 125, 0.02); */
}
</style>
