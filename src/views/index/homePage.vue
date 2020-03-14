<template>
  <div>
    <div class="top">首页</div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="user a">
          <div class="page_Box">{{this.list.userCount}}</div>
          <div>
            <i class="el-icon-user-solid"></i>
            用户总数
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="shop a">
          <div class="page_Box">{{this.list.productCount}}</div>
          <div>
            <i class="el-icon-s-grid"></i>
            商品总数
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="order a">
          <div class="page_Box">{{this.list.orderCount}}</div>
          <div>
            <i class="el-icon-s-claim"></i>
            订单总数
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    console.log(this.Network.statistic())
    this.Network.statistic().then(res => (this.list = res.data.data));
  }
};
</script>

<style lang="scss"  scoped>
@import "../../Scss/index.scss";
.top {
  @include topText();
}

.page_Box {
  text-align: center;
  font-weight: 900;
  font-size: 35px;
}
.a {
  height: 160px;
  text-align: center;
  line-height: 80px;
  color: white;
}
.user {
  background-color: rgb(240, 185, 95);
}
.shop {
  background-color: rgb(107, 190, 107);
}
.order {
  background-color: rgb(93, 184, 211);
}

.order:hover {
  @include homePage(76, 177, 297);
}
.shop:hover {
  @include homePage(92, 184, 92);
}
.user:hover {
  @include homePage(240, 175, 82);
}
</style>