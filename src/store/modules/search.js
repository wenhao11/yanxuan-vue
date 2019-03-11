// 管理search状态
import {reqInitSearch} from '../../api'
import {RECRIVE_INITSEARCH} from '../mutation-types'

const state = {
  initSearch: {}
}

const mutations = {
  [RECRIVE_INITSEARCH] (state,{initSearch}) {
    // mutation直接操作状态
    state.initSearch = initSearch
  }
}

const actions = {
  // 获取初始化search数据
  async getInitSearch ({commit}) {
    // 发送ajax
    const result = await reqInitSearch();
    const initSearch = result.data
    // 根据返回的数据调用mutations更改数据
    if (result.code === '200') {
      commit(RECRIVE_INITSEARCH, {initSearch})
    }
    // typeof cb === 'function' && cb()
  }
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
