import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import homePage from '../views/index/homePage.vue'
import order from '../views/index/order.vue'
import shopOne from '../views/index/shopOne.vue'
import shopTwo from '../views/index/shopTwo.vue'
import userList from '../views/index/userList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children:[
      {
        path:'/',
        name:'homePage',
        component :homePage
      },
      {
        path:'/order',
        name:'order',
        component :order
      },
      {
        path:'/shopOne',
        name:'shopOne',
        component :shopOne
      },
      {
        path:'/shopTwo',
        name:'shopTwo',
        component :shopTwo
      },
      {
        path:'/userList',
        name:'userList',
        component :userList
      },

    ]
  },
  {
    path :'/login',
    name:'login',
    component:()=>import('../components/login.vue')
  }
  // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })


export default router
