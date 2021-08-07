<template>
  <main>
    <ListItem :list="asks" listType="order" />
  </main>
</template>
<script>
import {mapState} from 'vuex'
import ListItem from '@/components/ListItem'
export default {
  name: 'AskView',
  computed: {
    ...mapState({
      asks: state => state.asks
    })
  },
  created () {
    this.$store.dispatch('FETCH_ASKS')
  },
  components: {
    ListItem
  }
}
</script>
