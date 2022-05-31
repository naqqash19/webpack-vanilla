const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: pathData => {
      return pathData.chunk.name === 'main'
        ? 'js/[name].bundle.js'
        : 'js/[name]/[name].bundle.js'
    },
  },
  devServer: {
    open: true,
    port: 3000,
    static: false,
  },
  devtool: 'eval-cheap-module-source-map',
})
