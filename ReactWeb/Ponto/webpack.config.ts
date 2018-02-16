import * as webpack from 'webpack';
import * as path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');

export default function(args: any): webpack.Configuration {
  return {
    entry: {
      index: [
          "react-hot-loader/patch",
          "./src/index.tsx"
      ]
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      sourceMapFilename: "bundle.js.map"
    },
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      historyApiFallback: true
    },
    resolve: {
      extensions: [
        '.js',
        '.ts',
        '.tsx'
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
          template: './src/assets/index.html',
          favicon: './src/assets/favicon.ico'
          
      }),
    ],
    module: {
      rules: [  
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.js$/,
          use: [
            'source-map-loader'
          ],
          enforce: 'pre',
        },
        {
          test: /\.tsx?$/,
          use: ['react-hot-loader/webpack','ts-loader']
        }
      ]
    }
  };  
}
