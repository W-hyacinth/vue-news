<template>
  <main>
    Jobs
    <div v-for="(item, index) in users" :key="index+1">
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
      users: []
    }
  },
  created() {
    fetchJobsList()
      .then((response) => {
        this.users = response.data
      }).catch((error) => {
      console.warn(error)
    })
  }
}
</script>
