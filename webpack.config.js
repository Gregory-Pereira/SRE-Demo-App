const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'public/');
const ENTRY = path.resolve(__dirname, 'client/index.jsx');
const Entry_DIR = path.resolve(__dirname, 'client/');


module.exports = {
  mode: 'development',
  entry: ENTRY,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: Entry_DIR,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      }
    ]
  }
}