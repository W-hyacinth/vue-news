<template>
  <main>
    <div class="hacker-user__table" role="table" aria-labelledby="table__desc">
      <div id="table__desc" class="ally">{{ user.id }} 정보</div>
      <div class="hacker-user__rowgroup" role="rowgroup">
        <div class="hacker-user__row" role="row">
          <div class="hacker-user__rowheader" role="rowheader">user</div>
          <div class="hacker-user__cell" role="cell">{{ user.id }}</div>
        </div>
        <div class="hacker-user__row" role="row">
          <div class="hacker-user__rowheader" role="rowheader">created</div>
          <div class="hacker-user__cell" role="cell">{{ user.created }}</div>
        </div>
        <div class="hacker-user__row" role="row">
          <div class="hacker-user__rowheader" role="rowheader">karma</div>
          <div class="hacker-user__cell" role="cell">{{ user.karma }}</div>
        </div>
        <div v-if="user.about" class="hacker-user__row" role="row">
          <div class="hacker-user__rowheader" role="rowheader">about</div>
          <div v-html="user.about" class="hacker-user__cell" role="cell"></div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
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
  }
}
</script>
<style lang="scss" scoped>
#main {
  padding: 20px 16px;
}
.hacker-user {
  &__table,
  &__rowgroup,
  &__row {
    display: flex;
    flex-direction: column;
  }
  &__row {
    &:nth-of-type(n+2) {
      margin-top: 10px;
    }
  }
  &__rowheader {
    font-size: 14px;
    color: #545454;
  }
  &__cell {
    padding: 8px 10px;
  }
}
@media screen and (min-width: 769px) {
  .hacker-user {
    &__row {
      flex-direction: row;
      &:nth-of-type(n+2) {
        margin-top: 0;
      }
    }
    &__rowheader,
    &__cell {
      padding: 8px 10px;
      font-size: 16px;
    }
    &__rowheader {
      flex: 0 0 auto;
      width: 100px;
      border-width: 0 1px 1px 1px;
    }
    &__cell {
      flex: 0 1 auto;
      width: 100%;
      border-width: 0 1px 1px 0;
    }
    &__row {
      &:first-of-type {
        .hacker-user {
          &__rowheader,
          &__cell {
            border-top-width: 1px;
          }
        }
      }
    }
  }
}
</style>
