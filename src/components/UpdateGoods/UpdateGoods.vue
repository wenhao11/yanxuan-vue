<!--
  识物: style: 3
  上新推荐
-->

<template>
	<div class="updateGoods-wrapper" v-if="topic">
    <div class="title">{{topic.title}}</div>
    <div class="decs">{{topic.subTitle}}</div>
    <ul class="updateGoods-goods">
      <li class="updateGood" v-for="(item, index) in topic.itemList" :key="index">
        <img v-if="item" v-lazy="item.itemUrl" alt="" >
      </li>
    </ul>
    <div class="info">
      <div class="seeNum">
        <i class="iconfont icon-kanguo"></i>
        <span>{{readCount}}人看过</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UpdateGoods",
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
  .updateGoods-wrapper
    width: 100%;
    background: #fff;
    margin: .2rem 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: .36rem .3rem;
    .title
      font-size: .48rem;
      color: #333;
      line-height: .62rem;
      margin: -.08rem 0 .16rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    .decs
      width: 100%;
      font-size: .38rem;
      line-height: .4rem;
      padding-top: .18rem;
      color: #7f7f7f;
    .updateGoods-goods
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: .24rem 0;
      .updateGood
        width: 2.23333rem;
        height: 2.23333rem;
        border-radius: .04rem;
        overflow: hidden;
        background: #f4f4f4;
        margin-bottom: .08rem;
        img
          width: 100%
          height: 100%
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
</style>
