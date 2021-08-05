<template>
  <main>
    Ask
    <div v-for="(item, index) in users" :key="index+1">
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
      users: []
    }
  },
  created() {
    fetchAskList()
      .then((response) => {
        this.users = response.data
      }).catch((error) => {
        console.warn(error)
      })
  }
}
</script>
