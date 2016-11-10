'use strict';
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let config = require('./webpack.development.config.js');
config.entry = path.resolve(path.join(__dirname, 'src', 'client', 'index.js'));
config.output = {
  path: path.join(__dirname, "lib"),
  libraryTarget: 'umd'
};
delete config.watch;
delete config.devtool;
delete config.output.publicPath;
config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false,
      screw_ie8: true
    },
    comments: false
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerPort: 8888,
    reportFilename: 'report.html',
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null
  })
]);

module.exports = config;
