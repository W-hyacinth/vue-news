<template>
  <main>
    <ListItem :list="asks" listType="order" />
  </main>
</template>
<script>
import {mapState} from 'vuex'
import ListItem from '@/components/ListItem'
import bus from '@/utils/bus'
export default {
  name: 'AskView',
  computed: {
    ...mapState({
      asks: state => state.hackerStore.asks
    })
  },
  created () {
    bus.$emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('hackerStore/FETCH_ASKS')
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
