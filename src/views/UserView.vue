<template>
  <main>
    <UserTable :items="this.user" caption="사용자 정보" />
  </main>
</template>
<script>
import UserTable from '@/components/UserTable'
import { mapState } from 'vuex'
export default {
  name: 'UserView',
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created () {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
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
