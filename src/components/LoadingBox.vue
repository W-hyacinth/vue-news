<template>
  <div class="loading__box" v-if="isLoading">
    <div class="spinner"></div>
  </div>
</template>
<script>
export default {
  name: 'LoadingBox',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
      default: () => { return true }
    }
  }
}
</script>
<style lang="scss" scoped>
.loading__box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  &[aria-hidden="true"] {
    display: none;
  }
  .spinner {
    flex: 0 0 auto;
    width: 30px;
    height: 30px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    position: relative;
    animation: spinner 1s linear infinite;
    &:after {
      content: '';
      position: absolute;
      top: 17px;
      left: 16px;
      width: 5px;
      height: 5px;
      background: #fff;
      border-radius: 50%;
    }
  }
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
    &:after {
      display: block;
      width: 30px;
      height: 30px;
      border: 4px solid #f3f3f3;
      border-radius: 50%;
      border-top: 4px solid #3498db;
      animation: spin 1.5s linear infinite;
      content: "";
    }
    @-webkit-keyframes spin {
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @-moz-keyframes spin {
      0% { -moz-transform: rotate(0deg); }
      100% { -moz-transform: rotate(360deg); }
    }
  }
}
</style>
