<template>
  <main>
    Ask
    <ul class="hacker__list">
      <li class="hacker__item" v-for="(item, index) in asks" :key="index+1">
        <a :href="item.url" class="hacker__link">
          {{ item.title }}
        </a>
        <div class="hacker__user">
          {{ userInfo(item.points) }}
          <router-link v-if="item.user" :to="`/${index+1}`">{{item.user}}</router-link>
          <span class="hacker__time">{{ item.time_ago }}</span>
          <router-link v-if="item.comment_count" :to="`/${index+1}`">{{comments(item.comments_count)}}</router-link>
        </div>
      </li>
    </ul>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AskView',
  computed: {
    ...mapState({
      asks: state => state.asks
    })
  },
  methods: {
    points (val) {
      return val > 1 ? `points` : `point`
    },
    comments (val) {
      return val > 1 ? `${val} comments` : `${val} comment`
    },
    userInfo (val) {
      return val ? `${val} ${this.points(val)} by` : ''
    }
  },
  created () {
    this.$store.dispatch('FETCH_ASKS')
  }
}
</script>
