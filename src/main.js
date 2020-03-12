import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  {network} from './util/network'
import localData from './util/locahost'
import Cookies from "js-cookie";

Vue.config.productionTip = false
Vue.prototype.Network = network;
Vue.prototype.Loca = localData;
if(Cookies.get("name")){
  var status = JSON.parse(Cookies.get("name"))
}else{
   status = {status:'登录超时'}
}
store.state.userStatus=status
router.beforeEach((to, from, next) => {
  if(status.status=="登录成功"||to.path=='/login'){
    next();
  }else{
    next('/login')
  }
})
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
