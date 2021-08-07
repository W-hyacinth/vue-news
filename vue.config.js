// webpack.config.js
module.exports = {
  devServer: {
    proxy: {
      '/v0': {
        target: 'api.hnpwa.com',
        changeOrigin: true
      }
    }
  }
}
