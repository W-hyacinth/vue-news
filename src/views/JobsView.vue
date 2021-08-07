<template>
  <main>
    <ListItem :list="jobs" />
  </main>
</template>
<script>
import { mapState } from 'vuex'
import ListItem from '@/components/ListItem'
export default {
  name: 'JobsView',
  computed: {
    ...mapState({
      jobs: state => state.jobs
    })
  },
  created () {
    this.$store.dispatch('FETCH_JOBS')
  },
  components: {
    ListItem
  }
}
</script>
