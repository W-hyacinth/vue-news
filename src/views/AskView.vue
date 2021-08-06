<template>
  <main>
    Ask
    <div v-for="(item, index) in asks" :key="index+1">
      {{ item }}
    </div>
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
  created () {
    this.$store.dispatch('FETCH_ASKS')
  }
}
</script>
