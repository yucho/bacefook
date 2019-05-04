path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'frontend', 'main.jsx'),
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'frontend'),
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
      components: path.resolve(__dirname, 'frontend', 'components')
    }
  },
  devtool: 'inline-source-map'
};
