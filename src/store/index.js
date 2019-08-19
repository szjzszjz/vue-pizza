import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getter'
import state from './state'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions

//   state: {
//     // 设置属性
//     menuItems: {},
//     pizzas: [],
//     currentUser: null,
//     isLogin: false
//   },
//   getters: {
// // 获取属性的状态
//     getPizzas: state => state.pizzas,
//     currentUser: state => state.currentUser,
//     isLogin: state => state.isLogin
//   },
//   mutations: {
// // 改变属性的状 态
//     setMenuItems (state, data) {
//       state.menuItems = data
//     },
//     setPizzas (state, data) {
//       state.pizzas = data
//     },
//     // 将删除的pizza 从数组中移除
//     removePizza (state, data) {
//       console.log('vuex')
//       console.log(data)
//       // 1
//       // state.pizzas.forEach((pizza, index) => {
//       //   if (data === pizza) {
//       //     console.log('1')
//       //     state.pizzas.splice(index, 1)
//       //   }
//       // })
//       // 2
//       state.pizzas.splice(state.pizzas.indexOf(data), 1)
//     },
//     // 将添加的pizza push进数组
//     pushPizzas (state, data) {
//       state.pizzas.push(data)
//       console.log('ff')
//       console.log(state.pizzas)
//     },
//     updateStatus (state, user) {
//       if (user) {
//         state.currentUser = user
//         state.isLogin = true
//       } else {
//         state.currentUser = null
//         state.isLogin = false
//       }
//     }
//   },
//
//   actions: {
//     // 应用mutation
//     updateStatus ({commit}, user) {
//       commit('updateStatus', user)
//     }
//   }

})
