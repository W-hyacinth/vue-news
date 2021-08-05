<template>
  <nav class="hacker__nav">
    <router-link class="hacker__link" to="/news">News</router-link>
    <router-link class="hacker__link" to="/ask">Ask</router-link>
    <router-link class="hacker__link" to="/jobs">Jobs</router-link>
  </nav>
</template>
<script>
export default {
  name: 'ToolBar'
}
</script>
<style lang="scss" scoped>
.hacker {
  &__nav {
    display: flex;
    flex-direction: row;
  }
  &__link {
    display: block;
    position: relative;
    padding: 15px 20px;
    font-weight: 700;
    color: #000;
    text-decoration: none;
    &:hover,
    &:active,
    &:focus,
    &:visited {
      color: inherit;
    }
    &:nth-of-type(n+2) {
      &:before {
        display: block;
        width: 2px;
        height: 33%;
        position: absolute;
        left: -1px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        content: "";
      }
    }
    &.router-link-active {
      color: #fff;
    }
  }
}
</style>
