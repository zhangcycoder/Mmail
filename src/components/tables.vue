<template>
  <div>
    <el-table :data="list" border>
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        v-for="(item,index) in titleArr"
        :key="index"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" v-if="show">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" v-show="show.a">{{show.a}}</el-button>
          <el-button type="text" size="small" v-show="show.b">{{show.b}}</el-button>
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
    show:Object
  },
  methods:{
    handleClick(a){
      console.log(a)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>