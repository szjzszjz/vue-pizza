export default {
// 改变属性的状 态
  setMenuItems (state, data) {
    state.menuItems = data
  },
  setPizzas (state, data) {
    state.pizzas = data
  },
  // 将删除的pizza 从数组中移除
  removePizza (state, data) {
    console.log('vuex')
    console.log(data)
    // 1
    // state.pizzas.forEach((pizza, index) => {
    //   if (data === pizza) {
    //     console.log('1')
    //     state.pizzas.splice(index, 1)
    //   }
    // })
    // 2
    state.pizzas.splice(state.pizzas.indexOf(data), 1)
  },
  // 将添加的pizza push进数组
  pushPizzas (state, data) {
    state.pizzas.push(data)
    console.log('ff')
    console.log(state.pizzas)
  },
  updateStatus (state, user) {
    if (user) {
      state.currentUser = user
      state.isLogin = true
    } else {
      state.currentUser = null
      state.isLogin = false
    }
  }
}
