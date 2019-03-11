<template>
  <div>
    <!-- 首页头部  -->
    <header id="header-wrap">
      <div class="header">
        <h1 id="logo"></h1>
        <div class="topSearchIpt" @click="$router.push('/search')">
          <i class="icon-search"></i>
          <span class="placeholder">搜索商品, 共19966款好物</span>
        </div>
        <div class="loginBtn" @click="$router.push('/login')">登录</div>
      </div>
      <div class="header-nav-wrap">
        <div class="header-nav-some-wrap" v-show="!isShowAllCate">
          <div class="header-nav-some" v-if="categories.kingKongModule">
            <a href="javascript:;" class="active">
              <span>推荐</span>
            </a>
            <a href="javascript:;" v-for="(kingKong, index) in categories.kingKongModule.kingKongList" :key="index">
              <span>{{kingKong.text}}</span>
            </a>
          </div>
        </div>

        <div class="allCate" v-show="isShowAllCate">
          <span>全部频道</span>
        </div>

        <div class="toggle-nav" :class="{toggle: isShowAllCate}" @click="toggleShowCate">
          <div class="icon"></div>
        </div>
      </div>

      <div class="header-nav-all" v-show="isShowAllCate">
        <div class="moreCate" v-if="categories.kingKongModule">
          <a href="javascript:;" class="active">
            <span>推荐</span>
          </a>
          <a href="javascript:;" v-for="(kingKong, index) in categories.kingKongModule.kingKongList" :key="index">
            <span>{{kingKong.text}}</span>
          </a>
        </div>
      </div>
    </header>

    <div class="content">
      <!--遮罩层-->
      <div class="mask" v-show="isShowAllCate"></div>
      <!-- 首页轮播图 -->
      <div class="swiper-container-banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
          <div class="swiper-slide">
            <img
              src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0"
              alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!--slogon-->
      <div class="slogon">
        <div class="slogon-all slogon-left">
          <i></i>
          <span>网易自营品牌</span>
        </div>
        <div class="slogon-all slogon-center">
          <i></i>
          <span>30天无忧退货</span>
        </div>
        <div class="slogon-all slogon-right">
          <i></i>
          <span>48小时快速退款</span>
        </div>
      </div>

      <!--商品导航-->
      <ul class="shopNav" v-if="categories.kingKongModule">
        <li v-for="(kingKong, index) in categories.kingKongModule.kingKongList" :key="index">
          <img v-lazy="kingKong.picUrl" alt="">
          <span>{{kingKong.text}}</span>
        </li>
      </ul>

      <!--boss推荐-->
      <div class="bossRecommen">
        <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
      </div>

      <!--购物导航榜单-->
      <ul class="shoppingGuide" v-if="categories.sceneLightShoppingGuideModule">
        <li class="shoppingGuide-item" v-for="(shoppingGuide, index) in categories.sceneLightShoppingGuideModule"
            :key="index">
          <div class="title">{{shoppingGuide.styleItem.title}}</div>
          <div class="desc">{{shoppingGuide.styleItem.desc}}</div>
          <img v-lazy="itemPic.picUrl" alt="" v-for="(itemPic, index) in shoppingGuide.styleItem.itemPicBeanList"
               :key="index">
        </li>
      </ul>

      <!--私人定制-->
      <div class="personalShop">
        <div class="personalShop-title">私人订制</div>
        <div class="personalShop-carousel">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(personalShop, index) in personalShopArr" :key="index">
                <div class="personalShop-item" v-for="(good ,index) in personalShop" :key="index">
                  <img class="primaryPic" v-lazy="good.primaryPicUrl" alt="">
                  <div class="text">
                    <span class="name">{{good.name}}</span>
                    <span class="price">¥{{good.retailPrice}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <Split/>

      <!--限时购-->
      <div class="timeToBuy">
        <div class="timeToBuy-header">
          <span class="timeToBuy-title">限时购</span>
          <div class="countDown">
            <span class="hour">03</span>
            <span class="colon">:</span>
            <span class="minutes">04</span>
            <span class="colon">:</span>
            <span class="seconds">05</span>
          </div>
          <span class="more">更多></span>
        </div>
        <ul class="timeToBuy-goods" v-if="categories.flashSaleModule">
          <li class="timeToBuy-good" v-for="(item, index) in categories.flashSaleModule.itemList" :key="index">
            <img v-lazy="item.picUrl" alt="">
            <span class="activityPrice">¥{{item.activityPrice}}</span>
            <span class="originPrice">¥{{item.originPrice}}</span>
          </li>
        </ul>
      </div>
      <Split/>

      <!--新品首发-->
      <div class="newGoods">
        <div class="newGoods-header">
          <span class="newGoods-title">新品首发</span>
          <span class="more">更多></span>
        </div>
        <ul class="newGoods-goods" v-if="categories.newItemList">
          <li class="newGoods-good" v-for="(newItem, index) in categories.newItemList" v-if="index < 6" :key="index">
            <img class="primaryPic" v-lazy="newItem.primaryPicUrl" alt="">
            <div class="text">
              <span
                class="name">{{newItem.name.length > 14 ? (newItem.name.slice(0, 14) + '...') : newItem.name}}</span>
              <span class="price">¥{{newItem.retailPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
      <Split/>

      <!--人气推荐-->
      <div class="popularGoods">
        <div class="popularGoods-header">
          <span class="popularGoods-title">人气推荐</span>
          <span class="more">更多></span>
        </div>
        <div class="spItem" v-for="(popularItem, index) in categories.popularItemList" v-if="index <= 0" :key="index">
          <div class="spItem-img">
            <img v-lazy="popularItem.primaryPicUrl" alt="">
          </div>
          <div class="spItem-des">
            <div class="name">{{popularItem.name}}</div>
            <div class="desc">{{popularItem.simpleDesc}}</div>
            <div class="price">¥{{popularItem.retailPrice}}</div>
          </div>
        </div>
        <ul class="popularGoods-goods" v-if="categories.popularItemList">
          <li class="popularGoods-good" v-for="(popularItem, index) in categories.popularItemList" v-if="index > 0"
              :key="index">
            <img class="primaryPic" v-lazy="popularItem.primaryPicUrl" alt="">
            <div class="text">
              <span class="name">{{popularItem.name.length > 14 ? (popularItem.name.slice(0, 14) + '...') : popularItem.name}}</span>
              <span class="price">¥{{popularItem.retailPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
      <Split/>

      <!--专题精选-->
      <div class="topicGoods">
        <div class="topicGoods-header">
          <span class="topicGoods-title">专题精选</span>
          <span class="more">更多></span>
        </div>
        <div class="topicGoods-wrapper">
          <ul class="topicGoods-list" v-if="categories.topicList">
            <li class="topicGoods-item" v-for="(topicItem, index) in categories.topicList" :key="index">
              <div class="topicGoods-item-img">
                <img v-lazy="topicItem.itemPicUrl" alt="">
              </div>
              <div class="topicGoods-title">{{topicItem.title}}</div>
              <div class="topicGoods-subtitle">{{topicItem.subtitle}}</div>
            </li>
          </ul>
        </div>
      </div>
      <Split/>

      <!--众筹-->
      <div class="crowd">
        <div class="crowd-header">
          <span class="crowd-title">众筹</span>
          <span class="more">更多></span>
        </div>
        <ul class="crowd-list">
          <li class="crowd-item" v-for="(zhongChouItem, index) in categories.zhongChouList" :key="index">
            <div class="crowd-item-img">
              <img v-lazy="zhongChouItem.picUrl" alt="">
            </div>
            <div class="crowd-item-info">
              <div class="crowd-item-title">{{zhongChouItem.name}}</div>
              <div class="crowd-item-price">{{zhongChouItem.showRetailPrice}}</div>
              <div class="crowd-item-progress">
                <div class="bg" :style="{width: zhongChouItem.progress + '%'}"></div>
              </div>
              <div class="crowd-item-percent">{{zhongChouItem.progress}}%</div>
              <div class="crowd-item-supportNum">{{zhongChouItem.supportNum}}</div>
            </div>
          </li>
        </ul>
      </div>
      <Split/>
      <div v-for="(category, index) in categories.categoryModule" :key="index">
        <Category :category="category" :index="index"/>
        <Split/>
      </div>

      <!--声明-->
      <div class="ftWrap">
        <div class="ftContent">
          <div class="bd">
            <a class="goApp" href="javascript:;">下载APP</a>
            <a class="goPc" href="javascript:;">电脑版</a>
          </div>
          <p class="copyRight">
            <span>网易公司版权所有 © 1997-</span>
            <span>2019</span>
            <br>
            <span>阿扣到此一游</span>
            <span>hiahiahia</span>
            <br>
            <span>(((┏(;￣▽￣)┛装完逼就跑</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import Category from '../../components/Category/Category'

  export default {
    name: "Index",
    components: {
      Category
    },
    data () {
      return {
        // 是否显示全部导航
        isShowAllCate: false,
      }
    },

    methods: {
      toggleShowCate () {
        this.isShowAllCate = !this.isShowAllCate
      },
      _initScroll () {
        new BScroll('.header-nav-some-wrap', {
          scrollX: true,
          bounceTime: 500
        })
        new BScroll('.topicGoods-wrapper', {
          scrollX: true,
          bounceTime: 800
        })
      },
      _initSwiper () {
        new Swiper('.swiper-container-banner', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            clickable: true,
            // 自定义分页器
            renderCustom: function (swiper, current, total) {
              var customPaginationHtml = "";
              for (var i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活
                if (i === (current - 1)) {
                  customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                } else {
                  customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                }
              }
              return customPaginationHtml;
            }
          },

        });
        new Swiper('.personalShop-carousel .swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      },
      // 加工私人订制类目数据
      // handlePersonalShopsData (size) {
      //   const {personalShopArr} = this;
      //   const {personalShop} = this.categories;
      //   const len = personalShop.length;
      //   // 按照指定大小切割数组 每size个切割成一个新数组
      //   for (var i = 0; i < len; i += size) {
      //     var result = personalShop.slice(i, i + size)
      //     personalShopArr.push(result)
      //   }
      // }
    },

    mounted () {
      // 调用actions获取数据
      this.$store.dispatch('getCategory')
    },

    computed: {
      ...mapState({
        categories: state => state.msite.categories
      }),

      // 加工私人订制类目数据
      personalShopArr () {
        const {categories} = this;
        if (categories.personalShop) {
          const personalShop = categories.personalShop
          const len = personalShop.length;
          let size = 3;
          let resultArr = [];
          // 加工让文字显示省略号
          personalShop.forEach(item => {
            if (item.name.length >= 13) {
              item.name = item.name.slice(0, 13) + '...'
            }
          })
          // 按照指定大小切割数组 每size个切割成一个新数组
          for (var i = 0; i < len; i += size) {
            var result = personalShop.slice(i, i + size)
            resultArr.push(result)
          }
          return resultArr;
        }
      },
    },

    watch: {
      categories () {
        // 数据来了
        this.$nextTick(() => {
          this._initScroll()
          this._initSwiper()
        })
      }
      // personalShopArr: function () {
      //   new Swiper('.personalShop-carousel .swiper-container', {
      //     loop: true,
      //     pagination: {
      //       el: '.personalShop-carousel .swiper-pagination',
      //       clickable: true,
      //     },
      //   });
      // }
      // personalShopArr(value) {
      //   this.$nextTick(() => {
      //     new Swiper('.personalShop-carousel .swiper-container', {
      //       loop: true,
      //       pagination: {
      //         el: '.personalShop-carousel .swiper-pagination',
      //         clickable: true,
      //       },
      //     });
      //   })
      // }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #header-wrap
    width: 100%
    background: #fff
    position fixed
    left 0
    top 0
    z-index 200

    // 头部

    .header
      display flex
      padding: .21333rem .4rem
      /*垂直方向居中*/
      align-items: center

      #logo
        width: 1.84rem
        height: .53333rem
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        display: inline-block
        margin-right: .26667rem
        background-size: cover
        background-position: center
        background-repeat no-repeat

      .topSearchIpt
        width: 60%
        justify-content: center
        height: .74667rem
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        text-align center
        display flex
        align-items: center
        flex-grow: 1

        .icon-search
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .37333rem;
          height: .37333rem;
          margin-right: .13333rem;

        .placeholder
          color #666
          font-size: .37333rem

      .loginBtn
        width: .98667rem
        height: .53333rem
        line-height: .53333rem
        text-align: center
        color: #b4282d
        border: 1px solid #b4282d
        border-radius: .10667rem
        margin-left: .21333rem
        font-size: .32rem


    // 头部商品导航

    .header-nav-wrap
      display: flex; /*设为伸缩容器*/
      width: 100%
      height: 0.8rem
      line-height 0.8rem
      // 头部滚动导航

      .header-nav-some-wrap
        flex 5
        display flex
        overflow hidden

        .header-nav-some
          white-space: nowrap;
          display: flex;
          height: 100%

          a
            flex: 1 0 auto;
            margin-left: .26667rem
            padding: 0 .21333rem;
            text-align: center;
            color #333
            font-size: .37333rem

            &.active
              color: #b4282d
              border-bottom()


      // 全部频道

      .allCate
        flex 5
        height: 0.8rem
        line-height: .8rem;
        padding-left: .4rem;
        font-size: .37333rem;

      // 切换按钮

      .toggle-nav
        flex 1
        text-align center
        width: 1.33333rem
        height 100%
        transition transform .3s

        &.toggle
          transform rotate(180deg)

        .icon
          margin-bottom: 0.15rem;
          display: inline-block;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .4rem;
          height: .4rem;

    // 头部全部导航

    .header-nav-all
      background-color #fff

      .moreCate
        font-size: .32rem;
        padding-top: .32rem;
        overflow hidden

        a
          display inline-block
          width: 2rem;
          height: .74667rem;
          line-height: .74667rem;
          text-align: center;
          float: left;
          color #333
          margin-bottom: .53333rem;
          margin-left: .4rem;
          background: #FAFAFA;
          border: 1px solid #CCC;
          border-radius: .05333rem;

          &.active
            border: 1px solid #b4282d;
            color: #b4282d;


  // 内容区
  .content
    position: relative
    left 0
    top 2rem
    padding-bottom 1.30667rem
    // 去除横向滚动条
    overflow-x hidden

    .mask
      position: fixed;
      background: rgba(0, 0, 0, .5);
      z-index 2
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

    .swiper-container-banner
      width: 100%;
      position: relative
      left 0
      top 0

      img
        width: 100%

      .swiper-pagination
        width: 100%
        height: 10px
        /*包裹自定义分页器的div的位置等CSS样式*/

        &.swiper-pagination-custom
          bottom: 10px;
          left: 0;
          width: 100%;
          height: 100px

    .slogon
      width: 100%
      display flex
      padding: .21333rem 0

      .slogon-all
        flex 1
        color: #B4282D
        font-size: .32rem
        text-align center

        i
          vertical-align: middle
          display: inline-block
          background-image: url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: .42667rem;
          height: .42667rem;

    // 导航

    .shopNav
      width 100%
      height: 5.22667rem;
      clearFix()

      li
        width: 1.46667rem
        height: 2.08rem
        float: left
        margin: .13333rem .26667rem 0
        display flex
        flex-direction column

        img
          width: 1.46667rem
          height: 1.46667rem

        span
          text-align center
          color: #333333
          margin-top: .13333rem
          font-size: .32rem
          line-height: .48rem
          white-space: nowrap

    // boss推荐

    .bossRecommen
      width 100%
      background-color: #FFFFFF;
      height: 2.13333rem;

      img
        width: 100%
        height: 100%

    // 购物导航榜单

    .shoppingGuide
      overflow: hidden;
      padding: .13333rem .4rem .4rem .34667rem;
      background: #fff;

      .shoppingGuide-item
        background-image: url(https://yanxuan.nosdn.127.net/252dbf6cdf6597f5a25940544be765c0.png);
        background-size: 100% 100%;
        display: block;
        width: 4.30333rem;
        height: 3.52rem;
        float: left;
        margin: .05333rem 0 0 .05333rem;
        padding: .26667rem 0 0 .26667rem;
        border-radius: .05333rem;

        .title
          color: #333333
          padding-left: .13333rem;
          font-size: .42667rem;

        .desc
          color: #7f7f7f
          padding-left: .13333rem
          font-size: .32rem
          margin-top .13333rem
          margin-bottom .13333rem

        img
          width: 2rem;
          height: 2rem;
          float: left;
          margin-right: .05333rem;

    // 私人定制

    .personalShop
      .personalShop-title
        width: 100%;
        height: 1.33333rem;
        line-height: 1.33333rem;
        font-size: .42667rem;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;

      .personalShop-carousel
        width: 100%

        .swiper-pagination
        .swiper-slide
          position: relative;
          width: 750px;
          height: auto

          .personalShop-item
            padding: 0 !important;
            margin-left: .26667rem;
            width: 2.88rem;
            float: left;

            .primaryPic
              background-color: #f5f5f5;
              margin-bottom: .16rem;
              width: 2.88rem;
              height: 2.88rem;

            .text
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              overflow: visible;
              white-space: normal;
              line-height: .48rem;

              .name
                width: 2.88rem;
                color: #333;
                margin-top: 0;
                margin-bottom: .13333rem;
                font-size: .32rem;
                line-height: .48rem;
                white-space: normal;

              .price
                color: #b4282d

    // 限时购

    .timeToBuy
      width: 100%;
      line-height: 1.33333rem;
      padding: 0 .4rem;
      background: #fff;
      overflow: hidden;
      font-size: .42667rem;

      .timeToBuy-header
        width: 100%
        clearFix()

        .timeToBuy-title
          float left

        .countDown
          float left
          display: inline-block
          vertical-align: middle
          margin: -.02rem 0 0 .16rem

          .hour, .minutes, .seconds
            display: inline-block
            font-size: .32rem
            line-height: .48rem
            width: .48rem
            height: .48rem
            text-align: center
            background-color: #333
            border-radius: .05333rem
            color: #fff
            margin: 0 .13333rem

          .colon
            font-size: .37333rem

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .timeToBuy-goods
        clearFix()

        .timeToBuy-good
          text-align center
          color: #333;
          float: left;
          margin-right: .26667rem;

          img
            display block
            width: 2.88rem
            height: 2.88rem
            background: #F5F5F5;
            border-radius: 4px;

          .activityPrice
            font-size: .37333rem;
            color: #b4282d;

          .originPrice
            font-size: .32rem;
            color: #7F7F7F;
            text-decoration: line-through;

    // 新品首发

    .newGoods
      width: 100%;
      line-height: 1.33333rem;
      background: #fff;
      overflow: hidden;
      padding: 0 .2rem;
      font-size: .42667rem;

      .newGoods-header
        width: 100%
        padding: 0 .2rem;
        clearFix()

        .newGoods-title
          float left

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .newGoods-goods
        clearFix()

        .newGoods-good
          float left
          padding: 0 0 .17333rem !important;
          margin-left: .26667rem;
          width: 2.88rem;

          .primaryPic
            background-color: #f5f5f5;
            margin-bottom: .16rem;
            width: 2.88rem;
            height: 2.88rem;

          .text
            margin-top: 0;
            margin-bottom: .13333rem;
            font-size: .32rem;
            overflow: visible;
            white-space: normal;
            line-height: .48rem;

            .name
              width: 2.88rem;
              color: #333;
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              line-height: .48rem;
              white-space: normal;

            .price
              color: #b4282d

    // 人气推荐

    .popularGoods
      width: 100%;
      line-height: 0.53333rem;
      background: #fff;
      overflow: hidden;
      padding: 0 .2rem;
      font-size: .42667rem;

      .popularGoods-header
        width: 100%
        line-height: 1.33333rem;
        padding: 0 .2rem;
        clearFix()

        .popularGoods-title
          float left

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .spItem
        color: #333;
        width: 9.2rem;
        height: 3.73333rem;
        display: flex;
        background: #FEF0DF;
        border-radius: .05333rem;
        margin: 0 .2rem .26667rem;

        .spItem-img
          width: 3.73333rem;
          height: 3.73333rem;
          background: url(//yanxuan.nosdn.127.net/3235bc71e70f134b5499316fc74337d4.png)
          background-size: 100% 100%;
          margin-right: .4rem;

          img
            width: 100%
            height: auto

        .spItem-des
          height 3.73333rem
          padding 1.23333rem 0 0 .2rem

          .name
            font-size: .37333rem;
            width: 4.66667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

          .desc
            font-size: .32rem;
            color: #7F7F7F;
            width: 4.66667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

          .price
            font-size: .37333rem;
            color: #b4282d;

      .popularGoods-goods
        clearFix()

        .popularGoods-good
          float left
          padding: 0 0 .17333rem !important;
          margin-left: .26667rem;
          width: 2.88rem;

          .primaryPic
            background-color: #f5f5f5;
            margin-bottom: .16rem;
            width: 2.88rem;
            height: 2.88rem;

          .text
            margin-top: 0;
            margin-bottom: .13333rem;
            font-size: .32rem;
            overflow: visible;
            white-space: normal;
            line-height: .48rem;

            .name
              width: 2.88rem;
              color: #333;
              margin-top: 0;
              margin-bottom: .13333rem;
              font-size: .32rem;
              line-height: .48rem;
              white-space: normal;

            .price
              color: #b4282d

    // 专题精选

    .topicGoods
      width: 100%;
      line-height: 0.53333rem;
      background: #fff;
      overflow: hidden;
      padding: 0 .2rem;
      font-size: .42667rem;

      .topicGoods-header
        width: 100%
        line-height: 1.33333rem;
        padding: 0 .2rem;
        clearFix()

        .topicGoods-title
          float left

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .topicGoods-wrapper
        background: #fff;
        padding: 0 .4rem .4rem;
        overflow: hidden;

        .topicGoods-list
          display inline-block
          white-space: nowrap

          &::-webkit-scrollbar {
            display: none
          }
          clearFix()

          .topicGoods-item
            display inline-block
            margin-right: 31.25px;
            width: 6.4rem;
            padding-bottom: .32rem;
            background: #F5F5F5;
            border-radius: .10667rem;
            overflow: hidden;

            .topicGoods-item-img
              display: block;
              width: 6.4rem;
              height: 3.56rem;
              margin-bottom: .21333rem;
              overflow: hidden;

              img
                width: 100%;
                height: auto;
                position: relative;
                left: 50%;
                transform: translateX(-50%);

            .topicGoods-title
              height: .54667rem;
              line-height: .53333rem;
              margin-bottom: .08rem;
              overflow: hidden;
              padding: 0 .26667rem;
              white-space: nowrap;
              -ms-text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              width: 5.46667rem;
              float: left;
              font-size: .37333rem;

            .topicGoods-subtitle
              white-space: nowrap;
              overflow: hidden;
              -ms-text-overflow: ellipsis;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              width: 5.86667rem;
              font-size: .32rem;
              color: #7F7F7F;
              padding: 0 .26667rem;


    // 众筹
    .crowd
      width: 100%;
      line-height: 0.53333rem;
      background: #fff;
      overflow: hidden;
      padding: 0 .2rem;
      font-size: .42667rem;

      .crowd-header
        width: 100%
        line-height: 1.33333rem;
        padding: 0 .2rem;
        clearFix()

        .crowd-title
          float left

        .more
          float right
          display: block;
          font-size: .37333rem;
          color: #333;
          line-height: 1.33333rem;
          margin-right .67333rem

      .crowd-list
        border-top: 1px solid #D8D8D8;
        padding-bottom: .4rem;
        .crowd-item
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          padding: .4rem .2rem 0;
          color: #333;
          .crowd-item-img
            margin-right: .4rem;
            background: #f4f4f4;
            img
              width: 2.8rem;
              height: 2.8rem;

          .crowd-item-info
            position relative
            left 0
            top 0
            .crowd-item-name
              font-size: .37333rem;
              width: 6rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            .crowd-item-price
              margin-top: .1rem;
              font-size: .42667rem;
              color: #b4282d;
            .crowd-item-progress
              width: 4.8rem;
              height: .08rem;
              background: #D8D8D8;
              border-radius: .04rem;
              overflow: hidden;
              position: relative;
              margin-top: .29333rem
              .bg
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                background-color: #FEA438;
            .crowd-item-percent
              position: relative;
              right: -5.2rem;
              top: -.373333rem;
              font-size: .32rem;
              color: #7F7F7F;
            .crowd-item-supportNum
              margin-top: .2rem;
              font-size: .32rem;
              color: #7F7F7F;

    // footer版权
    .ftWrap
      border-top: 1px solid rgba(0,0,0,.15);
      background-color: #414141;
      .ftContent
        text-align: center;
        padding: .22rem .26667rem .37333rem;
        width: 10rem;
        margin-right: auto;
        margin-left: auto;
        .bd
          .goApp
            margin-right: .66667rem;
            padding 0.23333rem 0.53333rem
            width: 2.29333rem;
            font-size: .32rem;
            color: #fff;
            border 1px #fff solid
          .goPc
            width: 2.29333rem;
            padding 0.23333rem 0.53333rem
            font-size: .32rem;
            color: #fff;
            border 1px #fff solid
        .copyRight
          margin-top: .48rem;
          font-size: .32rem;
          line-height: .42667rem;
          color: #999;
</style>
<style>
  /*自定义分页器的样式，这个你自己想要什么样子自己写*/
  .swiper-pagination-customs {
    width: .53333rem;
    height: .05333rem;
    display: inline-block;
    background: #fff;
    opacity: .4;
    border-radius: 0;
    margin: 0 .13333rem 0 0;
  }

  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background: #fff;
    border-radius: 0;
  }

  .swiper-pagination-bullet {
    width: .16rem;
    height: .16rem;
    border-radius: 50%;
    background: #333;
    border: none;
    vertical-align: middle;
  }

  .swiper-pagination-bullet-active {
    border: none;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bullet-active-90b9116b84.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .16rem;
    height: .16rem;
  }
</style>
