<template>
  <div id="app">
<!--    头部导航条-->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './components/Header'

  export default {
    name: 'App',
    components: {
      AppHeader
    }
  }
</script>

<style>

</style>
