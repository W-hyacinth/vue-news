<template>
  <main>
    <ListItem :list="news" listType="order" />
  </main>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import ListItem from '@/components/ListItem'
export default {
  name: 'NewsView',
  methods: {
    ...mapActions({ FETCH_NEWS: 'hackerStore/FETCH_NEWS' })
  },
  computed: {
    ...mapState({
      news: state => state.hackerStore.news
    })
  },
  created () {
    this.FETCH_NEWS()
  },
  components: {
    ListItem
  }
}
</script>
