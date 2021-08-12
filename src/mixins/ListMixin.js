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
  mounted () {
    bus.$emit('end:spinner')
  }
}
