import Vue from 'vue'
import Vuex from 'vuex'
import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserData} from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
    user: {}
  },
  mutations: {
    SET_NEWS (state, payload) {
      state.news = payload
    },
    SET_ASKS (state, payload) {
      state.asks = payload
    },
    SET_JOBS (state, payload) {
      state.jobs = payload
    },
    SET_USER (state, payload) {
      state.user = payload
    }
  },
  actions: {
    FETCH_NEWS (context) {
      fetchNewsList()
        .then((response) => {
          context.commit('SET_NEWS', response.data)
        })
        .catch((error) => {
          alert(error)
          console.error(error)
          window.history.back()
        })
    },
    FETCH_ASKS (context) {
      fetchAskList()
        .then((response) => {
          context.commit('SET_ASKS', response.data)
        }).catch((error) => {
          alert(error)
          console.error(error)
          window.history.back()
        })
    },
    FETCH_JOBS (context) {
      fetchJobsList()
        .then((response) => {
          context.commit('SET_JOBS', response.data)
        }).catch((error) => {
          alert(error)
          console.error(error)
          window.history.back()
        })
    },
    FETCH_USER (context, userId) {
      fetchUserData(userId)
        .then((response) => {
          context.commit('SET_USER', response.data)
        }).catch((error) => {
          alert(error)
          console.error(error)
          window.history.back()
        })
    }
  }
})
