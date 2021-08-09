import Vue from 'vue'
import Vuex from 'vuex'
import hackerStore from './modules/hackerStore'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    hackerStore
  }
})
