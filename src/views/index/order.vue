<template>
  <div>
    <div class="top">订单管理</div>
    <SearchSelect :options="this.order.options" @inquire="inquire" />
    <tables :list="this.order.list" :titleArr="this.order.titleArr" :show="this.order.text" @shopHandle="getDetail" />
    <sorter :pageSize="10" :total="230" @handlePage="handlePage" v-show="this.order.show" />
  </div>
</template>

<script>
import tables from "../../components/tables";
import SearchSelect from "../../components/SearchSelect";
import sorter from "../../components/sorter";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    tables,
    sorter,
    SearchSelect
  },
  data() {
    return {
      params: {
        pageSize: 10,
        pageNum: 1
      }
    };
  },
  mounted() {
    this.getOrderInfo();
  },
  methods: {
    ...mapMutations(['getOrderInfo','getOrder']),
    handlePage(val) {
      this.params.pageNum = val;
      this.getOrderInfo();
    },
    inquire(params) {
      if (params.orderNo == "") {
        this.getOrderInfo();
        this.order.show = true;
      } else {
        if (isNaN(params.orderNo)) {
          alert("请输入正确的订单号");
        } else {
          this.Network.getSearch(params.orderNo, res => {
            if (res.data.status == 0) {
              this.order.list = res.data.data.list;
              this.order.show = false;
            } else {
              alert("订单号不存在");
            }
          });
        }
      }
    },
    getDetail(a, b) {
      this.getOrder(b)
      this.$router.push('/orderDetail');
    }
  },
  computed: {
    //'list','options','show','text','titleArr','params'
    ...mapState(["order"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../Scss/index.scss";
.top {
  @include topText();
}
</style>