const { merge } = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: pathData => {
      return pathData.chunk.name === 'main'
        ? 'js/[name].[contenthash].bundle.js'
        : 'js/[name]/[name].[contenthash].bundle.js'
    },
  },
  devtool: 'source-map',
})
