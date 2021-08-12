<template>
  <main>
    <ListItem :list="list" listType="order" />
  </main>
</template>
<script>
import ListItem from '@/components/ListItem'
import ListMixin from '../mixins/ListMixin'

export default {
  name: 'NewsView',
  components: {
    ListItem
  },
  mixins: [ListMixin]
}
</script>
