import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import category from './category'
import order from './order'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus:{status:'登录超时'} ,
  },
  mutations: {
    getUserInfo(state, value) {
      state.userStatus = value;
    },

  },
  actions: {
  },
  modules: {
    product,
    category,
    order
  }
})
