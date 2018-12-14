const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'client/index.jsx'),
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react'],
        },
      },
    },
    {
      test: /\.png$/,
      use: {
        loader: 'url-loader',
      },
    }]
  },
  resolve: {
    extensions: ['.js','.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  watch: true,
};
