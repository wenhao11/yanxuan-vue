<!-- 买家秀集合 -->
<template>
  <div class="buyerShowCollection-wrapper" v-if="topic.collection">
    <div class="buyerShowCollection-banner">
      <img class="buyerShowCollection-img" v-lazy="topic.collection.picUrl" alt="">
    </div>
    <div class="buyerShowCollection-info" :class="{active: type === 3}">
      <div class="buyerShowCollection-info-title">{{topic.collection.title}}</div>
      <div class="buyerShowCollection-info-desc">{{topic.collection.subtitle}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BuyerShowCollection",
    props: {
      topic: Object,
      type: Number
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  
  .buyerShowCollection-wrapper
    margin-left .2rem
    margin-bottom .2rem
    clearFix()
    width: 4.6rem;
    box-shadow: 0 0 0.3rem #ddd;
    box-sizing border-box
    .buyerShowCollection-banner
      width: 100%
      .buyerShowCollection-img
        display block
        width: 100%
    .buyerShowCollection-info
      width: 100%
      background-color: #ffe1b2;
      text-align center
      &.active
        background-color: #f4f4f4;
      .buyerShowCollection-info-title
        color: #333;
        overflow: hidden;
        padding-top .24rem
        text-overflow: ellipsis;
        font-size: .42667rem;
        font-weight: 700;
        line-height: .64rem;
        white-space: nowrap;
        lines: 1;
        -webkit-line-clamp: 1;
      .buyerShowCollection-info-desc
        margin-top: .24rem;
        padding 0 .24rem .24rem .24rem
        font-size: .32rem;
        line-height: .48rem;
        lines: 2;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        color: #333;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
      
</style>

