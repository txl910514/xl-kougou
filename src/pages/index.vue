<template>
    <div id="index">
        <div class="icon_set"></div>
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
    methods: {},
    components: {
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/css/sprite/sprite";
    .icon_set {
        @include sprite($icon-set);
    }
</style>
