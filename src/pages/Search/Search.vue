<!-- 搜索界面 -->

<template>
  <div class="search-wrapper">
    <div class="search-top">
      <div class="search-main" v-if="initSearch.dearch.defaultKeyword">
        <input type="text" :placeholder="initSearch.defaultKeywoed.keyword"/>
      </div>
      <span class="cancel" @click="$router.replace('/')"></span>
    </div>
    <div class="search-content">
      <div class="title">热门搜索</div>
      <ul class="search-main">
        <li class="search-item"
            :class="{active:hotItem.highlight === 1}"
            v-for="(hotItem, index) in initSearch.hotKeywordVOList"
            :key="index">
          {{hotItem.keyword}}
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Search",
    mounted () {
      // 获取初始化数据
      this.$store.dispatch('getInitSearch')
    },
    computed: {
      ...mapState({
        initSearch: state => state.search.initSearch
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search-wrapper
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    /*background-color #f4f4f4*/
    background-color #fff
    padding 0 .4rem
    .search-top
      width: 100%
      margin-top .3rem
      .search-main
        width: 100%
        line-height: .53333rem;
        font-size: .37333rem;
        height: .74667rem;
        border-radius: 4px;
        &::before
          position absolute
          left .7rem
          top .5rem
          content: '';
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
        input
          display inline-block
          width 80%
          height: 100%
          background-color #f4f4f4
          padding-left .8rem
          outline none
      .cancel
        position absolute
        right .3rem
        top .5rem
        font-size: .37333rem;
    .search-content
      width: 100%
      .title
        height: .8rem;
        font-size: .37333rem;
        color: #999;
        margin-top .5rem
      .search-main
        clearFix()
        .search-item
          float: left;
          padding: 0 .2rem;
          margin-right: .42667rem;
          margin-bottom: .42667rem;
          line-height: .61333rem;
          border: 1px solid #999;
          border-radius: 4px;
          color: #333;
          font-size: .37333rem;
          &.active
            border-color: #b4282d;
            color: #b4282d;
</style>
