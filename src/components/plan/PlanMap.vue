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
  computed: {
    update_marker() {
      return this.$store.state.markers;
    },
  },
  watch: {
    update_marker(markers) {
      this.setMarkers(markers);
    },
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
      this.map = new kakao.maps.Map(container, options);

      // this.makeMarker();
    },
    setMarkers(markers) {
      for (let i = 1; i < markers.length; i++) {
        markers[i].setMap(this.map);
      }
    },
    // makeMarker() {
    //   const initMarkerPos = new window.kakao.maps.LatLng(37.541, 126.986);
    //   const marker = new window.kakao.maps.Marker({
    //     position: initMarkerPos,
    //   });
    //   marker.setMap(this.map);
    // },
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
