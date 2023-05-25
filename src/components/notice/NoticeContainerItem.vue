<template>
  <tr>
    <td class="table-subject">
      <div class="inner_cell">
        <span>
          <a :href="`/notice/view/${notice.articleNo}`"> {{ notice.subject }} </a>
        </span>
      </div>
    </td>
    <td>
      <div class="inner_cell">{{ notice.userName }}</div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "NoticeContainerItem",
  components: {},
  props: { notice: Object },
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
  font-family: "Pretendard";
}

a {
  text-decoration: none;
  color: black;
}
.inner_cell {
  border-bottom: 1px solid #e6e6e6;
}
.table .inner_cell {
  padding: 15px 20px 14px;
}
</style>
