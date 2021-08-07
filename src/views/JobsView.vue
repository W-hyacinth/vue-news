<template>
  <main>
    Jobs
    <ul class="hacker__list">
      <li class="hacker__item" v-for="(item, index) in jobs" :key="index+1">
        <a :href="item.url" class="hacker__link" target="_blank" rel="noopener noreferrer">
          {{ item.title }}
        </a>
        <span class="hacker__domain">{{item.domain}}</span>
        <div class="hacker__user">
          {{ userInfo(item.points) }}
          <router-link v-if="item.user" :to="`/user/${item.user}`">{{item.user}}</router-link>
          <span class="hacker__time">{{ item.time_ago }}</span>
        </div>
      </li>
    </ul>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'JobsView',
  computed: {
    ...mapState({
      jobs: state => state.jobs
    })
  },
  methods: {
    points (val) {
      return val > 1 ? `points` : `point`
    },
    userInfo (val) {
      return val ? `${val} ${this.points(val)} by` : ''
    }
  },
  created () {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>
