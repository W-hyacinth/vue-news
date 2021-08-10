<template>
  <main>
    <UserTable :items="this.user" caption="사용자 정보" />
  </main>
</template>
<script>
import { mapState } from 'vuex'
import UserTable from '@/components/UserTable'
import bus from '@/utils/bus'
export default {
  name: 'UserView',
  computed: {
    ...mapState({
      user: state => state.hackerStore.user
    })
  },
  created () {
    const userName = this.$route.params.id
    bus.$emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('hackerStore/FETCH_USER', userName)
        .then(() => {
          bus.$emit('end:spinner')
        }).catch(error => { console.error(error) })
    }, 3000)
  },
  components: {
    UserTable
  }
}
</script>
<style lang="scss" scoped>
#main {
  padding: 20px 16px;
}
</style>
