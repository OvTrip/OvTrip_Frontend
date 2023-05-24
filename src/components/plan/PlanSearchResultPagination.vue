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
import { mapState } from "vuex";
const planStore = "planStore";
export default {
  name: "PlanSearchResultPagination",
  components: {},
  computed: {
    ...mapState(planStore, ["pagination"]),
  },
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {
    movePage(index) {
      return this.pagination.gotoPage(index + 1);
    },
  },
};
</script>

<style scoped>
#pagination {
  margin: 0px 10px 0px 10px;
  width: calc(100% - 50px);
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
