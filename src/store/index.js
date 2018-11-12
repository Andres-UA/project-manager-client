import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import projects from './projects'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api'
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    projects
  }
})
