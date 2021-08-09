<template>
  <main>
    <article class="ask__article">
      <h2 class="ask__title">{{ fetchedItem.title }}</h2>
      <div class="ask__info">
        {{ userInfo(fetchedItem.points) }}
        <router-link :to="`/user/${fetchedItem.user}`" class="ask__link">{{fetchedItem.user}}</router-link>
        <span class="ask__time">{{ fetchedItem.time_ago }}</span>
      </div>
      <div class="ask__contents" v-html="fetchedItem.content"></div>
    </article>
    <article class="comment__article">
      <template v-if="fetchedItem.comments_count > 0">
        <h3 class="comment__title">댓글 {{ fetchedItem.comments_count }}</h3>
        <div v-for="(fetchedItem, index) in comments" :key="index+1" class="comment__item">
          <div class="comment__info">
            <router-link :to="`/user/${fetchedItem.user}`">{{fetchedItem.user}}</router-link>
            <span class="comment__time">{{ fetchedItem.time_ago }}</span>
          </div>
          <div class="comment__contents" v-html="fetchedItem.content"></div>
        </div>
      </template>
      <template v-else>
        <p class="comment__contents--nodata">등록된 댓글이 없습니다.</p>
      </template>
    </article>
  </main>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'ItemView',
  methods: {
    points (val) {
      return val > 1 ? `points` : `point`
    },
    userInfo (val) {
      return val ? `${val} ${this.points(val)} by` : ''
    }
  },
  computed: {
    ...mapGetters({fetchedItem: 'hackerStore/fetchedItem'}),
    comments () {
      return this.fetchedItem.comments.filter(e => !e.deleted)
    }
  },
  created () {
    const itemId = this.$route.query.id
    this.$store.dispatch('hackerStore/FETCH_ITEMS', itemId)
  }
}
</script>
<style lang="scss" scoped>
.ask {
  &__article {
    padding: 0 16px 20px;
  }
  &__contents {
    > /deep/ * {
      &:first-child {
        margin-to: 0;
      }
    }
  }
}

.comment {
  &__article {
    padding: 0 16px;
    flex: 1 1 auto;
    background-color: #e9eaed;
  }
  &__contents {
    &--nodata {
      text-align: center;
    }
  }
  &__item {
    &:nth-of-type(n+2) {
      padding: 20px 0 0 0;
      border-top: 1px solid #ccc;
    }
  }
}
</style>
