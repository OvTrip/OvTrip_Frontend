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
    ...mapState(planStore, ["markerPosList"]),
  },
  watch: {
    markerPosList: {
      // immediate: true,
      handler(markerPosList) {
        console.log("hi");
        this.setMarkers(markerPosList);
      },
    },
  },
  data() {
    return {
      map: null,
      bounds: null,
      polyline: null,
      linePath: [],
      markers: [],
    };
  },
  created() {
    // console.log(this.markerPosList);
  },
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
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=be18b756880be5f8c0abc5fe02127cda&autoload=false&libraries=services";
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
      this.setMarkers(this.markerPosList);
    },
    setMarkers(markerPosList) {
      if (this.markers.length) {
        for (let i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }
      }
      this.markers = [];
      this.polyline.setMap(null);
      let linePath = [];
      if (markerPosList.length) {
        for (let i = 0; i < markerPosList.length; i++) {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(
              markerPosList[i].latitude,
              markerPosList[i].longitude
            ),
          });
          this.markers.push(marker);
        }
      }
      console.log(this.markers);
      if (this.markers.length) {
        this.bounds = new kakao.maps.LatLngBounds();
        for (let i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(this.map);
          this.bounds.extend(this.markers[i].getPosition());
          linePath.push(this.markers[i].getPosition());
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
