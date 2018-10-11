import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/layout/layoutTmp/Vlayout.vue'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true
    },
    children: [{
      path: '/home',
      name: 'home',
      component: resolve => require(['@/views/index/index.vue'], resolve),
      meta: {
        title: '首页',
        hideInMenu: true
      }
    },{
      path: '/statisticsManage',
      name: 'statisticsManage',
      component: resolve => require(['@/views/statisticsManage/index.vue'], resolve),
      meta: {
        title: '统计报表',
        hideInMenu: true
      }
    },{
      path: '/statisticsManage/transactionData',
      name: 'transactionData',
      component: resolve => require(['@/views/statisticsManage/transactionData/index.vue'], resolve),
      meta: {
        title: '交易汇总',
        hideInMenu: true,
        tabBar: false,
        isBack: true
      }
    },{
      path: '/userManage',
      name: 'userManage',
      component: resolve => require(['@/views/userManage/index.vue'], resolve),
      meta: {
        title: '我的',
        hideInMenu: true
      }
    }]
  }]
})
