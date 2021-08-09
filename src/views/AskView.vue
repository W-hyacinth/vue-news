<template>
  <main>
    <ListItem :list="asks" listType="order" />
  </main>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import ListItem from '@/components/ListItem'
export default {
  name: 'AskView',
  methods: {
    ...mapActions({ FETCH_ASKS: 'hackerStore/FETCH_ASKS' })
  },
  computed: {
    ...mapState({
      asks: state => state.hackerStore.asks
    })
  },
  created () {
    this.FETCH_ASKS()
  },
  components: {
    ListItem
  }
}
</script>
