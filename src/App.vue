<template>
  <div id="app">
    <header class="hacker__header">
      <ToolBar />
    </header>
    <router-view id="main" />
  </div>
</template>

<script>
import 'modern-normalize'
import ToolBar from '@/components/ToolBar'
export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  flex: 1 1 auto;
}
.hacker__header {
  background-color: #42b883;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  #app {
    height: 100vh;
  }
}
</style>
