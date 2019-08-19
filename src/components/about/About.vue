<template>
  <div class="row mt-3 mx-auto col-10" >
    <dvi class="col-4" >
      <!--      导航-->
      <div class="list-group mb-5">
        <router-link tag="li" class="nav-link" :to="{name:'History'}">
          <a class="list-group-item list-group-item-action">历史订单</a>
        </router-link>
        <router-link tag="li" class="nav-link" to="/contact">
          <a class="list-group-item list-group-item-action">联系我们</a>
        </router-link>
        <router-link tag="li" class="nav-link" to="/orderingGuide">
          <a class="list-group-item list-group-item-action">点餐文档</a>
        </router-link>
        <router-link tag="li" class="nav-link" to="/delivery">
          <a class="list-group-item list-group-item-action">快递信息</a>
        </router-link>
      </div>
    </dvi>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>

</style>
