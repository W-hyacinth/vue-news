import Vue from 'vue'
import Router from 'vue-router'
import bus from '../utils/bus'
import { store } from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/ask',
      name: 'ask',
      component: () => import('@/views/AskView.vue')
    },
    {
      path: '/ask/item',
      name: 'ItemView',
      component: () => import('@/views/ItemView.vue'),
      props: (route) => ({
        query: route.query.id
      })
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('@/views/JobsView.vue')
    },
    {
      path: '/user/:id',
      name: 'UserView',
      component: () => import('@/views/UserView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  bus.$emit('start:spinner')
  switch (to.name) {
    case 'news':
    case 'ask':
    case 'jobs':
      store.dispatch('hackerStore/FETCH_LISTS', to.name)
        .then(() => {
          next()
        }).catch(error => { console.error(error) })
      break
  }
})

export default router
