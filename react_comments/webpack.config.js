var path = require('path');
var webpack = require('webpack');
var sources = path.join(__dirname, 'src');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    // path: path.join(__dirname, 'public', 'build'),
    path: path.join(__dirname, 'public'),
    filename: 'build/bundle.js',
    publicPath: 'build/'
  },
  plugins: [
    // new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'react-hot',
      include: sources
    },{
      test: /\.jsx?$/,
      loader: 'babel',
      include: sources
      // query: {
      //   presets: ['es2015', 'stage-0', 'react']
      // },
      // plugins: ['transform-runtime']
    },

  ]
  },
  resolve: {
    // you can now require('file') instead of require('file.jsx')
    extensions: ["", ".js", ".jsx"],
    // root: [path.join(__dirname, "src", "javascripts")],
    modulesDirectories: ["node_modules"]
  }
};
