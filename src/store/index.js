import Vue from 'vue'
import Vuex from 'vuex'

import { gamesModule } from '@/store/modules/games'
import { opinionsModule } from '@/store/modules/opinions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    games: gamesModule,
    opinions: opinionsModule
  }
})
