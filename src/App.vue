<template>
  <div id="app">
    <!--    头部导航条-->
    <app-header></app-header>
    <router-view></router-view>
    <div>
      <div class="row col-10 mx-auto mt-3">
        <div class="col-sm-12 col-md-4  mb-3">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4  mb-3">
          <router-view name="history"></router-view>
        </div>
        <div class="col-sm-12 col-md-4 mb-3">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4 ">
          <router-view name="contact"></router-view>
        </div>
      </div>
    </div>
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
