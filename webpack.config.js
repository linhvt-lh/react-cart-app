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
         },
         {
            test: [/\.wexbim$/, /\.docx$/, /\.csv$/, /\.mp4$/, /\.xlsx$/, /\.doc$/, /\.avi$/, /\.webm$/, /\.mov$/, /\.mp3$/, /\.pdf$/],
            use: [
              'file-loader',
            ],
            type: 'javascript/auto',
          },
          {
            test: /\.(png|jpg)$/,
            dependency: { not: ['url'] },
            use: [
              'url-loader?limit=200000',
            ],
            type: 'javascript/auto',
          },
          {
            test: /\.(gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  query: {
                    name: 'assets/[name].[ext]',
                  },
                },
              },
            ],
            type: 'javascript/auto',
          },
          {
            test: /\.jsx\.html$/,
            exclude: /node_modules/,
            use: [
              'babel!react-pure-html-component',
            ],
          },
          {
            test: /\.css$/,
            use: [
              'css-loader',
            ],
          },
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx', '.jsx.html'],
      modules: [
        path.join(__dirname, 'node_modules'),
      ],
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
