<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4" class="left">
        <div class="ha">HAPPY</div>
        <div class="mm">MMALL</div>
      </el-col>
      <el-col :xs="16" :sm="18" :md="20" :lg="20" :xl="20" class="right">
        <div class="content">
          <div>
            <i class="el-icon-s-check"></i>
            欢迎，
              {{this.$store.state.userStatus.name}}
            <el-popconfirm
              confirmButtonText="是的"
              @onConfirm='exit'
              cancelButtonText="关闭"
              icon="el-icon-info"
              iconColor="red"
              title="你确定要退出登录吗？"
            >
              <i class="el-icon-caret-bottom" slot="reference"></i>
            </el-popconfirm>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
    methods:{
        exit(){

          Cookies.set("name", {status:"登录超时"});
            this.$router.push('/login')
        }
    }
};
</script>

<style  scoped>
.left {
  background-color: rgb(84, 92, 100);
}
.ha {
  padding-left: 10%;
  font-size: 26px;
  color: rgb(45, 175, 203);
  font-weight: 600;
}
.mm {
  padding-left: 10%;
  font-size: 28px;
  font-weight: 700;
  color: white;
}
.content {
  height: 100%;
  display: flex;
  height: 70px;
  justify-content: flex-end;
  align-items: center;
}
</style>