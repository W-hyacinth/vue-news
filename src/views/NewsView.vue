<template>
  <main>
    News
    <div v-for="(item, index) in news" :key="index+1">
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
      news: []
    }
  },
  created () {
    fetchNewsList()
      .then((response) => {
        this.news = response.data
      })
      .catch((error) => {
        console.warn(error)
      })
  }
}
</script>
