<template>
  <main>
    <UserTable :items="this.user" caption="사용자 정보" />
  </main>
</template>
<script>
import { mapState } from 'vuex'
import UserTable from '@/components/UserTable'
import ListMixin from '../mixins/ListMixin'
export default {
  name: 'UserView',
  computed: {
    ...mapState({
      user: state => state.hackerStore.user
    })
  },
  components: {
    UserTable
  },
  mixins: [ListMixin]
}
</script>
<style lang="scss" scoped>
#main {
  padding: 20px 16px;
}
</style>
