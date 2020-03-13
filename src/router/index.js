import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
        component :()=>import ('../views/index/homePage')
      },
      {
        path:'/order',
        name:'order',
        component :()=>import ('../views/index/order.vue')
      },
      {
        path:'/shopOne',
        name:'shopOne',
        component :()=>import ('../views/index/shopOne.vue')
      },
      {
        path:'/shopTwo',
        name:'shopTwo',
        component :()=>import ('../views/index/shopTwo.vue')
      },
      {
        path:'/userList',
        name:'userList',
        component :()=>import ('../views/index/userList.vue')
      },
      {
        path:'/produce',
        name:'produce',
        component :()=>import ('../views/page/productDetail')
      },
      {
        path:'/categoryAdd',
        name:'categoryAdd',
        component :()=>import('../views/page/category.vue')
      },
      {
        path:'/orderDetail',
        name:'orderDetail',
        component :()=>import('../views/page/orderDetail.vue')
      }

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
