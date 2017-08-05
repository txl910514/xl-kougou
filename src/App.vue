<template>
  <div id="app">
    <k-header></k-header>
    <div id="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import kHeader from './components/header/head.vue'
  export default {
    name: 'app',
    components: {
      kHeader
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
@import "./assets/css/index";
</style>
