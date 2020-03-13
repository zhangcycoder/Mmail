<template>
  <div>
    <el-table :data="list" border>
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="(item,index) in titleArr"
        :key="index"
      ></el-table-column>

      <el-table-column
        fixed="right"
        :label="item.label"
        v-show="show"
        v-for="item in show"
        :key="item.id"
      >
        <template slot-scope="scope">
          <span v-show="item.a=='status'">{{scope.row.status}}</span>
          <el-button
            @click="handleClick1(scope.row)"
            type="text"
            v-show="item.a!=='status'"
          >{{item.a}}</el-button>
          <el-button
            type="text"
            size="small"
            @click="handleClick2(scope.row,item.b=='status')"
            v-show="item.b"
            :class="{a:item.b=='status'}"
          >{{item.b!=='status'?item.b:scope.row.status=='在售'?'下架':scope.row.status=='已下架'?'上架':''}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    titleArr: Array,
    show: Array,
  },
  methods: {
    handleClick1(a) {
      this.$emit('shopHandle','查看',a)
    },
    handleClick2(a,b) {
      if(b){
      this.$emit('shopHandle','修改',a)
      }else{
      this.$emit('shopHandle','编辑',a)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.a
{
  padding: 5px ;
  background-color: rgb(240, 173, 78);
  color: white;
  font-size: 14px;
}
</style>