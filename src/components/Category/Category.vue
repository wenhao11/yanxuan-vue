<template>
  <div>
    <div class="banner">
      <img class="banner-img" :src="category.titlePicUrl" alt="">
    </div>
    <div class="goodsGrid-wrapper" :class="'goodsGrid-wrapper-' + String.fromCharCode(97 + index)">
      <ul class="goodsGrid">
        <li class="good" v-for="(item, index) in category.itemList" :key="index">
          <div class="good-img">
            <img :src="item.primaryPicUrl" alt="">
          </div>
          <div class="good-info-name">
            <span>{{item.name}}</span>
          </div>
          <div class="good-info-price">
            <span>¥{{item.retailPrice}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  
  export default {
    name: "Category",
    props: {
      category: Object,
      index: Number
    },
    mounted () {
      new BScroll(`.goodsGrid-wrapper-${String.fromCharCode(97 + this.index)}`, {
        scrollX: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner
    width: 100%
    height: 4.93333rem;
    margin-bottom: .66667rem;
    
    .banner-img
      display: block;
      width: 100%
  
  .goodsGrid-wrapper
    height: auto;
    padding: 0 .4rem .4rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    
    .goodsGrid
      display inline-block
      white-space nowrap
      
      .good
        display inline-block
        padding: 0 !important;
        margin-right: .26667rem;
        width: 2.66667rem;
        vertical-align top
        
        .good-img
          background-color: #f4f4f4;
          border-radius: .05333rem;
          margin-bottom: .16rem;
          
          img
            display inline-block
            background-color: #f4f4f4;
            width: 100%;
            height: 100%;
          
        .good-info-name
          padding-left: 0;
          font-size: .32rem;
          margin-top: 0;
          line-height: .48rem;
          // 第二行出现省略号
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          white-space: normal;
          
          -webkit-box-orient: vertical;
        .good-info-price
          margin-bottom: .05333rem;
          padding-left: 0;
          font-size: .32rem;
          line-height: .48rem;
          color: #b4282d;
</style>
