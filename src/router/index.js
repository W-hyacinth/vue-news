import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
