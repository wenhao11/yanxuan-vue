import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import msite from './modules/msite'
import cate from './modules/cate'
import topic from './modules/topic'
import search from './modules/search'

Vue.use(Vuex);

// 踩坑: Store S大写
// 报错: __WEBPACK_IMPORTED_MODULE_1_vuex__.a.store is not a constructor
export default new Vuex.Store({
  state,
  getters,
  modules: {
    msite,
    cate,
    topic,
    search
  }
})
