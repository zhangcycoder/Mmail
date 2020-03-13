<template>
  <div>
      <div class="top">添加品类</div>
    <div>所属品类</div>
    <el-select v-model="value1" placeholder="/所有" @change="getCatgory">
      <el-option
        v-for="item in this.category.categoryList"
        :key="item.id"
        :label="item.name"
        :value="item.id"
      ></el-option>
    </el-select>
    <div>品类名称</div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click=add>提交</el-button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      value1: [],
      input:'',
      id:''
    };
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    ...mapMutations(["getCategoryList",'setAddCategory']),
    getCatgory(a) {
      this.id = a;
    },
    add(){
        let params = {
           parentId :this.id,
           categoryName : this.input,
        }
        this.setAddCategory(params)
        this.$router.go(-1)
        
    }
  },
  computed: {
    ...mapState(["category"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../Scss/index";
.top {
  @include topText();
}
div{
    margin: 10px;
}
</style>