<template>
  <div class="card">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">312685889@qq.com</p>
      <router-link to="/phone">电话</router-link>
      <router-link to="/personName">联系人</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Contact'
  }
</script>

<style scoped>

</style>
