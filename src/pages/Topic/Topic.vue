<template>
  <div class="topic-wrapper">
    <div class="header-wrap">
      <div class="header">
        <div class="header-left">
          <div class="goHome" @click="$router.replace('/')">
            <i class="iconfont icon-shouye"></i>
          </div>
        </div>

        <div class="title">
          <span class="main-title">发现</span>
          <span class="subTitle">甄选家</span>
        </div>
        <div class="header-right">
          <div class="goCart" @click="$router.replace('/cart')">
            <i class="iconfont icon-gouwuche"></i>
          </div>
          <div class="goSearch" @click="$router.replace('/search')">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
      </div>
      <div class="header-nav-wrapper">
        <ul class="header-nav">
          <li class="header-nav-item" :class="{active: +$route.params.id === index}" v-for="(tab, index) in tabs" :key="index">
            <RouterLink :to="`/topic/tab/${index}`">
              <span>{{tab.tabName}}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <!--识物界面主体内容-->
    <div class="topic-content">
      <RouterView/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Topic",
    mounted () {
      this.$store.dispatch('getTabs')
    },

    computed: {
      ...mapState({
        tabs: state => state.topic.tabs
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header-wrap
      position fixed
      left 0
      top 0
      z-index 200
      width: 100%
      background-color #fafafa

      // 头部标题
      .header
        width: 100%;
        height: 1rem
        position: fixed !important;
        left: 0;
        top: 0;
        z-index: 100;
        background-color: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        -webkit-box-sizing: border-box;
        margin: auto;
        overflow: hidden;
        padding: 0 .26rem 0 .24rem;

        .header-left
          float: left;
          height: 1rem;
          line-height 1rem
          padding-right: .02rem;
          .goHome
            float: left;

            .iconfont
              display: block;
              font-size .56rem

        .title
          position: absolute;
          width: 3.2rem;
          height: 100%;
          line-height: 1rem;
          text-align: center;
          left: 50%;
          top: 0;
          margin-left: -1.6rem;
          font-size: .28rem;
          color: #7F7F7F;
          z-index: 1;

          .main-title
            font-size: .48rem;
            color: #b4282d;
            font-weight: bold;
            padding: 0 .16rem;
            vertical-align: middle;

          .subTitle
            font-size: .38rem;
            padding: 0 .16rem;
            vertical-align: middle;

        .header-right
          float: right;
          height: 1rem;
          line-height 1rem
          padding-right: .02rem;

          .goCart
            float: right;

            .iconfont
              display: block;
              font-size .56rem

          .goSearch
            float: right;
            margin-right: .3rem;

            .iconfont
              display: block;
              font-size .56rem


      // 头部导航
      .header-nav-wrapper
        width 100%
        height: 1rem;
        line-height 1rem
        margin-top 1rem
        background: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        .header-nav
          display flex
          height: 1rem;
          .header-nav-item
            flex 1
            font-size: .36rem;
            text-align center
            &.active
              color: #B4282D;
              border-bottom: .04rem solid #B4282D;
              span
                color: #B4282D;
</style>
