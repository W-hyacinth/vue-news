<template>
  <main>
    <ListItem :list="news" listType="order" />
  </main>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import ListItem from '@/components/ListItem'
import bus from '@/utils/bus'
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
    bus.$emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('hackerStore/FETCH_NEWS')
        .then(() => {
          bus.$emit('end:spinner')
        }).catch(error => { console.error(error) })
    }, 3000)
  },
  components: {
    ListItem
  }
}
</script>
