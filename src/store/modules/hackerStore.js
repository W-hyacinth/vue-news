import {fetchAskList, fetchItemData, fetchJobsList, fetchNewsList, fetchUserData} from '../../api'

const hackerStore = {
  namespaced: true,
  state: {
    news: [],
    asks: [],
    jobs: [],
    user: {
      name: '',
      created: '',
      karma: '',
      about: ''
    },
    item: []
  },
  getters: {
    fetchedAsk (state) {
      return state.asks
    },
    fetchedItem (state) {
      return state.item
    }
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
      state.user.name = payload.id
      state.user.created = payload.created
      state.user.karma = payload.karma
      state.user.about = payload.about
    },
    SET_ITEM (state, payload) {
      state.item = payload
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
    },
    FETCH_ITEMS (context, itemId) {
      fetchItemData(itemId)
        .then((response) => {
          context.commit('SET_ITEM', response.data)
        }).catch((error) => {
          console.error(error)
          window.history.back()
        })
    }
  }
}

export default hackerStore
