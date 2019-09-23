import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import tabBar from '@/views/tabBar'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login

    },
    {
      path: '/',
      component: tabBar,
      children: []

    }
  ]
})

export default router
