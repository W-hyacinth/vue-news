<template>
  <main>
    News
    <div v-for="(item, index) in users" :key="index+1">
      {{ item }}
    </div>
  </main>
</template>
<script>
import { fetchNewsList } from '../api'

export default {
  name: 'NewsView',
  data () {
    return {
      users: []
    }
  },
  created () {
    fetchNewsList()
      .then((response) => {
        this.users = response.data
      })
      .catch((error) => {
        console.warn(error)
      })
  }
}
</script>
