/**
 * Created by Yash on 04/03/16.
 */

import mongoose from 'mongoose';
import secrets from './secrets';

module.exports = function () {
  console.log('**************************************************');
  mongoose.connect(secrets.db, function (err, res) {
    if (err) {
      console.log('Error connecting to: ' + secrets.db + '. ' + err);
    } else {
      console.log('Succeeded connected to: ' + secrets.db);
    }
  });

  mongoose.connection.on('error', console.log);
  //mongoose.connection.on('disconnected', connect);

};
