import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userStatus:''
    
  },
  mutations: {
    getUserInfo(state,value){
      state.userStatus = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
