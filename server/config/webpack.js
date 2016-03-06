/**
 * Created by Yash on 04/03/16.
 */

import _ from 'lodash';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';

module.exports = function (app) {

  _.merge({
    output: {
      path: '/static',
      publicPath: '/static'
    }
  }, webpackConfig);

  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    //noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
      //hash: false,
      //version: false,
      //timings: false,
      //assets: false,
      //modules: false,
      //reasons: false,
      //children: false,
      //source: false,
      //errors: false,
      //errorDetails: false,
      //warnings: false,
      //publicPath: false
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));
};


