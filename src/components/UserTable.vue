<template>
  <div class="hacker-user__table" role="table" :aria-labelledby="id">
    <div :id="id" :class="{ally: isCaptionHide}">{{ caption }}</div>
    <div class="hacker-user__rowgroup" role="rowgroup">
      <template v-if="fieldSet.length > 0">
        <div v-for="(item, index) in fieldSet" :key="index + 1" class="hacker-user__row" role="row">
          <div class="hacker-user__rowheader" role="rowheader">{{ item }}</div>
          <div class="hacker-user__cell" role="cell" v-html="items[item]"></div>
        </div>
      </template>
      <template v-else>
        <div class="hacker-user__row" role="row">
          <div class="hacker-user__cell" role="cell">데이터가 존재하지 않습니다.</div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserTable',
  props: {
    id: {
      type: String,
      default: () => {
        const randomStr = Math.random().toString(36).substr(2, 6)
        return `table__id--${randomStr}`
      }
    },
    caption: {
      type: String,
      default: () => { return '' }
    },
    isCaptionHide: {
      type: Boolean,
      default: () => { return true }
    },
    items: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    fieldSet () {
      const field = Object.keys(this.items).filter((e) => {
        return this.items[e]
      })
      return field
    }
  }
}
</script>
<style lang="scss" scoped>
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
