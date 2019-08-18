<template>
  <div class="row col-md-10 col-sm-10 col-lg-10 mx-auto">
    <div class="col-md-8 col-sm-12">
      <new-pizza></new-pizza>
    </div>
    <div class="col-md-4 col-sm-12">
      <h3 class="text-muted mt-5">菜单</h3>
      <table class="table mt-5">
        <thead>
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody v-for="pizza of pizzas" :key="pizza.name">
        <tr>
          <td>{{pizza.name}}</td>
          <td>
            <button @click="deletePizza(pizza)" class="btn btn-outline-danger btn-sm">&times;</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import NewPizza from './NewPizza'

  export default {
    name: 'Admin',
    components: {
      NewPizza
    },
    data () {
      return {
        pizzas: []
      }
    },
    methods: {
      deletePizza (pizza) {
        console.log('delete')
        this.pizzas.splice(this.pizzas.indexOf(pizza), 1)
        console.log(this.pizzas)
        axios.delete('/pizza/' + pizza.id + '/.json')
          .then((res) => {
            console.log('delete' + res)
            this.$router.push('/menu')
          })
      }
    },
    created () {
      axios.get('/pizza.json')
        .then((res) => {
          console.log(res.data)
          const data = res.data
          for (let key in data) {
            let pizza = data[key]
            pizza.id = key
            this.pizzas.push(pizza)
            console.log(this.pizzas)
          }
        }).catch((err) => {
        console.log(err)
      })
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
