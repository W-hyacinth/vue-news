<template>
  <main>
    News
    <div v-for="(item, index) in news" :key="index+1">
      {{ item }}
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'NewsView',
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  created () {
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>
