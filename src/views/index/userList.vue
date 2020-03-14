<template>
  <div>
    <div class="top">用户管理</div>
    <tables :list="tableData" :titleArr="Titles" />
    <sorter @handlePage="handlePage" :pageSize="10" :total="180" />
  </div>
</template>

<script>
import sorter from "../../components/sorter";
import tables from "../../components/tables";
import time from "../../util/Time";
export default {
  data() {
    return {
      tableData: [],
      Titles: [
        { prop: "id", label: "ID" },
        { prop: "username", label: "用户名" },
        { prop: "email", label: "邮箱" },
        { prop: "phone", label: "电话" },
        { prop: "registration", label: "注册时间" }
      ],
      params: {
        username: "admin",
        password: "admin",
        pageSize: 10,
        pageNum: 1
      }
    };
  },
  components: {
    sorter,
    tables
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    handlePage(val) {
      this.params.pageNum = val;
      this.getUserInfo();
    },
    getUserInfo() {
      this.Network.getUserList(this.params).then(res => {
        this.tableData = res.data.data.list;
        this.tableData.forEach(e => {
          var a = time(e.updateTime);
          e.registration = a;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../Scss/index.scss";
.top {
  @include topText();
}
</style>