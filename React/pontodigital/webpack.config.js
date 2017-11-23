const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {



  resolve: {

    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  }

};