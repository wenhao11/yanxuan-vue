<!--
  识物: style: 4
  照片墙效果
-->
<template>
  <div class="photoWall-wrapper">
    <div class="photoWall-title">{{topic.title}}</div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(look, index) in topic.lookList" :key="index">
          <img v-lazy="look.picUrl" alt="">
        </div>
      </div>
    </div>
    <div class="info">
      <div class="seeNum">
        <i class="iconfont icon-kanguo"></i>
        <span>{{readCount}}人看过</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "PhotoWall",
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
    },
    mounted () {
      new Swiper('.swiper-container',{
        // autoplay:true,
        effect : 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        coverflowEffect: {
          //rotate：slide做3d旋转时Y轴的旋转角度。默认50。
          rotate: 0,
          //stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          // stretch: 0,
          // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          // depth: 100,
          // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          modifier: 3,
          // slideShadows：开启slide阴影。默认 true。
          slideShadows : false
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .photoWall-title
    font-size: .48rem;
    color: #333;
    line-height: .52rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: -.08rem;
    padding: .36rem .3rem;
  .photoWall-wrapper
    width: 100%;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .swiper-container
      position: relative;
      width: 100%;
      height: 100%;
      .swiper-wrapper
        .swiper-slide
          width: 3.72rem;
          height: 3.32rem;
          overflow: hidden;
          border-radius: .08rem;
          background: #fff;
          &.swiper-slide-active
            img
              opacity 1
          img
            width: 100%
            height: 100%
            opacity:0.5
            
  .info
   font-size: .38rem;
   color: #999;
   line-height: .32rem;
   margin-top: .38rem;
   padding: .36rem .3rem
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
