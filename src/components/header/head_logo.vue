<template>
    <div id="logo_container">
        <div class="head-logo">
            <a href="#">
                <img src="http://m.kugou.com/v3/static/images/index/logo.png">
            </a>
        </div>
        <div class="head-download">
            <a href="http://pan.baidu.com/s/1eSMb7e6">下载酷狗</a>
        </div>
        <div class="head-search" @click="searchClick">
            <img src="http://m.kugou.com/v3/static/images/index/search.png">
        </div>
    </div>
</template>

<script>
  export default {
    name: 'headLogo',
    data () {
      return {}
    },
    created () {
    },
    mounted () {
    },
    methods: {
      searchClick () {
        this.$router.push({path: '/search'})
      }
    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">

#logo_container {
    background: #2ca2f9;
    height: 0.52rem;
    padding: 0.1rem;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1050;
    a {
        text-decoration: none !important;
    }
    img {
        border: 0 none;
        width: auto\9;
        height: auto;
        max-width: 100%;
        vertical-align: top;
        -ms-interpolation-mode: bicubic;
    }
    .head-logo {
        float: left;
        height: 100%;
        img {
            height: 100%;
        }
    }
    .head-download {
        float: left;
        height: 0.31rem;
        width: 0.85rem;
        margin-left: 0.13rem;
        line-height: 0.31rem;
        a {
            display: block;
            height: 100%;
            width: 100%;
            border: 1px solid #fff;
            text-align: center;
            color: #fff;
            border-radius: 5px;
            font-size: 0.14rem;
        }
    }
    .head-search {
        float: right;
        height: 0.31rem;
        padding: 0.03rem 0;
        img {
            height: 100%;
        }
    }
}
</style>
