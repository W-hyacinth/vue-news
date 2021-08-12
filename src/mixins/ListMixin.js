import Vue from 'vue'
import { mapState } from 'vuex'
import bus from '../utils/bus'

Vue.use('vuex')

export default {
  computed: {
    ...mapState({
      list: state => state.hackerStore.list
    })
  },
  created () {
    bus.$emit('start:spinner')
    this.$store.dispatch('hackerStore/FETCH_LISTS', this.$route.name)
      .then(() => {
        console.log('fetched', this.$route.name)
        bus.$emit('end:spinner')
      }).catch(error => { console.error(error) })
  }
}
