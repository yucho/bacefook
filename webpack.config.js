const path = require('path');
const root = (...args) => path.resolve(__dirname, ...args);
const frontend = (...args) => root('frontend', ...args);

module.exports = {
  entry: frontend('main.jsx'),
  output: {
    path: root('app', 'assets', 'javascripts')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: frontend(),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
      actions: frontend('actions'),
      components: frontend('components'),
      middleware: frontend('middleware'),
      reducers: frontend('reducers'),
      store: frontend('store'),
      util: frontend('util')
    }
  },
  devtool: 'inline-source-map'
};
