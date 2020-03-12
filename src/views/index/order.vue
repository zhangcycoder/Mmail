<template>
  <div>
    <div class="top">订单管理</div>
    <SearchSelect :options="options" @inquire="inquire" />
    <tables :list="list" :titleArr="titleArr" :show="text" />
    <sorter :pageSize="10" :total="230" @handlePage="handlePage" v-show=show />
  </div>
</template>

<script>
import tables from "../../components/tables";
import SearchSelect from "../../components/SearchSelect";
import sorter from "../../components/sorter";
export default {
  components: {
    tables,
    sorter,
    SearchSelect
  },
  data() {
    return {
      list: [],
      options: [{ value: "按单号查询", label: "按单号查询" }],
      show:true,
      text: {
        a: "查看"
      },
      titleArr: [
        { label: "订单号", prop: "orderNo" },
        { label: "收件人", prop: "receiverName" },
        { label: "订单状态", prop: "statusDesc" },
        { label: "订单总价", prop: "payment" },
        { label: "创建时间", prop: "createTime" }
      ],
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
    getOrderInfo() {
      this.Network.getOrderList(this.params, res => {
        this.list = res.data.data.list;
      });
    },
    handlePage(val) {
      this.params.pageNum = val;
      this.getOrderInfo();
    },
    inquire(params) {
      if (params.orderNo == "") {
        this.getOrderInfo();
                this.show = true
      } else {
        if (isNaN(params.orderNo)) {
          alert("请输入正确的订单号");
        } else {
          this.Network.getSearch(params.orderNo, res => {
              if(res.data.status==0){
                  console.log(res.data.data.list)
                this.list=res.data.data.list
                this.show = false
              }else{
                    alert("订单号不存在");
              }
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../Scss/index.scss";
.top{
    @include topText()
}
</style>