const webpack= require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

let plugins = [];

plugins.push(new HtmlWebpackPlugin({
  template: './src/assets/index.html',
  favicon: './src/assets/favicon.ico'
}))

let SERVICE_URL = JSON.stringify('http://140.6.254.53:3000/')

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

module.exports = {
    entry: {
      index: [
          "react-hot-loader/patch",
          "./src/index.tsx"
      ]
    },
    output: {
      filename: "[name].bundle.js",
      chunkFilename: "[name].chunk.js",
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
}
