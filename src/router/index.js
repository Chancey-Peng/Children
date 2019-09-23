import Vue from 'vue'
import Router from 'vue-router'
// import { homedir } from 'os'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/MedicalApp/home'
    },
    {
      path: '/MedicalApp/home',
      name: 'Home',
      component: resolve => require(['@/views/Home/Home.vue'], resolve)
    },
    {
      path: '/MedicalApp/sort',
      name: 'Sort',
      component: resolve => require(['@/views/Sort/Sort.vue'], resolve)
    },
    {
      path: '/MedicalApp/mine',
      name: 'Mine',
      component: resolve => require(['@/views/Mine/mine.vue'], resolve)
    }
  ]
})
