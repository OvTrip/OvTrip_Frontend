<template>
  <div class="search-modal-container">검색모달입니당..</div>
</template>

<script>
export default {
  name: "SearchModal",
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
.search-modal-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  left: 0;
  right: 0;
}
</style>
