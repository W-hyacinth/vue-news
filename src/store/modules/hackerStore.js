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
    FETCH_USER (context, userId) {
      return fetchUserData(userId)
        .then((response) => {
          context.commit('SET_USER', response.data)
        }).catch((error) => {
          alert(error)
          console.error(error)
          window.history.back()
        })
    },
    FETCH_ITEMS (context, itemId) {
      return fetchItemData(itemId)
        .then((response) => {
          context.commit('SET_ITEM', response.data)
        }).catch((error) => {
          console.error(error)
          window.history.back()
        })
    },
    FETCH_LISTS ({ commit }, pageName) {
      return fetchListData(pageName)
        .then(response => {
          commit('SET_LIST', response.data)
          return response
        })
        .catch((error) => {
          console.error(error)
          // window.history.back()
        })
    }
  }
}

export default hackerStore
