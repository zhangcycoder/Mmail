<template>
  <div class="serachBox">
    <div>
      <el-select v-model="value">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div>
      <el-button plain size="mini" @click="serch">查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: Array
  },
  data() {
    return {
      input: "",
      value: this.options[0].value
    };
  },
  methods: {
    serch() {
      let params = {
        type: this.value,
        orderNo: this.input
      };
      this.$emit("inquire", params);
    }
  }
};
</script>

<style  scoped>
.serachBox {
  display: inline-flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
}
</style>