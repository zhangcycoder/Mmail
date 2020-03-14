<template>
  <div class="login_box">
    <div>欢迎登陆 - MMALL管理系统</div>
    <div v-show="show" class="hint">{{this.userStatus.status}}</div>
    <el-input placeholder="请输入内容" size="medium" v-model="id" clearable></el-input>
    <el-input placeholder="请输入密码" size="medium" v-model="pas" show-password></el-input>
    <el-button type="primary" size="medium" @click="login">登陆</el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      id: "",
      pas: "",
      show: false
    };
  },
  computed: {
    ...mapState(["userStatus"])
  },
  methods: {
    login() {
      var params = {
        username: this.id,
        password: this.pas
      };

      this.Network.getLogin(params).then(res => {
        let cookObj = {};
        if (res.data.status == 0) {
          cookObj.id = res.data.data.id;
          cookObj.name = res.data.data.username;
          cookObj.status = res.data.msg;
          Cookies.set("name", cookObj);
          this.getUserInfo(JSON.parse(Cookies.get("name")));
          this.cook({ status: "登录超时" });
          this.$router.push("/");
        } else {
          this.show = true;
          cookObj.status = res.data.msg;
          Cookies.set("name", cookObj);
          this.getUserInfo(JSON.parse(Cookies.get("name")));
          this.cook({ status: "登录超时" });
        }
      });
    },
    cook(value) {
      clearTimeout(a);
      let a = setTimeout(() => {
        Cookies.set("name", value);
        this.getUserInfo(JSON.parse(Cookies.get("name")));
        this.show = true;
      }, 1200000);
    },
    ...mapMutations(["getUserInfo"])
  }
};
</script>

<style lang="stylus" >
.login_box {
  width: 50%;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  position: absolute;
  background-color: #AEEEEE;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -25%;
  line-height: 50px;
}

.hint {
  font-size: 14px;
  color: red;
}
</style>