<template>
  <div class="home">
    <div>
      <Header />
    </div>
    <el-row :gutter="10" class="box">
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4" class="home_left">
        <div class="grid-content bg-purple">
          <sideBar />
        </div>
      </el-col>
      <div class="right">
        <el-col :xs="16" :sm="18" :md="20" :lg="20" :xl="20" class="home_right">
          <router-view></router-view>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import sideBar from "./index/sidebar";
import Header from "./index/Header";
export default {
  name: "Home",
  components: { sideBar, Header }
};
</script>

<style >
.home {
  height: 900px;
}
.box {
  height: 100%;
}
.home_left {
  height: 100%;
  background-color: rgb(84, 92, 100);
}

.home_right {
  height: 850px;
  overflow:auto;
  background-color: rgb(243, 243, 243);
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>