<template>
  <div id="app">
    <header class="hacker__header">
      <h1 class="ally">HACKER NEWS</h1>
      <ToolBar />
    </header>
    <transition name="fade" mode="out-in">
      <router-view id="main" :key="$route.name" />
    </transition>
    <LoadingBox :isLoading="loadingStatus" />
  </div>
</template>

<script>
import 'modern-normalize'
import ToolBar from '@/components/ToolBar'
import LoadingBox from '@/components/LoadingBox'
import bus from '@/utils/bus'
export default {
  name: 'App',
  data () {
    return {
      loadingStatus: true
    }
  },
  methods: {
    startSpinner () {
      this.loadingStatus = true
    },
    endSpinner () {
      this.loadingStatus = false
    }
  },
  created () {
    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy () {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  },
  components: {
    LoadingBox,
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
  display: flex;
  flex-direction: column;
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
