<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">#서울</h3>
    </div>
    <div class="card-body"><img :src="images.image" alt="" /></div>
  </div>
</template>

<script>
export default {
  name: "MainAttractionItem",
  components: {},
  props: ["images"],
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
* {
  box-sizing: border-box;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #eff2f5 !important;
  border-radius: 0.65rem;
  /* box-shadow: 0 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.075) !important; */
  margin: 0px 10px;
}

.card > .card-header {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  /* min-height: 70px; */
  padding: 0 1.5rem;
  background-color: transparent;
}

.card-header:first-child {
  border-radius: calc(0.65rem - 1px) calc(0.65rem - 1px) 0 0;
}

.card-header {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid #eff2f5;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid #eff2f5;
}

.card > .card-body {
  /* padding: 2rem 2.25rem; */
  flex: 1 1 auto;
}

img {
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 0.65rem;
  border-bottom-right-radius: 0.65rem;
}
</style>
