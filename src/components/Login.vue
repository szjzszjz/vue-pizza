<template>
  <div class="row mt-3" style="background-color: yellow;">
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
            <button type="submit" class="btn btn-block btn-success mt-5 col-md-3 mx-auto">注册</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
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
       axios.get('/users.json')
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
             this.$router.push('/home')
           } else {
             // 登录失败
             alert('您的账号或者密码错误！')
           }
           console.log(result)
         }).catch((err) => {
         console.log(err)
       })
      }
    }
  }
</script>

<style scoped>

</style>
