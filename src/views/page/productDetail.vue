<template>
  <div>
      <div class="top">商品管理----</div>
    <el-form ref="form" :model="products" label-width="80px" :disabled="disabled">
      <el-form-item label="商品名称">
        <el-input v-model="products.name"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input v-model="products.subtitle"></el-input>
      </el-form-item>
      <el-form-item label="当前状态" v-show="this.disabled">
        <el-input v-model="products.status"></el-input>
      </el-form-item>

      <div class="felx">
        <div>所属分类</div>
        <div>
          <el-select v-model="value1" placeholder="请选择一级分类" @change="getCatgory">
            <el-option
              v-for="item in this.category.categoryList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-select v-model="value2" placeholder="请选择二级分类" @change="getCatgory">
            <el-option
              v-for="item in this.category.categoryChildrenList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
      </div>

      <el-form-item label="商品价格">
        <el-input v-model="products.price"></el-input>
      </el-form-item>
      <el-form-item label="商品库存" >
        <el-input v-model="products.stock"></el-input>
      </el-form-item>
      <div >
        <div>商品图片</div>
        <div v-show="this.disabled" class="image"><img :src="products.img" alt=""></div>
        <div class="img" v-show="!this.disabled">
          <div>添加图片：</div>
          <div>
            <el-upload
              action="http://admintest.happymmall.com/manage/product/upload.do"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="products.subImages" alt />
            </el-dialog>
          </div>
        </div>
      </div>
      <quill-editor v-model="products.txt" class="quill" v-show="!this.disabled"></quill-editor>
      <el-form-item class="submitButton" v-show="!this.disabled">
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>

      <el-form-item label="商品详情" v-show="this.disabled">
        <el-input v-model="products.detail"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {

  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      products: {},
      disabled: false,
      value1: [],
      value2: []
    };
  },
  mounted() {
    this.products = this.product.product
    this.getCategoryList();
    if (this.$route.params.params == "1") {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  },
  methods: {
    ...mapMutations([
      "getCategoryList",
      "getCategoryChildren",
      "getAddProduct", 
    ]),
    onSubmit() {
      let a = "";
      for (let i = 0; i < 5; i++) {
        a += parseInt(Math.random() * 9 + 1);
      }
      this.categoryId = a;
      this.getAddProduct(this.products);
    },
    getCatgory(a) {
      this.getCategoryChildren(a);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.product.img = file.url;
      this.dialogVisible = true;
    }
  },
  computed: {
    ...mapState(["product",'category'])
  }
};
</script>
<style lang="scss" scope>
@import "../../Scss/index";
.top {
  @include topText();
}
.img,
.felx {
  display: inline-flex;
}
.image
{
  width: 100px;
  height: 100px;
}
.image>img
{
  width: 100%;
}
.felx {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 530px;
  margin-bottom: 20px;
}
.submitButton {
  margin-top: 50px;
}
.quill {
  height: 300px;
}
</style>