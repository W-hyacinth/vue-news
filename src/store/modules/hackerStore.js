import {fetchItemData, fetchUserData, fetchListData} from '../../api'

const hackerStore = {
  namespaced: true,
  state: {
    user: {
      name: '',
      created: '',
      karma: '',
      about: ''
    },
    item: [],
    list: []
  },
  getters: {
    fetchedItem (state) {
      return state.item
    }
  },
  mutations: {
    SET_USER (state, payload) {
      state.user.name = payload.id
      state.user.created = payload.created
      state.user.karma = payload.karma
      state.user.about = payload.about
    },
    SET_ITEM (state, payload) {
      state.item = payload
    },
    SET_LIST (state, list) {
      state.list = list
    }
  },
  actions: {
    async FETCH_USER ({commit}, userId) {
      const response = await fetchUserData(userId)
      commit('SET_USER', response.data)
      return response
    },
    async FETCH_ITEMS ({commit}, itemId) {
      const response = await fetchItemData(itemId)
      commit('SET_ITEM', response.data)
      return response
    },
    async FETCH_LISTS ({commit}, pageName) {
      const response = await fetchListData(pageName)
      commit('SET_LIST', response.data)
      return response
    }
  }
}

export default hackerStore
