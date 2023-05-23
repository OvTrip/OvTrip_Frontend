<template>
  <div id="pagination">
    <div v-if="pagination != null">
      <template v-for="(page, index) in pagination.last">
        <a
          href="#"
          :key="index"
          :class="{ on: index + 1 === pagination.current }"
          @click="movePage(index)"
          >{{ index + 1 }}</a
        >
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlanSearchResultPagination",
  components: {},
  props: {
    pagination: {
      type: Object,
    },
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {
    movePage(index) {
      console.log(index + 1);
      return this.pagination.gotoPage(index + 1);
    },
  },
};
</script>

<style scoped>
#pagination {
  margin: 10px auto;
  text-align: center;
}
a {
  display: inline-block;
  margin-right: 10px;
}
.on {
  font-weight: bold;
  cursor: default;
  color: #777;
  pointer-events: none;
}
a,
a:hover,
a:active {
  color: #000;
  text-decoration: none;
}
a:hover {
  font-weight: bold;
}
</style>
