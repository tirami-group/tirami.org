let webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    main: './src/js/main.js'
  },
  output: {
    filename: './static/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      query: {
                presets: ["es2015"]
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('css-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'static/style.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
