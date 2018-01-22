const webpack = require('webpack');
const commonPaths = require('./common-paths');

const config = {
  entry: [
    'react-hot-loader/patch',
    commonPaths.entryPath
  ],
  module: {
    rules: [
      {
        test: /\.less/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'eval-source-map'
};

module.exports = config;