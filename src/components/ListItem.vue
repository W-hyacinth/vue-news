<template>
  <ul class="hacker__list" :class="{'hacker__list--order': listType === 'order'}">
    <li class="hacker__item" v-for="(item, index) in list" :key="index+1">
      <div class="hacker-info">
        <div class="hacker-info__title">
          <template v-if="pageName === 'AskView'">
            <router-link :to="`/ask/item?id=${item.id}`" class="hacker-info__link">{{ item.title }}</router-link>
          </template>
          <template v-else>
            <a :href="item.url" class="hacker-info__link" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
          </template>
          <span class="hacker-info__domain" v-if="item.domain">({{item.domain}})</span>
        </div>
        <div class="hacker-user">
          {{ pointsInfo(item.points) }}
          <router-link :to="`/user/${item.user}`" v-if="item.user" class="hacker-user__link">{{item.user}}</router-link>
          <span class="hacker-user__time">{{ item.time_ago }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ListItem',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    listType: {
      type: String,
      default: 'default',
      validator (value) {
        return ['default', 'order'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    pageName () {
      return this.$route.name
    }
  },
  methods: {
    points (val) {
      return val > 1 ? `points` : `point`
    },
    pointsInfo (val) {
      return val ? `${val} ${this.points(val)} by` : ''
    }
  }
}
</script>
<style lang="scss" scoped>
.hacker {
  &__list {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin: 0;
    &--order {
      counter-reset: section;
      .hacker__item {
        flex-direction: row;
        counter-increment: section;
        &:before {
          flex: 0 0 auto;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 12px;
          font-weight: 700;
          font-size: 20px;
          color: #42b883;
          content: counter(section);
        }
      }
    }
  }
  &__item {
    display: flex;
    flex-direction: column;
    padding: 15px 0;
    &:nth-of-type(n+2) {
      border-top: 1px solid #ccc;
    }
  }
}
.hacker-info {
  flex: 0 1 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  &__link {
    margin-right: 5px;
    font-weight: 700;
    font-size: 16px;
    color: #000;
    text-decoration: none;
    &:hover,
    &:focus {
      color: #42b883;
      text-decoration: underline;
    }
  }
  &__domain {
    font-size: 12px;
    color: #545454;
  }
}
.hacker-user {
  margin-top: 20px;
  font-size: 14px;
  color: #545454;
  &__link {
    color: #545454;
    &:active,
    &:visited,
    &:hover,
    &:focus {
      color: inherit;
    }
  }
}
@media screen and (min-width: 769px) {
  .hacker {
    &__list {
      &--order {
        .hacker__item {
          &:before {
            width: 50px;
            height: 50px;
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
