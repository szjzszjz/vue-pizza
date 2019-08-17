<template>
  <div>admin</div>
</template>

<script>
  export default {
    name: 'Admin',
    data () {
      return {
        name: 'szjz'
      }
    }
    // 组件内路由
    // 进入页面之前
    // beforeRouteEnter: (to, from, next) => {
    //   // alert(this.name)
    //   // next()
    //   // 异步获取页面信息
    //   next((vm) => {
    //     alert(vm.name)
    //   })
    // },
    // // 离开页面之前
    // beforeRouteLeave: (to, from, next) => {
    //   if (confirm('are you sure leave?') === true) {
    //       next(true)
    //   } else {
    //     next(false)
    //   }
    // }

  }
</script>

<style scoped>

</style>
