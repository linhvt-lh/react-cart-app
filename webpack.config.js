const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
// replace accordingly './.env' with the path of your .env file 
require('dotenv').config({ path: './.env' }); 

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js',
      publicPath: '/'
   },
   devServer: {
      // inline: true,
      historyApiFallback: true,
      port: 8001,
      proxy: {
         '/api': {
              target: 'http://localhost:8001',
              router: () => 'http://localhost:4001',
              logLevel: 'debug' /*optional*/
         }
      }
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-react', '@babel/preset-env'],
               plugins: ['@babel/plugin-transform-runtime'],
             },
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      }),
      new webpack.DefinePlugin({
         "process.env": JSON.stringify(process.env),
       }),
   ],
}
