<!--
  识物: style: 2
  识物组推荐
-->
<template>
	<div class="groupItem-wrapper">
    <div class="groupItem-info">
      <div class="header">
        <div class="header-logo">
          <img class="header-logo-img" v-lazy="topic.avatar" alt="">
        </div>
        <div class="header-author">{{topic.nickname}}</div>
      </div>
      <div class="title">{{topic.title}}</div>
      <div class="decs">{{topic.subTitle}}</div>
      <div class="info">
        <div class="seeNum">
          <i class="iconfont icon-kanguo"></i>
          <span>{{readCount}}人看过</span>
        </div>
      </div>
    </div>
    <div class="banner">
      <img class="banner-img" v-lazy="topic.picUrl" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "GroupItem",
    props: {
      topic: Object
    },
    computed: {
      readCount () {
        // 将拿到的数字转为字符串
        const {readCount} = this.topic;
        let readCountStr = readCount.toString();
        if (readCountStr.length <= 4) {
          return readCountStr
        } else if (readCountStr.length === 5) {
          return (readCount/1000).toString().slice(0,4) + 'k'
        } else {
          return (readCount/10000).toString().split('.')[0] + 'w'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .groupItem-wrapper
    position: relative;
    padding: .32rem .3rem;
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display flex
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    .groupItem-info
      width: 5.66667rem
      .header
        font-size: .38rem;
        color: #333;
        line-height: .36rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        .header-logo
          display inline-block
          width: .56rem;
          height: .56rem;
          overflow: hidden;
          border-radius: 50%;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border: .01rem solid #d9d9d9;
          margin-right: .12rem;
          .header-logo-img
            width: 100%
            height: 100%
        .header-author
          display: inline-block;
          vertical-align: super;
      .title
        font-size: .48rem;
        color: #333;
        line-height: .58rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding-top: .32rem;
      .decs
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .38rem;
        line-height: .4rem;
        padding-top: .18rem;
        color: #7f7f7f;
      .info
        font-size: .38rem;
        color: #999;
        line-height: .32rem;
        margin-top: .38rem;
        .seeNum
          .iconfont
            font-size .38rem
            margin-right .1rem
            vertical-align middle
          span
            display: inline-block;
            vertical-align: middle;
            font-size: .32rem
    .banner
      position relative
      width: 3.73333rem;
      height: 3.73333rem;
      overflow: hidden;
      border-radius: .08rem;
      .banner-img
        /*width: 100%*/
        position absolute
        left 0
        top 0
        display block
        height 100%
</style>
