<template>
  <main>
    <ListItem :list="list" />
  </main>
</template>
<script>
import ListItem from '@/components/ListItem'
import ListMixin from '../mixins/ListMixin'
export default {
  name: 'JobsView',
  components: {
    ListItem
  },
  mixins: [ListMixin]
}
</script>
