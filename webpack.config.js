const path = require('path')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
        // loader: 'style-loader!css-loader'
      }
    ]
  }
}