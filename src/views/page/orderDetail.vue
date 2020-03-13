<template>
  <div>
      <div class="top">订单详情</div>
    <el-form ref="form" :model="order" label-width="80px" :disabled=true>
      <el-form-item label="订单号">
        <el-input v-model="order.orderNo"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="order.createTime"></el-input>
      </el-form-item>
      <el-form-item label="收件人">
        <el-input v-model="order.receiverName"></el-input>
      </el-form-item>
      <el-form-item label="订单状态：">
        <el-input v-model="order.statusDesc"></el-input>
      </el-form-item>
      <el-form-item label="支付方式">
        <el-input v-model="order.paymentType"></el-input>
      </el-form-item>
      <el-form-item label="订单金额">
        <el-input v-model="order.payment"></el-input>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.order.order);
    if (this.$store.state.order.order.orderNo) {
        this.order = this.$store.state.order.order
      console.log("有数据");
    } else {
        alert('重新进入')
    }
  },
  data() {
    return {
        order:{
        }
    };
  },

};
</script>

<style lang="scss" scoped>
@import "../../Scss/index";
.top {
  @include topText();
}
</style>