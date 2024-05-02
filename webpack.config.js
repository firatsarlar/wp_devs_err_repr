const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  // Use the HTML file in src as a template
    })
  ],
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 45000,
    host: '0.0.0.0',  // Allow server to be accessible externally
    // open: true,
    headers: {
      'Access-Control-Allow-Origin': '*', // Only if necessary!
    },
    historyApiFallback: true,
    // hot:false,
  },
};
