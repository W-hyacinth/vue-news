<template>
  <main>
    Ask
    <ul class="hacker__list">
      <li class="hacker__item" v-for="(item, index) in fetchedAsk" :key="index+1">
        <router-link :to="`/ask/item?id=${item.id}`" class="hacker__link">
          {{ item.title }}
        </router-link>
        <div class="hacker__user">
          {{ userInfo(item.points) }}
          <router-link v-if="item.user" :to="`/user/${item.user}`">{{item.user}}</router-link>
          <span class="hacker__time">{{ item.time_ago }}</span>
          <router-link v-if="item.comment_count" :to="`/ask/item?id=${item.id}`">{{comments(item.comments_count)}}</router-link>
        </div>
      </li>
    </ul>
  </main>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AskView',
  computed: {
    ...mapGetters(['fetchedAsk'])
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
