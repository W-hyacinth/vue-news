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
<style lang="scss">
.ally {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>
<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#main {
  flex: 1 1 auto;
  padding: 20px 16px;
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
