<template>
  <div class="row mt-3">

    <!--    菜单-->
    <div class="col-sm-12 col-md-8">
      <table class="table">
        <thead class="thead-default">
        <tr>
          <th>描述</th>
          <th>尺寸</th>
          <th>价格</th>
          <th>加入购物车</th>
        </tr>
        </thead>
        <tbody v-for="(value, key) of menuItems" :key="key">
        <tr>
          <td><strong>{{value.name}}</strong></td>
        </tr>
        <tr v-for="(option, index) of value.options" :key="index">
          <td>{{value.description}}</td>
          <td>{{option.size}}rem</td>
          <td>{{option.price}}rmb</td>
          <td>
            <button class="btn btn-sm btn-outline-success"
                    @click="addShoppingCart(value , option)">+
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!--    购物车-->
    <div class="col-sm-12 col-md-4">
      <table class="table">
        <thead class="thead-default">
        <tr>
          <th>数量</th>
          <th>品种</th>
          <th>价格</th>
        </tr>
        </thead>
        <tbody v-for="(item, index) of shoppingCarts" :key="index"
               v-if="shoppingCarts.length>0">
        <tr>
          <td>
            <button class="btn btn-sm" @click="decEvent(item)">-</button>
            <span>{{item.quantity}}</span>
            <button class="btn btn-sm" @click="incEvent(item)">+</button>
          </td>
          <td>{{item.name}} + {{item.size}}</td>
          <td>{{item.price * item.quantity}} RMB</td>
        </tr>
        </tbody>
      </table>
      <p>总价：<strong>{{totalPrice}}</strong> RMB</p>
      <button :class="[isActive ? successClass: failClass]" @click="submitEvent">提交</button>
    </div>
  </div>
</template>

<script>
  import Delivery from './about/Delivery'

  export default {
    name: 'Menu',
    components: {Delivery},
    methods: {
      // 添加购物车
      addShoppingCart (value, option) {
        this.isActive = true
        const shoppingCartItem = {
          name: value.name,
          size: option.size,
          price: option.price,
          quantity: 1
        }

        // 根据名字和尺寸进行筛选
        const products = this.shoppingCarts.filter((item) => {
          return value.name === item.name && item.price === option.price
        })
        console.log(products)
        // 如果存在就对原来的数据添加数量
        if (products !== null && products.length > 0) {
          const product = products[0]
          product.quantity += 1
        } else {
          // 如果购物车中不存在对用的品种 就添加
          this.shoppingCarts.push(shoppingCartItem)
        }
      },

      // 增加品种数量
      incEvent (item) {
        item.quantity++
      },
      // 减少品种数量
      decEvent (item) {
        item.quantity--
        if (item.quantity < 1) {
          this.shoppingCarts.splice(this.shoppingCarts.indexOf(item), 1)
        }
        // 改变提交按钮的颜色
        if (this.shoppingCarts.length < 1) {
            this.isActive = false
        }
      },
      // 提交购物车
      submitEvent () {
        if (this.shoppingCarts.length <= 0) {
          alert(this.tip)
        }
      }
    },
    computed: {
      totalPrice () {
        var total = 0
        for (let index in this.shoppingCarts) {
          let item = this.shoppingCarts[index]
          total += item.quantity * item.price
        }
        return total
      }
    },
    data () {
      return {
        tip: '购物车还没有任何产品！',
        shoppingCarts: [],
        successClass: 'btn btn-success btn-block',
        failClass: 'btn btn-fail btn-block',
        isActive: false,
        menuItems: {
          1: {
            'name': '芝士pizza',
            'description': '之时杀手，浓浓的芝士丝，食欲瞬间爆棚',
            'options': [{
              'size': 9,
              'price': 39
            }, {
              'size': 12,
              'price': 49
            }]
          },
          2: {
            'name': '榴莲pizza',
            'description': '臭死别人，独享香甜的味蕾',
            'options': [{
              'size': 9,
              'price': 39
            }, {
              'size': 12,
              'price': 49
            }]
          },
          3: {
            'name': '洋葱pizza',
            'description': '口气杀手，欲罢不能',
            'options': [{
              'size': 9,
              'price': 39
            }, {
              'size': 12,
              'price': 49
            }]
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
