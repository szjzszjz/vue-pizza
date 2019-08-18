<template>
  <div class="mt-3">
    <div class="col-sm-12">
      <table class="table">
        <thead class="thead-default">
        <!--        <tr>-->
        <!--          <th>名称</th>-->
        <!--        </tr>-->
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
            <button class="btn btn-sm btn-outline-success">+</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Delivery from './about/Delivery'

  export default {
    name: 'Menu',
    components: {Delivery},
    data () {
      return {
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
