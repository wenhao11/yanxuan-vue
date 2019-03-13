<template>
  <div>
    <!-- 推荐 -->
    <div class="tabWrapper" v-if="tabId === 9">
      <div class="tabContent">
        <Split/>
        <ul v-for="(item, index) in recommendData" :key="index">
          <li v-for="(topic, index) in item.topics" :key="index">
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
            <Split/>
          </li>
        </ul>
        <ul v-for="(item, index) in autoRecommendData.result" :key="index + '-label'">
          <li v-for="(topic, index) in item.topics" :key="index">
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
            <UpdateGoods v-if="topic.style === 3" :topic="topic"/>
            <PhotoWall v-if="topic.style === 4" :topic="topic"/>
            <Split/>
          </li>
          <BuyerShow v-if="item.look" :look="item.look"/>
        </ul>
      </div>
    </div>
    <!-- 达人 -->
    <div class="tabWrapper" v-if="tabId === 4">
      <div class="tabContent">
        <Split/>
        <ul>
          <li v-for="(topic, index) in expertTabData.result" :key="index">
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
            <UpdateGoods v-if="topic.style === 3" :topic="topic"/>
            <PhotoWall v-if="topic.style === 4" :topic="topic"/>
            <Split/>
          </li>
        </ul>
      </div>
    </div>
    <!-- 上新 -->
    <div class="tabWrapper" v-if="tabId === 5">
      <div class="tabContent">
        <Split/>
        <ul>
          <li v-for="(topic, index) in newTabData.result" :key="index">
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
            <UpdateGoods v-if="topic.style === 3" :topic="topic"/>
            <PhotoWall v-if="topic.style === 4" :topic="topic"/>
            <Split/>
          </li>
        </ul>
      </div>
    </div>
    <!-- 晒单 -->
    <div class="tabWrapper" v-if="tabId === 7">
      <div class="tabContent">
        <div class="showTop-wrapper">
          <div class="showTop-title">让生活更好的N种方式</div>
          <div class="showTop-slogon">{{showCollection.title}}</div>
          <div class="showTop-carousel-wrapper">
            <ul class="showTop-carousel">
              <li class="showTop-item"
                  v-for="(look, index) in showCollection.lookList"
                  :key="index"
                  :style="{'background-image': 'url(' + look.banner.picUrl + ')'}"></li>
            </ul>
          </div>
          <Split/>
        </div>
        <div class="showContent-wrapper">
          <div class="showContent-title">TA们的严选生活</div>
          <div class="showContent-toggle">
            <div class="showContent-toggle-button" :class="{active: type === 1}" @click="changeType(1)">
              <span class="txt">最新</span>
            </div>
            <div class="showContent-toggle-button" :class="{active: type === 2}" @click="changeType(2)">
              <span class="txt">本月最热</span>
            </div>
            <div class="showContent-toggle-button" :class="{active: type === 3}" @click="changeType(3)">
              <span class="txt">晒单合辑</span>
            </div>
          </div>
          <div class="showContent-show-wrapper">
            <ul v-if="showTabData" class="showContent-show">
              <li v-for="(topic, index) in showTabData.topicList" :key="index" v-if="index%2 === 0" class="showContent-show-item">
                <HomeBuyerShow v-if="!topic.isCollection" :topic="topic"/>
                <BuyerShowCollection v-if="topic.isCollection" :topic="topic" :type="type"/>
              </li>
            </ul>
            <ul v-if="showTabData" class="showContent-show">
              <li v-for="(topic, index) in showTabData.topicList" :key="index"  v-if="index%2 === 1" class="showContent-show-item">
                <HomeBuyerShow v-if="!topic.isCollection" :topic="topic"/>
                <BuyerShowCollection v-if="topic.isCollection" :topic="topic" :type="type"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- HOME -->
    <div class="tabWrapper" v-if="tabId === 6">
      <div class="tabContent">
        <Split/>
        <ul>
          <li v-for="(topic, index) in homeTabData.result" :key="index">
            <HomeShow v-if="topic.style === 0" :topic="topic"/>
            <XuanMei v-if="topic.style === 1" :topic="topic"/>
            <GroupItem v-if="topic.style === 2" :topic="topic"/>
            <UpdateGoods v-if="topic.style === 3" :topic="topic"/>
            <PhotoWall v-if="topic.style === 4" :topic="topic"/>
            <Split/>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'

  import XuanMei from '../../components/XuanMei/XuanMei'
  import GroupItem from '../../components/GroupItem/GroupItem'
  import PhotoWall from '../../components/PhotoWall/PhotoWall'
  import BuyerShow from '../../components/BuyerShow/BuyerShow'
  import UpdateGoods from '../../components/UpdateGoods/UpdateGoods'
  import HomeShow from '../../components/HomeShow/HomeShow'
  import HomeBuyerShow from '../../components/HomeBuyerShow/HomeBuyerShow'
  import BuyerShowCollection from '../../components/BuyerShowCollection/BuyerShowCollection'

  export default {
    name: "Tab",
    components: {
      XuanMei,
      GroupItem,
      PhotoWall,
      BuyerShow,
      UpdateGoods,
      HomeShow,
      HomeBuyerShow,
      BuyerShowCollection
    },
    data () {
      return {
        autoGetDataNum: 1,
        type: 1
      }
    },
    mounted () {
      if (this.tabId === 9) {
        this.$store.dispatch('getRecommendData')
        this.$store.dispatch('getAutoRecommendData', {page: 1, size: 5})
      } else if (this.tabId === 7) {
        this.$store.dispatch('getList', {page: 1, size: 20, type: this.type})
        this.$store.dispatch('getCollection', {id: 26})
        this.$nextTick(() => {
          // 创建BScroll对象
          new BScroll('.showTop-carousel-wrapper', {
            scrollX: true
          })
        })
      } else {
        this.$store.dispatch('getTabData', {page: 1, size: 5, tabId: this.tabId})
      }
      this.$nextTick(() => {
        let oScroll = new BScroll(".tabWrapper", {
          bounce: false,
          probeType: 2,
          //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
          //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
            pullUpLoad: true,
          scrollX: false,
          click: true
        });
        oScroll.on("pullingUp", () => {
          //alert('已到最底部');
          console.log('上拉加载数据');
          // if (!this.autoRecommendData) {
          //   // 如果第一次刷新的数据没拿到
          //   this.$store.dispatch('getAutoRecommendData', {page: 1, size: 5})
          // } else {
          // 上拉加载
          this.autoGetDataNum++;
          console.log(this.autoGetDataNum)
          if (this.tabId === 9) {
            this.$store.dispatch('getAutoRecommendData', {page: this.autoGetDataNum, size: 5})
          } else if (this.tabId !== 7) {
            this.$store.dispatch('getTabData', {page: this.autoGetDataNum, size: 5, tabId: this.tabId})
          } else {
            this.$store.dispatch('getList', {page: this.autoGetDataNum, size: 20, type: this.type})
          }

          // }
          oScroll.finishPullUp();//可以多次执行上拉刷新
        });
        oScroll.refresh();
      })
    },
    methods: {
      changeType (type) {
        this.type = type
      }
    },
    computed: {
      ...mapState({
        recommendData: state => state.topic.recommendData,
        autoRecommendData: state => state.topic.autoRecommendData,
        tabs: state => state.topic.tabs,
        expertTabData: state => state.topic.expertTabData,
        newTabData: state => state.topic.newTabData,
        showTabData: state => state.topic.showTabData,
        showCollection: state => state.topic.showCollection,
        homeTabData: state => state.topic.homeTabData
      }),

      // 得到tabId
      tabId () {
        if (this.$route.params.id === '0') return 9
        else if (this.$route.params.id === '1') return 4
        else if (this.$route.params.id === '2') return 5
        else if (this.$route.params.id === '3') return 7
        else if (this.$route.params.id === '4') return 6
      }
    },
    watch: {
      tabId () {
        if (this.tabId === 9) {
          this.$store.dispatch('getRecommendData')
          this.$store.dispatch('getAutoRecommendData', {page: 1, size: 5})
        } else if (this.tabId === 7) {
          this.$store.dispatch('getList', {page: 1, size: 20, type: this.type})
          this.$store.dispatch('getCollection', {id: 26})
          this.$nextTick(() => {
            // 创建BScroll对象
            new BScroll('.showTop-carousel-wrapper', {
              scrollX: true
            })
          })
        } else {
          this.$store.dispatch('getTabData', {page: 1, size: 5, tabId: this.tabId})
        }
      },
      type () {
        this.$store.dispatch('getList', {page: 1, size: 20, type: this.type})
        this.$nextTick(() => {
          // 创建BScroll对象
          new BScroll('.showTop-carousel-wrapper', {
            scrollX: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tabWrapper
    margin-top 2rem
    height 16rem
    margin-bottom 1.30667rem

    .tabContent
      width 100%

      .showTop-wrapper
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        background-color: #fff;
        padding-top: .37333rem;
        margin-bottom: .26667rem;
        padding-bottom: .53333rem;
        text-align center

        .showTop-title
          margin-bottom: .32rem;
          color: #7f7f7f;
          font-size: .37333rem;
          height: .53333rem;
          line-height: .53333rem;

        .showTop-slogon
          font-size: .42667rem;
          line-height: .64rem;
          color: #333;

        .showTop-carousel-wrapper
          width: 10rem;
          height: 3.2rem;
          margin-top: .42667rem;
          margin-bottom .5rem

          .showTop-carousel
            display inline-block
            white-space nowrap
            margin-left .4rem

            .showTop-item
              display inline-block
              width: 3.2rem;
              height: 3.2rem;
              border-radius: 15px;
              overflow: hidden;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-size: cover;

      .showContent-wrapper
        width: 100%
        text-align center

        .showContent-title
          color: #333;
          font-size: .42667rem;
          margin: 0 .26667rem;
          font-weight: 700;

        .showContent-toggle
          width: 100%
          margin .66667rem 0
          .showContent-toggle-button
            display inline-block
            width: 2.29333rem;
            height: .8rem
            margin: 0 .32rem;
            background-color: #f4f4f4;
            border-radius 10px
            .txt
              font-size: .37333rem;
              vertical-align super
              color: #333
            &.active
              background-color: #ffe4af;
              .txt
                font-size: .37333rem;
                vertical-align super
                color: #b0955f;
                font-weight: 700;


        .showContent-show-wrapper
          display flex
          flex-direction row
          /*多列实现瀑布流*/
          /*column-count: 2*/
          /*display flex*/
          /*flex-direction row*/
          .showContent-show
            display: flex;
            flex-direction: column;
</style>
