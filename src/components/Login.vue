<template>
  <div class="row mt-3 col-10 mx-auto">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../assets/logo.png" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="form-group text-center mt-3">
              <label for="email">邮箱</label>
              <input type="email" class="form-control col-md-4 mx-auto" v-model="email">
            </div>
            <div class="form-group text-center mt-3">
              <label for="password">密码</label>
              <input type="password" class="form-control col-md-4 mx-auto" v-model="password">
            </div>
            <button type="submit" class="btn btn-block btn-success mt-5 col-md-3 mx-auto">登录</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
       this.axios.get('/users.json')
         .then((res) => {
           const data = res.data
           const datas = []
           for (let key in data) {
             datas.push(data[key])
           }
           console.log(datas)

           // 实现过滤器
           let result = datas.filter((user) => {
             return user.email === this.email &&
               user.password === this.password
           })

           // 登录成功
           if (result !== null && result.length > 0) {
             this.$store.dispatch('updateStatus', result[0])
             this.$router.push('/home')
           } else {
             // 登录失败
             this.$store.dispatch('updateStatus', null)
             alert('您的账号或者密码错误！')
           }
           console.log(result)
         }).catch((err) => {
         console.log(err)
       })
      }
    },
    // 导航守卫 退出之后清空所有的信息
    beforeRouteEnter: (to, from, next) => {
      next(vm => vm.$store.dispatch('updateStatus', null))
    }
  }
</script>

<style scoped>

</style>
