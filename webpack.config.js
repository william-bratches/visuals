const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './crt/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'crt.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],      
};