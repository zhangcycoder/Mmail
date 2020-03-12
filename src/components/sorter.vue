<template>
  <div>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="defaultPage"
        :page-size=pageSize
        layout="prev, pager, next, jumper"
        :total=total
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultPage: 1
    };
  },
  props:{
      total:Number,
      pageSize:Number
  },
  methods :{
      handleCurrentChange(val) {
        this.$emit('handlePage',val)
      }
  }
};
</script>

<style lang="scss" scoped>
</style>