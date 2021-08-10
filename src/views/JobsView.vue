<template>
  <main>
    <ListItem :list="jobs" />
  </main>
</template>
<script>
import {mapState} from 'vuex'
import ListItem from '@/components/ListItem'
import bus from '@/utils/bus'
export default {
  name: 'JobsView',
  computed: {
    ...mapState({
      jobs: state => state.hackerStore.jobs
    })
  },
  created () {
    bus.$emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('hackerStore/FETCH_JOBS')
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
