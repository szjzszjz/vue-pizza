<template>
  <div>
    <h3 class="text-muted mt-5">添加新的pizza</h3>
    <div>
      <div class="from-group row mt-5">
        <label class="col-sm-2">品种</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="newPizza.name">
        </div>
      </div>
      <div class="from-group row mt-3 ">
        <label class="col-sm-2">描述</label>
        <div class="col-sm-10">
          <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
        </div>
      </div>
      <p class="mt-3"><strong>选项1</strong></p>
      <div class="from-group row mt-3">
        <label class="col-sm-2">尺寸</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="newPizza.size1">
        </div>
      </div>
      <div class="from-group row mt-3">
        <label class="col-sm-2">价格</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="newPizza.price1">
        </div>
      </div>
      <p class="mt-3"><strong>选项2</strong></p>
      <div class="from-group row mt-3">
        <label class="col-sm-2">尺寸</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="newPizza.size2">
        </div>
      </div>
      <div class="from-group row mt-3">
        <label class="col-sm-2">价格</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="newPizza.price2">
        </div>
      </div>
      <div class="form-group row">
        <button @click="addBtnClick" class="btn btn-success btn-block mt-3">添加</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'NewPizza',
    data () {
      return {
        newPizza: {}
      }
    },
    methods: {
      addBtnClick () {
        this.newPizza = {
          name: this.newPizza.name,
          description: this.newPizza.description,
          options: [{
            size: this.newPizza.size1,
            price: this.newPizza.price1
          }, {
            size: this.newPizza.size2,
            price: this.newPizza.price2
          }]
        }

        axios.post('/pizza.json', this.newPizza)
          .then((res) => {
            console.log(res)
            this.$router.push('/menu')
          }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
