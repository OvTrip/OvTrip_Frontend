<template>
  <div class="map-container">
    <div id="kakaoMap"></div>
  </div>
</template>

<script>
export default {
  name: "PlanMap",
  components: {},
  data() {
    return {
      map: null,
    };
  },
  created() {},
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=b485b131434be251ad56744ef70903b7&autoload=false";
      //script가 loading이 되면 지도를 출력하도록 구현
      script.onload = () => window.kakao.maps.load(this.loadMap);

      //html>head 안에 script 추가
      document.head.appendChild(script);
    },
    loadMap() {
      const container = document.getElementById("kakaoMap");
      let seoulPos = new window.kakao.maps.LatLng(37.541, 126.986, 10);
      const options = {
        center: seoulPos,
        level: 7,
      };
      this.map = new window.kakao.maps.Map(container, options);
      this.makeMarker();
    },
    makeMarker() {
      const initMarkerPos = new window.kakao.maps.LatLng(37.541, 126.986);
      const marker = new window.kakao.maps.Marker({
        position: initMarkerPos,
      });
      marker.setMap(this.map);
    },
  },
};
</script>

<style scoped>
.map-container {
  width: 50%;
  height: 100vh;
  float: right;
}
#kakaoMap {
  width: 100%;
  height: 100%;
}
</style>
