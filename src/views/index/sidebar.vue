<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <router-link to="/" tag="span">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-data"></i>
            首页
          </template>
        </el-submenu>
      </router-link>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <router-link to="shopOne" tag="span">
            <el-menu-item index="2-1">商品管理</el-menu-item>
          </router-link>
          <router-link to="shopTwo" tag="span">
            <el-menu-item index="2-2">品类管理</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>订单</span>
        </template>
        <el-menu-item-group>
            <router-link to="order" tag="span">
          <el-menu-item index="3-1">
                订单管理
          </el-menu-item>
                </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-check"></i>
          <span>用户</span>
        </template>
        <el-menu-item-group>
            <router-link to="userList" tag="span">
          <el-menu-item index="4-1">
                用户列表
          </el-menu-item>
                </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
};
</script>

<style lang="stylus" scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: black;
}</style>

