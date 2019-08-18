// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://vue-pizza-bbaad.firebaseio.com/'

// 配置axios原型
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//   } else {
//     alert('请先登录')
//     next('/login')
//   }
// })

// 后置钩子 页面跳转之后调用
// router.afterEach((to, from) => {
//   alert('after each')
// })
