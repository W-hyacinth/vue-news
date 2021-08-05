<template>
  <main>
    Jobs
    <div v-for="(item, index) in jobs" :key="index+1">
      {{ item }}
    </div>
  </main>
</template>
<script>
import { fetchJobsList } from '../api'
export default {
  name: 'JobsView',
  data () {
    return {
      jobs: []
    }
  },
  created () {
    fetchJobsList()
      .then((response) => {
        this.jobs = response.data
      }).catch((error) => {
        console.warn(error)
      })
  }
}
</script>
