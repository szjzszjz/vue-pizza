// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/index'
// import { mapState } from 'vuex'

Vue.config.productionTip = false
axios.defaults.baseURL = 'https://vue-pizza-bbaad.firebaseio.com/'

// 配置axios原型
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  computed: {
    // ...mapState(['isLogin']) // ...展开运算符 映射state里面的属性 直接获取值
    isLogin () {
      console.log('ee')
      console.log(this.$store.state.isLogin)
      return this.$store.state.isLogin
    }
  }
})

// 全局守卫
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//   } else {
//     console.log(this.$store.state.isLogin)
//     if (this.isLogin) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

// 后置钩子 页面跳转之后调用
// router.afterEach((to, from) => {
//   alert('after each')
// })
