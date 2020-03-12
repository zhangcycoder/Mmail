<template>
  <div>
    <div>用户列表</div>
    <el-table :data="tableData" border>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="registration" label="注册时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
import Time from '../../util/Time'
export default {
  data() {
    return {
      tableData: [],
      params: {
        username: "admin",
        password: "admin",
        pageSize: "",
        pageNum: ""
      }
    };
  },
  mounted() {
    this.params.pageSize = 10;
    this.params.pageNum = 1;
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      this.Network.getUserList(this.params, res => {
        console.log(res.data.data.list);
        this.tableData = res.data.data.list;
        this.tableData.forEach(e => {
          //console.log(e);
        //   var time = e.updateTime - e.createTime;
        //   console.log(time);
          let date = new Date(e.updateTime).getTime(); //把当前时间转换为时间戳
          var newDate = new Date().getTime(); //获取到当前时间
        let result = newDate-date;//拿现在的时间减去过去的时间 得到其中差了多少毫秒
        let seconds = result / 1000//转换为秒
        let hour = seconds / 3600//转换为小时
            // console.log(hour,'小时前')
          var a = Time(e.updateTime)
          if(a=='一天内'){
            console.log(hour,'小时前')
          }else{
              console.log(a)
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>