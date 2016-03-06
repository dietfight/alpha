/**
 * Created by Yash on 04/03/16.
 */

import express from 'express';
import bodyParser from 'body-parser';
//import methodOverride from 'method-override';
import path from 'path';
import constants from './constants'


module.exports = function (app) {

  app.set('port', (process.env.PORT || constants.EXPRESS_PORT));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
  //app.use(methodOverride());

  app.use('/static', express.static(path.resolve(__dirname, '../../dist')));


  app.listen(3000, () => {
    if (process.send) {
      process.send({
        status: 'online',
        port: 3000
      });
    }

    console.log("Express Server running at " + constants.EXPRESS_PORT + "......");
  });
};
