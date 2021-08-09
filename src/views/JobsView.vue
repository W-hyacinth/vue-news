<template>
  <main>
    <ListItem :list="jobs" />
  </main>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import ListItem from '@/components/ListItem'
export default {
  name: 'JobsView',
  methods: {
    ...mapActions({ FETCH_JOBS: 'hackerStore/FETCH_JOBS' })
  },
  computed: {
    ...mapState({
      jobs: state => state.hackerStore.jobs
    })
  },
  created () {
    this.FETCH_JOBS()
  },
  components: {
    ListItem
  }
}
</script>
