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
      name: 'NewsView',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/ask',
      name: 'AskView',
      component: () => import('@/views/AskView.vue')
    },
    {
      path: '/jobs',
      name: 'JobsView',
      component: () => import('@/views/JobsView.vue')
    }
  ]
})
