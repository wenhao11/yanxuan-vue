// 入口js文件
import Vue from 'vue'
import App from './App.vue'

// 注册路由器
import router from './router'

// mock数据
import './mock/mockServer'
//注册store
import store from './store'
import Split from './components/Split/Split.vue'
import LoginTemplate from './components/LoginTemplate/LoginTemplate.vue'
import error from '../static/error.jpg'
import loading from '../static/loading.gif'
// 利用插件实现图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  error,
  loading
})

// 注册为全局组件标签
Vue.component('Split', Split);
Vue.component('LoginTemplate', LoginTemplate);


new Vue({
  el: '#app',
  components: {
    App
  },
  template:'<App/>',
  router,
  store
})

