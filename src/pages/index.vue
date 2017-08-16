<template>
    <div id="index" class="mtn">
        <div class="icon_set"></div>
        <div @click="clickFunc()" class="dian">
            点他
        </div>
    </div>
</template>

<script>
  export default {
    name: 'MdvApp',
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {
      clickFunc () {
        require.ensure([], () => {
          require(`../assets/css/main.scss`)
        })
      }
    },
    components: {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/css/sprite/sprite";
    .icon_set {
        @include sprite($icon-set);
    }
    .dian {
        margin-top: 60px;
    }
</style>
