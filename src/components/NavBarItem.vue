<template>
  <div class="d-flex align-items-center">
    <button type="button" class="btn">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="xl" />
    </button>
    <button type="button" class="btn">
      <font-awesome-icon
        icon="fa-solid fa-user"
        style="color: #000000"
        size="xl"
      />
    </button>
    <button type="button" class="btn">
      <font-awesome-icon icon="fa-solid fa-bell" size="xl" />
    </button>
  </div>
</template>

<script>
export default {
  name: "NavBarItem",
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
.align-items-center {
  align-items: center !important;
}
.d-flex {
  display: flex !important;
}
/* .btn {
  background-color: transparent;
  border: none;
  height: 60px;
  margin: 0px 8px;
} */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: calc(1.5em + 1.5rem + 2px);
  width: calc(1.5em + 1.5rem + 2px);
  border: 0;
  margin-right: 0.5rem !important;
  font-size: 1rem;
  border-radius: 0.65rem;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-weight: 500;
  line-height: 1.2;
  background-color: transparent;
}

.btn:hover {
  background-color: rgba(254, 255, 134, 0.5);
}
</style>
