<template>
  <main>
    <ListItem :list="news" listType="order" />
  </main>
</template>
<script>
import { mapState } from 'vuex'
import ListItem from '@/components/ListItem'
export default {
  name: 'NewsView',
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  methods: {
    points (val) {
      return val > 1 ? `points` : `point`
    },
    pointsInfo (val) {
      return val ? `${val} ${this.points(val)} by` : ''
    }
  },
  created () {
    this.$store.dispatch('FETCH_NEWS')
  },
  components: {
    ListItem
  }
}
</script>
