<template>
  <div class="festival-search">
    <select name="pets" id="select" class="form-select form-select-solid">
      <option value="">지역</option>
      <option value="dog">Dog</option>
    </select>
    <select name="pets" id="pet-select2" class="form-select form-select-solid">
      <option value="">월</option>
      <option value="dog">Dog</option>
    </select>
    <button type="button" class="btn">조회</button>
  </div>
</template>

<script>
export default {
  name: "MainFestivalSearchBar",
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
.festival-search {
  text-align: left;
  margin-bottom: 20px;
}
.form-select {
  /* display: block; */
  /* width: 100%; */
  padding: 0.75rem 3rem 0.75rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #181c32;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%237E8299' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 16px 12px;
  border: 1px solid #e4e6ef;
  border-radius: 0.65rem;
  /* box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075); */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 10px;
}

.form-select.form-select-solid {
  background-color: #f5f8fa;
  border-color: #f5f8fa;
  color: #5e6278;
  transition: color 0.2s ease, background-color 0.2s ease;
}

.btn {
  display: inline-block;
  font-weight: 500;
  line-height: 1.5;
  color: #181c32;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 0.65rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #00b2ff;
  background-color: #b9e9fc;
}

* {
  box-sizing: border-box;
}
</style>
