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
            <div class="form-group text-center mt-3">
              <label for="confirm-password">确认密码</label>
              <input type="password" class="form-control col-md-4 mx-auto" v-model="confirmPassword">
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
    name: 'Register',
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      onSubmit () {
       if (this.password === this.confirmPassword) {
         const userData = {
           email: this.email,
           password: this.password,
           confirmPassword: this.confirmPassword
         }
           axios.post('/users.json', userData)
             .then((res) => {
               console.log(res)
               this.$router.push('/login')
             })
       } else {
         alert('两次密码不一致！')
       }
      }
    }
  }
</script>

<style scoped>

</style>
