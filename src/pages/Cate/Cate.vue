<template>
  <div>
    <div class="header-wrap">
      <div class="search">
        <div class="search-icon"></div>
        <div class="search-info">搜索商品, 共19999款好物</div>
      </div>
    </div>
    <div class="content">
      <div class="cateListNav-wrapper">
        <ul class="cateListNav">
          <li class="cateListItem"
              :class="categoryItem.id === Number($route.query.categoryId) ? 'active' : ''"
              v-for="(categoryItem, index) in cateList.categoryL1List"
              :key="index">
            <router-link :to="`/cate/cateList?categoryId=${categoryItem.id}`">
              <span>{{categoryItem.name}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="cateListContent-wrapper">
        <RouterView/>
      </div>
    </div>
  </div>




</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'


  export default {
    name: "Cate",
    data () {
      return {
        isActive: false
      }
    },
      mounted () {
      this.$store.dispatch('getCateList', () => {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.cateListNav-wrapper', {
              click: true,
              bounceTime: 800
            })
          }
        })
      })
    },
    computed: {
      ...mapState({
        cateList: state => state.cate.cateList
      }),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .header-wrap
    bottom-border-1px(#d9d9d9)
    width: 100%
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 5;
    display flex
    align-items center
    height: 1.17333rem;
    padding: 0 .4rem;
    background-color #fff

    .search
      width 90%
      display flex
      align-items center
      justify-content center
      height: .74667rem;
      font-size: .37333rem;
      background-color: #ededed;
      border-radius: .10667rem

      .search-icon
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: .37333rem;
        height: .37333rem;
        margin-right: .13333rem;

      .search-info
        color #666

  .content
    padding-top 1rem

    .cateListNav-wrapper
      right-border-1px(#d9d9d9)
      float left
      width: 2.16rem
      height 15rem
      .cateListNav
        width: 100%

        .cateListItem
          position relative
          width: 100%;
          height: .66667rem;
          margin-top: .53333rem;
          text-align: center;
          border: none;
          display: block;
          color: #333;
          font-size: .37333rem;
          line-height: .66667rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;

          &:first-child
            margin-top .6rem

          &.active

            span
              color: #ab2b2b
            &::before
              content: ' ';
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              width: .08rem;
              background-color: #ab2b2b;


    .cateListContent-wrapper
      margin-left: 2.16rem;
      padding: .4rem .4rem .28rem;

</style>
