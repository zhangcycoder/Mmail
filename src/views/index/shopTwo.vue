<template>
  <div>
    <div class="top">品类管理</div>
    <div>当前商品ID:{{this.id}}</div>
    <tables
      :list="this.category.list"
      :titleArr="this.category.titleArr"
      @shopHandle="shopHandle"
      :show="this.category.show"
    />
    <div class="button">
      <el-button icon="el-icon-plus" type="primary" @click="add">添加商品</el-button>
    </div>
  </div>
</template>

<script>
import tables from "../../components/tables";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      id: 0
    };
  },
  components: {
    tables
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    ...mapMutations(["getCategory", "setCategoryName", "getChildren"]),
    shopHandle(a, b) {
      if (a == "查看") {
        var name = prompt("请输入新的品类名称", b.name);
        let params = {
          categoryId: b.id,
          categoryName: name
        };
        if (params.categoryName !== null) {
          this.setCategoryName(params);
          this.category.show.forEach(e => {
            if (e.b) {
              this.getCategory();
            }
          });
        }
      } else if (a == "编辑") {
        this.id = b.id;
        this.getChildren(b.id);
      }
    },
    add(){
      this.$router.push('/categoryAdd')
    }
  },
  computed: {
    ...mapState(["category"])
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