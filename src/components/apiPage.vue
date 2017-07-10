<template>
    <div id="apiPage">
        哈哈哈哈哈哈哈哈
    </div>
</template>

<script>
  import * as types from '@/stores/types'
  import {mapActions} from 'vuex'
  export default {
    name: 'apiPage',
    data () {
      return {}
    },
    created () {
    },
    mounted () {
      this.KG_LIST()
    },
    methods: {
      ...mapActions([types.KG_LIST])
    },
    components: {}
  }
</script>

<style lang="scss">
    #app {
    }
</style>
