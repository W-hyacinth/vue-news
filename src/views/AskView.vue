<template>
  <main>
    Ask
    <div v-for="(item, index) in asks" :key="index+1">
      {{ item }}
    </div>
  </main>
</template>
<script>
import {fetchAskList} from '../api'
export default {
  name: 'AskView',
  data () {
    return {
      asks: []
    }
  },
  created() {
    fetchAskList()
      .then((response) => {
        this.asks = response.data
      }).catch((error) => {
        console.warn(error)
      })
  }
}
</script>
