<template>
  <main>
    Jobs
    <div v-for="(item, index) in jobs" :key="index+1">
      {{ item }}
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'JobsView',
  computed: {
    ...mapState({
      jobs: state => state.jobs
    })
  },
  created () {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>
