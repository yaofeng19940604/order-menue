const path = require('path')
module.exports = {
  devServer: {
    proxy: 'http://k2stbb.natappfree.cc/order_menue/public/api/'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, "./src/scss/variables.scss"),
        path.resolve(__dirname, "./src/scss/mixin.scss")
      ]
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
}