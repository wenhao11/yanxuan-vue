<template>
  <div class="homeBuyerShow-wrapper" v-if="topic.bannerInfo">
    <div class="homeBuyerShow-banner">
      <img class="homeBuyerShow-img" v-lazy="topic.bannerInfo.picUrl" alt="">
    </div>
    <div class="homeBuyerShow-desc">{{topic.content}}</div>
    <div class="homeBuyerShow-info">
      <div class="homeBuyerShow-info-left">
        <div class="homeBuyerShow-info-avatar">
          <img class="homeBuyerShow-info-avatar-img" v-lazy="topic.avatar" alt="">
        </div>
        <div class="homeBuyerShow-info-name">{{topic.nickName}}</div>
      </div>
      <div class="homeBuyerShow-info-right">
        <div class="homeBuyerShow-info-goodNum">{{topic.supportNum}}</div>
        <div class="homeBuyerShow-info-good">
          <i class="iconfont icon-dianzan"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeBuyerShow",
    props: {
      topic: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  
  .homeBuyerShow-wrapper
    margin-left .2rem
    margin-bottom .2rem
    clearFix()
    width: 4.6rem;
    box-shadow: 0 0 0.3rem #ddd;
    box-sizing border-box
    .homeBuyerShow-banner
      width: 100%
      .homeBuyerShow-img
        width: 100%
    .homeBuyerShow-desc
      padding: .24rem .21333rem 0;
      color: #333;
      font-size: .32rem;
      line-height: .48rem;
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      lines: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    
    .homeBuyerShow-info
      width: 100%
      margin-top .2rem
      padding 0 .2rem
      .homeBuyerShow-info-left
        float left
        line-height: .8rem;
        .homeBuyerShow-info-avatar
          float left
          width: .64rem;
          height: .64rem;
          .homeBuyerShow-info-avatar-img
            width: 100%
            height: 100%
            border-radius: 50%
        .homeBuyerShow-info-name
          float left
          width: 1.6rem;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: .32rem;
          color: #7f7f7f;
          height: .64rem;
          line-height: .8rem;
          
          
      .homeBuyerShow-info-right
        float right
        line-height: .8rem;
        margin-right: .22667rem;
        box-sizing border-box
        .homeBuyerShow-info-goodNum
          float right
          font-size: .32rem;
          color: #7f7f7f;
          height: .64rem;
          line-height: .88rem;
          margin-right: .32667rem;
        .homeBuyerShow-info-good
          float right
          .iconfont
            font-size: .38rem;
            vertical-align super
            margin-right: .32667rem;







</style>
