import webpack from 'webpack';
import path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [];

// TODO @leobronza lazy loading

plugins.push(new HtmlWebpackPlugin({
  template: './src/assets/index.html',
  favicon: './src/assets/favicon.ico'
}))

let SERVICE_URL = JSON.stringify('http://192.168.1.3:3000/')

if(process.env.NODE_ENV == 'production'){
  plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  SERVICE_URL = JSON.stringify('http://TODOURLPRODUCTION:3000/')
}else{
  plugins.push(new webpack.HotModuleReplacementPlugin())
  plugins.push(new webpack.NamedModulesPlugin())
}

plugins.push(new webpack.DefinePlugin({
  SERVICE_URL: SERVICE_URL
}))

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
    plugins:plugins,
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
