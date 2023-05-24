<template>
  <div class="map-container">
    <div id="kakaoMap"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
const planStore = "planStore";
export default {
  name: "PlanMap",
  components: {},
  computed: {
    ...mapState(planStore, ["markers"]),
  },
  watch: {
    markers: {
      // immediate: true,
      handler(markers) {
        this.setMarkers(markers);
      },
    },
  },
  data() {
    return {
      map: null,
      bounds: null,
      polyline: null,
      linePath: [],
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
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=b485b131434be251ad56744ef70903b7&autoload=false&libraries=services";
      //script가 loading이 되면 지도를 출력하도록 구현
      script.onload = () => kakao.maps.load(this.loadMap);

      //html>head 안에 script 추가
      document.head.appendChild(script);
    },
    loadMap() {
      const container = document.getElementById("kakaoMap");
      let seoulPos = new kakao.maps.LatLng(37.541, 126.986, 10);
      const options = {
        center: seoulPos,
        level: 7,
      };
      // this.SET_MAP(new kakao.maps.Map(container, options));
      this.map = new kakao.maps.Map(container, options);
      this.polyline = new kakao.maps.Polyline({
        strokeWeight: 5, // 선의 두께 입니다
        strokeColor: "#0080FF", // 선의 색깔입니다
        strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: "solid", // 선의 스타일입니다
      });
    },
    setMarkers(markers) {
      this.polyline.setMap(null);
      let linePath = [];
      if (markers.length) {
        this.bounds = new kakao.maps.LatLngBounds();
        for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(this.map);
          this.bounds.extend(markers[i].getPosition());
          linePath.push(markers[i].getPosition());
        }
        this.polyline.setPath(linePath);
        this.map.setBounds(this.bounds);
        this.polyline.setMap(this.map);
      }
    },
  },
};
</script>

<style scoped>
.map-container {
  position: fixed;
  right: 0;
  width: 50%;
  height: 100vh;
}
#kakaoMap {
  width: 100%;
  height: 100%;
}
</style>
