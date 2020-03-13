<template>
  <div>
    <div class="top">商品管理</div>
    <div class="button">
      <el-button icon="el-icon-plus" type="primary" @click="add">添加商品</el-button>
    </div>
    <SearchSelect :options="options" @inquire="inquire" />
    <tables :list="this.product.productList" :titleArr="titleArr" @shopHandle="shophandle" :show="show" />
    <sorter :total="200" :pageSize="10" @handlePage="handlePage" v-show="sorter" />
  </div>
</template>

<script>
import tables from "../../components/tables";
import sorter from "../../components/sorter";
import SearchSelect from "../../components/SearchSelect";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      params: { pageNum: 1, pageSize: 10, listType: "search" },
      options: [
        { value: "按商品ID查询", label: "按商品ID查询" },
        { value: "按商品名称查询", label: "按商品名称查询" }
      ],
      titleArr: [
        { prop: "id", label: "id" },
        { prop: "name", label: "信息" },
        { prop: "price", label: "价格" }
      ],
      show: [
        { a: "status", b: "status", label: "状态" },
        { a: "查看", b: "编辑", label: "操作" }
      ],
      sorter: true
    };
  },
  components: {
    tables,
    sorter,
    SearchSelect
  },
  mounted() {
    this.getProductInfo(this.params);
  },
  methods: {
    add() {
      this.$router.push({name:"produce",params:{params:'1'}});
    },
    ...mapMutations(["getProductInfo", "getProductSearch",'setProduct','getPageProduct']),
    handlePage(val) {
      this.params.pageNum = val;
      this.getProductInfo(this.params);
    },
    shophandle(a,b){
      if(a=='修改'){
        if(confirm('您确定要修改产品状态嘛？')){
         let params = {
            productId:b.id,
            status :b.status=='在售'?2:1
          }
            this.setProduct(params)
            this.getProductSearch()
        }
      }else if(a=='查看'){
        this.getPageProduct(b)
        this.$router.push('/produce')
        console.log('详情')
      }else{
        this.$router.push({name:"produce",params:{params:'1'}});
        this.getPageProduct(b)
        console.log('编辑')
      }
    },
    inquire(val) {
      let data = {};
      if (val.type == "按商品ID查询") {
        if (!isNaN(val.orderNo)) {
          data.productId = val.orderNo;
          this.sorter = false;
          this.getProductSearch(data);
        } else {
          alert("id查询不支持数字");
          return
        }
      } else if (val.orderNo == "") {
        this.getProductInfo(this.params);
        this.sorter = true;
      } else {
        data.productName = val.orderNo;
        this.sorter = false;
      }
        this.getProductSearch(data);
    }
  },
  computed: {
    ...mapState(["product"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../Scss/index.scss";
.top {
  @include topText();
}
.button {
  display: flex;
  position: absolute;
  right: 20px;
  top: 40px;
}
</style>