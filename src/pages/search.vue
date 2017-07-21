<template>
    <div id="search">
        <div class="search-panel">
            <div class="search-input">
                <span class="search-icon"></span>
                <input type="text" v-model="keyword"  placeholder="歌手/歌名/拼音" >
            </div>
            <a href="javascript:;"  class="search-btn" @click="search">搜索</a>
        </div>
        <div class="search-list">
            <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <mt-cell v-for="item in hosListData" :key="item.id" :title="item.name" @click.native="replaceInput(item.id)"></mt-cell>
            </mt-loadmore>
        </div>
    </div>
</template>

<script>
  import * as types from '@/stores/types'
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'search',
    data () {
      return {
        keyword: 'hhh',
        allLoaded: false,
        page: 1,
        totalPage: 0,
        list: []
      }
    },
    computed: {
      hosListData () {
        console.log(this.list.length)
        if (this.list.length) {
          this.list = this.list.concat(this.CommonStore.hosList.list)
        } else {
          this.list = this.CommonStore.hosList.list || []
        }
        return this.list
      },
      ...mapState(['CommonStore'])
    },
    created () {
    },
    mounted () {
      this.HOS_LIST({
        page: this.page,
        num: 15
      }).then((res) => {
        const data = res.data.data
        this.page = parseInt(data.page) + 1
        this.totalPage = data.totalPage
      })
    },
    methods: {
      search () {
        console.log(this.keyword)
      },
      getHosList () {
        // console.log(this.CommonStore.hosList)
      },
      replaceInput (id) {
        this.list.forEach((val) => {
          if (val.id === id) {
            this.keyword = val.name
          }
        })
      },
      loadBottom () {
        var self = this
        if (this.page <= this.totalPage) {
          this.HOS_LIST({
            page: this.page,
            num: 15
          }).then((res) => {
            const data = res.data.data
            this.page = parseInt(data.page) + 1
            this.totalPage = data.totalPage
            if (this.page > this.totalPage) {
              this.allLoaded = true
            }
            self.$refs.loadmore.onBottomLoaded()
          })
        }
      },
      ...mapActions([types.HOS_LIST])
    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    #search {
     .search-panel {
         padding: 0.1rem;
         background-color: #fbfbfb;
         height: 0.55rem;
         .search-input {
             width: 80%;
             height: 100%;
             display: block;
             border: 1px solid #e5e5e5;
             border-radius: 0.07rem;
             float: left;
             background-color: #fff;
             .search-icon {
                 display: block;
                 float: left;
                 width: 10%;
                 height: 100%;
                 background: url(http://m.kugou.com/v3/static/images/index/search_icon.png) no-repeat center;
                 background-size: auto 100%;
             }
             input {
                 width: 90%;
                 height: 100%;
                 float: left;
                 padding: 0 0.1rem 0 0;
                 border: none;
                 outline: none;
                 background-color: transparent;
             }
         }
         .search-btn {
             display: block;
             height: 100%;
             width: 18%;
             background-color: #2ba2fa;
             float: right;
             border-radius: 0.07rem;
             color: #fff;
             font-size: 0.16rem;
             text-align: center;
             line-height: 0.35rem;
             border: none;
             outline: none;
         }
     }
     .search-list {
         .mint-loadmore-text {
            font-size: 0.14rem;
         }
     }
    }
</style>
