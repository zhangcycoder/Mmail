import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { network } from './util/network'
import localData from './util/locahost'
import Cookies from "js-cookie";

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 注册富文本组件
Vue.use(VueQuillEditor)

Vue.config.productionTip = false

Vue.prototype.Network = network;
Vue.prototype.Loca = localData;


// console.log(JSON.parse(Cookies.get("name")))
router.beforeEach((to, from, next) => {
  if(JSON.parse(Cookies.get("name"))){
    var status = JSON.parse(Cookies.get("name"));
  }else{
    status = {status:'登陆超时'}
  }
  if (status.status == "登录成功" || to.path == '/login') {
    next();
  } else if(to.meta.permission) {//管理器才可以进入，这里只是模拟权限
    status.status==='admin'?next() :next('/403')
  }else{
    if(navigator.userAgent.indexOf("MSIE")>-1 && to.path == '/edit'){
      alert('当前组件不兼容IE10以下')
    }else{
      next('/login')
    }
  }
})
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
