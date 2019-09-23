import Vue from 'vue'
import Vuex from 'vuex'

import { getItem, setItem } from '@/utils/storage'
// 使用vuex存贮token
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('user')
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      setItem('user', state.user)
    }
  },
  actions: {

  }
})
